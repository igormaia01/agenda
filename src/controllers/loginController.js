const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if(req.session.user) return res.render('login-logado')
  return res.render('login');
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('index');
      });
      return;
    }
    req.flash('success', 'Usuario criado com sucesso!');
    req.session.save(function () {
      return res.redirect('index');
    });
  } catch (error) {
    console.log(error);
    return req.render('404');
  }
};


exports.login = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('index');
      });
      return;
    }

    req.flash('success', 'Logado com sucesso');
    req.session.user = login.user;

    req.session.save(function () {
      return res.redirect('index');
    });
  } catch (error) {
    console.log(error);
    return req.render('404');
  }
};


exports.logout = function(req, res) {
  req.session.destroy();
  res.redirect('/')
}