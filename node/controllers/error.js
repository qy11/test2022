exports.get404 = (req, res, next) => {
	res.status(404).render('404', {pageTitle: '页面走丢了', path: ""});
};