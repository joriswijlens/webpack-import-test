const path = require('path')
const helpPath = path.join(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? 'dist' :'src',
    'help.js'
);
const {help} = require(helpPath)

help()
console.log('test')