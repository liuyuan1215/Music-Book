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
    var uid=req.session.USER_ID;
    Blog_model.get_catalogs_by_id(uid,function(err,data){
        res.render('newBlog',{
            'sess':req.session,
            'catalogs':data
        })
    })
}
// exports.add=function(req,res,next){
// 	res.render("newBlog",{
// 		"sess":req.session
// 	});
// }

exports.do_add=function(req,res,next){
    var title=req.body.title;
    var content=req.body.content;
    var str=moment().format();;
    var arr=str.split("T");
    console.log(arr);
    var date=arr[0];
    // var date2=arr[1];
    // var date=[...date1,...date2];
    // console.log(date);
    console.log(moment().format());
    var uid=req.session.USER_ID;
    var cid=req.body.catalog;
    Blog_model.ins_blog_by_data(title,content,cid,date,uid,function(err,data){
        if(data.affectedRows>0){
            res.redirect('/index');
        }
    })
}

exports.Catalog=function(req,res,next){
    var uid=req.session.USER_ID;
    Blog_model.checkCatalog(uid,function(err,data){
        res.render()
    })
}