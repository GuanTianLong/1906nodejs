    const MongoClient = require('mongodb').MongoClient;
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    const uri = "mongodb://192.168.198.190";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {

        //选择数据数据库和集合
        const collection = client.db("1906shop").collection("users");
    // perform actions on the collection object

    //给users表修改一条数据
    collection.updateOne({name: "王五"}, {$set: {name: "小黄"}}), function (err, docs) {

        if (docs.result.ok==1) {
            console.log("数据更新成功");
        }


        client.close();

    }

    });