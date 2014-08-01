// static page
// About
exports.about = function (req, res, next) {
  res.render('static/about');
};

// FAQ
exports.faq = function (req, res, next) {
  res.render('static/faq');
};
//LabPhoto
exports.labPhoto = function(req,res,next){
    res.render('static/labPhoto');
}
