    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : '1906shop'
    });

    connection.connect();

    connection.query("UPDATE p_goods set `goods_name` = 'OPPO Reno' WHERE goods_id = 15", function (error, results, fields) {
        if (error) throw error;

        console.log(results);
    });

    connection.end();