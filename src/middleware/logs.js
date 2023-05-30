const logRequest = (req, res, next) => {
  console.log(`Log request to ${req.path} with method ${req.method}`);
  next();
};

export default logRequest;
