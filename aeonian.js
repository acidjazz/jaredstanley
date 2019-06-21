require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'js-',
    region: 'us-east-1',
    remove_old: true,
  },
  environments: {
    production: 'E3D9Z1FN0Y2ZV8',
    staging: 'E2IJDJMU82O1GK',
  }
}).deploy(process.argv[2])
