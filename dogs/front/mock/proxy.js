module.exports = function(req, res, next) {
  // console.log('req:',req)
  // console.log('res:',res)
  if (req.method === 'POST') {
    req.method = 'GET';
    if (req.body.id === 'shirakurak' && req.body.password === 'P@ssw0rd'){
      req.url += "_200"
    } else {
      req.url += "_401"
      res.statusCode = 401;
      res.statusMessage = "UNAUTHORIZED";
    }
  }
  next();
};
