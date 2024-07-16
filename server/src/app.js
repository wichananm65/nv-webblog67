let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/status', function(req, res){
    console.log('------------------------------');
    console.log(req);
    console.log('------------------------------');
    res.send('Hello nodejs server');
})

app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
})

let port = 8081

//get user by id
app.get('/user/:userId',function(req,res){
    res.send('ดูข้อมูลผู้ใช้ ' + req.params.userId)
})

//get all user
app.get('/users',function (req, res){
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})

//create user
app.post('/user/', function (req, res){
    res.send('ทำการสร้างข้อมูลผู้ใช้: ' + JSON.stringify(req.body))
})

//edit user
app.put('/user/:userId', function (req, res) {
    res.send('ทำการแก้ไขข้อมูลผู้ใช้: ' + req.params.userId + ':' + JSON.stringify(req.body))
})

//delete user
app.delete('/user/:userId', function (req, res) {
    res.send('ทำการลบผู้ใช้: ' + req.params.userId + ':' + JSON.stringify(req.body))
})

app.listen(port, function(){
    console.log('Server running on http://localhost:' + port)
});
