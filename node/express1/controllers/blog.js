var Blog_model=require('../models/blog_model.js');

exports.index=function(req,res,next){
    Blog_model.sel_all(function(err,data){
        res.render('index.ejs',{
            'title':'ly',
            'sess':req.session,
            'posts':data,
        });
    });
}