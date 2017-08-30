if(process.env.NODE_ENV === 'production'){
  // return production keys
  module.exports = require('./prod')
} else {
  // development keys
  module.exports = require('./dev')
}
