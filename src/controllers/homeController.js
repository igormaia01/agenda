exports.index = (req, res) => {
  console.log(res.locals.errors)
  res.render('index');
};
