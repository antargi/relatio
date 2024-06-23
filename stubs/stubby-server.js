const Stubby = require('stubby').Stubby;
const yaml = require('js-yaml');
const fs = require('fs');
const chalk = require('chalk');
const { encrypt } = require('omnichannel2-lib-common').security;
const mockService = new Stubby();
const log = console.log;

const dir = 'stubs';
const STUB_FILENAME = concatYml(dir);
log(chalk.red('\n\n>>Starting stubby with encryption...\n\n'))

const stubData = loadYml(STUB_FILENAME);

const options = {
  data: stubData, 
  stubs: 3000,
  admin: 8893,
  quiet: false,
  datadir: 'stubs'
}

mockService.start(options);

process.on('SIGHUP', function() {
  mockService.delete(function () { mockService.start(options); });
})

function checkConfigFileForEndpointsToEncrypt(configFileName){
  const configFilePath = `${__dirname}/${configFileName}`
  const stubData = getDataFromYamlFile(configFilePath)
  stubData.forEach(e => {
    if(e.response.needs_encryptation){
      replaceFileWithContentData(e.response)
      if(checkFlagAndEncrypt(e.response)){
        log(chalk.green(`Encrypted response ${e.request.url}`))
      }
    }
  });
  return stubData;
}

function checkFlagAndEncrypt(response){
  if(response.needs_encryptation){
    const responsePassword = 'password'
    response.body = encrypt(response.body, responsePassword)
    response.body.p = responsePassword
    return true
  }
  return false
}

function replaceFileWithContentData(response){
  if(response.file){
    try {
      const data = fs.readFileSync(  `${__dirname}/${response.file}`, 'utf8')
      response.body = JSON.parse(data)
      delete response.file
      return true
    } catch (e) {
      console.warn('File "' + response.file + '" could not be found. Ignoring...');
      return false
    }
  }
}

function getDataFromYamlFile(filename) {
  var filedata;

  if (filename === null) { return []; }

  try {
    filedata = (fs.readFileSync(filename, 'utf8')).trim();
  } catch (e) {
    console.warn('File "' + filename + '" could not be found. Ignoring...');
    return [];
  }

  try {
    return yaml.load(filedata);
  } catch (e) {
    console.warn('Couldn\'t parse "' + filename + '" due to syntax errors:');
    console.log(e.message);
    process.exit(0);
  }
}

function concatYml(dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function(file) {
      file = dir + '/' + file;
      var stat = fs.statSync(file);
      if (stat && stat.isDirectory()) { 
          /* Recurse into a subdirectory */
          results = results.concat(concatYml(file));
      } else { 
        if(getFileExtension(file)==='yml' || getFileExtension(file)==='yaml'){
          file= file.replace('stubs', '');
          results.push(file);
        }
      }
  });
  return results;
}

function getFileExtension(filename) {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}

function loadYml(yml) {
  let stubbys = [];
  yml.forEach(file => {
    let newYml = checkConfigFileForEndpointsToEncrypt(file);
    stubbys = stubbys.concat(newYml);
  })
  return stubbys;
}
