module.exports = (error, request, response, next) => {
  console.log('Error Handler', error);
  response.status(500).json(error);
};
