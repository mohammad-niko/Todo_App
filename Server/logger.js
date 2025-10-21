export const logger = (req, res, next) => {
  console.log(`Method: ${req.method} , URL: ${req.url} , DATA: ${new Date().toISOString()}`);
  next();
};
