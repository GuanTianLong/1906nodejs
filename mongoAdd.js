    const MongoClient = require('mongodb').MongoClient;
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    const uri = "mongodb://192.168.198.190";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {

        //选择数据数据库和集合
        const collection = client.db("1906shop").collection("users");
    // perform actions on the collection object


    var data = {
        name:"小红",
        age:18,
        sex:"女",
        address:"北京"
    }
    //给users表添加一条数据
    collection.insertOne(data,function (err,docs) {

        if(docs.result.ok==1){
            console.log("增加数据成功");
        }
    })


    client.close();

    });