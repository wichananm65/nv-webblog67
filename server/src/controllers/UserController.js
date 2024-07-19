module.exports = {
    index(req, res){
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
    },
    create(req, res){
        res.send('ทำการสร้างข้อมูลผู้ใช้: ' + JSON.stringify(req.body))
    },
    edit(req, res){
        res.send('ทำการแก้ไขข้อมูลผู้ใช้: ' + req.params.userId + ':' + JSON.stringify(req.body))
    },
    remove(req, res){
        res.send('ทำการลบผู้ใช้: ' + req.params.userId + ':' + JSON.stringify(req.body))
    },
    show(req, res){
        res.send('ดูข้อมูลผู้ใช้ ' + req.params.userId)
    },
}