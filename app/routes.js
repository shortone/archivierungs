var path = require('path');

module.exports = function(app) {

  // frontend route =============================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
  });
};
