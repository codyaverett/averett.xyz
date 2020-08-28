exports.handler = function(event, context, callback) {
  return new Promise((resolve) => { resolve(new Date().toString())});
}
