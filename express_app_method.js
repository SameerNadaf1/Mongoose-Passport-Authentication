// const { response } = require('./config/server.config');
var app=require('./config/server.config');
app.get('/',function(req,res){
    // res.send('WElcome to express');
    res.render('login',{"title":"User Login"});
});
app.post('/',function(req,res){
    let stud_name=req.body.stud_name;
    res.send(stud_name+ 'Welcome to mca dept');
});

app.post('/add',function(req,res){
    let oprand1=req.body.oprand1;
    let oprand2=req.body.oprand2;
    let result=oprand1+oprand2;
    res.send('Result of Addition is:'+result);
});
