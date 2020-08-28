exports.handler = function(event, context, callback) {
  return new Promise.resolve(new Date().toString());
}
