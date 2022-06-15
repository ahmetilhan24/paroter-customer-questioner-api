const joiErrorHandler = (errors) => {
  let errArray = [];
  errors.forEach((error) => {
    errArray.push(error.message);
  });
  return errArray;
};

module.exports = joiErrorHandler;
