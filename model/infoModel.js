var mongoose = require('mongoose')


var infoSckema = new mongoose.Schema({
    name:'string',
    sex:'string',
    telNumber:'string',
    school:'string',
    address:'string',
    Interest:'string'
})


mongoose.connect('mongodb://154.8.170.176:27017/djb',{ useNewUrlParser: true },function(err){
    if(err){
        console.log(err)
    }else{
        console.log('连接成功')
    }
})

infoSckema.query.byName = function(name){
    return this.find({name: new regExp(name)})
}

infoSckema.query.byTel = function(tel){
    return this.find({telnumber: tel})
}
infoSckema.query.bySex = function(sex){
    return this.find({sex: sex})
}
infoSckema.query.byInterest = function(interest){
    return this.find({interest: interest})
}

module.exports = mongoose.model("djbModel",infoSckema);