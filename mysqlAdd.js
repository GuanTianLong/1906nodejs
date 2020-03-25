    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : '1906shop'
    });

    connection.connect();

    connection.query("INSERT INTO p_goods(`goods_name`,`goods_price`) values ('oppoR9','2999')", function (error, results, fields) {
        if (error) throw error;

        console.log(results);
    });

    connection.end();