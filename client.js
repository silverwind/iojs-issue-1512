(function get() {
  require('https').get({
    url:'https://localhost/',
    rejectUnauthorized:false
  }, function(res) {
    res.resume();
    get();
  }).on('error', console.error);
})();
