require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'js-',
    region: 'us-east-1',
    remove_old: true,
  },
  environments: {
    production: 'E94X938RF0XXW',
    staging: 'E21M8FCVIIDEFZ',
  }
}).deploy(process.argv[2])
