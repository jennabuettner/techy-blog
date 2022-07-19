const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      res.redirect('/allposts')
    }
  };
  
  module.exports = withAuth;

  // make sure to fix redirect if it's not accurate
