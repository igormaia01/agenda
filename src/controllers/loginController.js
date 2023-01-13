const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
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
