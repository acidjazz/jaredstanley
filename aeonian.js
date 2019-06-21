require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'js-',
    region: 'us-east-1',
    remove_old: true,
  },
  environments: {
    production: 'E94X938RF0XXW',
    staging: 'E2IJDJMU82O1GK',
  }
}).deploy(process.argv[2])
