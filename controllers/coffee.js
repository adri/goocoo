/**
 * GET /coffee
 * Home page.
 */

exports.index = function(req, res) {
  res.render('coffee', {
    title: 'Coffee'
  });
};
