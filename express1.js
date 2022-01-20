var express =require('express');
var app=express();
//app.use(function(req,res)
//{
    //res.send("welcome to express js");
    
//});
app.set('student','Student');
app.set('admin','Adminstrator')
app.use('/student',function(req,res)
{
    res.send("Welcome to Express-Js" +app.get('student'));
    
});
app.use('/admin',function(req,res)
{
    res.send("Welcome to Express-Js" +app.get('admin'));
    
});
let member_name='';
app.param('name',function(req,res,next,name){
    member_name=name;
    next();
});
app.use('/staff/:name',function(req,res){
    res.send(member_name+'Welcome to MCA Dept');
});
app.listen(3000);
console.log('server started');

