var Blog_model=require('../models/blog_model.js');
var moment=require('moment');

exports.index=function(req,res,next){
    // Blog_model.sel_all(function(err,data){
    //     // console.log(data);
    //     res.render('index_logined',{
    //         'blogs':data,
    //         'sess':req.session
    //     })
    // })
    var uid=req.session.USER_ID;
    Blog_model.sel_id_by_data(uid,function(err,data){
        res.render('index_logined',{
            'blogs':data,
            'sess':req.session
        })
    });
}

exports.add=function(req,res,next){
    res.render('newBlog',{
        'sess':req.session
    })
}

exports.do_add=function(req,res,next){
    var title=req.body.title;
    var content=req.body.content;
    var date=moment().format();
    var uid=req.session.USER_ID;
    Blog_model.ins_blog_by_data(title,content,date,uid,function(err,data){
        if(data.affectedRows>0){
            res.redirect('/index');
        }
    })
}