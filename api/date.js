exports.handler = function(event, context, callback) {
  return new {
    statusCode: 200,
    body: `${new Date()}`
  }
}
