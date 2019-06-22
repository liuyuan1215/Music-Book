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
    // console.log(arr);
    var date=arr[0];
    // var date2=arr[1];
    // var date=[...date1,...date2];
    // console.log(date);
    // console.log(moment().format());
    var uid=req.session.USER_ID;
    var cid=req.body.catalog;
    Blog_model.ins_blog_by_data(title,content,cid,date,uid,function(err,data){
        if(data.affectedRows>0){
            Blog_model.update_catalog_by_count(cid,function(err,data){
                if(data.affectedRows>0){
                    res.redirect('/index');
                }              
            })        
        }
    })
}

exports.Catalog=function(req,res,next){
    var uid=req.session.USER_ID;
    Blog_model.checkCatalog(uid,function(err,data){
        res.render('blogCatalogs',{
            'sess':req.session,
            'catalogs':data
        })
    })
}

exports.addBlogCatalog=function(req,res,next){
    var cname=req.body.name;
    var uid=req.session.USER_ID;
    Blog_model.add_catalog(cname,uid,function(err,data){
        if(data.affectedRows>0){
            res.redirect('/blogCatalogs');
        }
    })
}

exports.update=function(req,res,next){
    var bid=req.query.bid;
    Blog_model.sel_data_by_bid(bid,function(err,data){
        if(data.length>0){
            res.render('updateBlog',{
                'sess':req.session,
                'blog':data[0]
            });
        }
    })
}

exports.do_update=function(req,res,next){
    var title=req.body.title;
    var content=req.body.content;
    var hid=req.body.hid;
    Blog_model.update_data(title,content,hid,function(err,data){
        if(data.affectedRows>0){
            res.redirect('/index');
        }
    })
}

exports.del=function(req,res,next){
    var bid=req.query.bid;
    Blog_model.del_data_by_bid(bid,function(err,data){
        if(data.affectedRows>0){
            res.redirect('/index');
        }
    })
}

exports.all=function(req,res,next){
    var bid=req.query.bid;
    Blog_model.update_hits_by_bid(bid,function(err,data){
        if(data.affectedRows>0){
            Blog_model.sel_data_by_bid(bid,function(err,data){
                if(data.length>0){
                    var blog_data_one=data[0];
                    Blog_model.get_up_by_one(bid,function(err,data){
                        if(data.length>0){
                            var up_data=data[0];
                        }else{
                            var up_data='';
                        }
                        Blog_model.get_down_by_one(bid,function(err,data){
                            if(data.length>0){
                                var down_data=data[0];
                            }else{
                                var down_data='';
                            }
                            res.render('viewPost_logined',{
                                'sess':req.session,
                                'maindata':blog_data_one,
                                'prevdata':up_data,
                                'nextdata':down_data
                            });
                        });
                    });
                }
            })
        }
    })
}