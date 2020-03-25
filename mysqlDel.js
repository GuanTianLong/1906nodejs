    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : '1906shop'
    });

    connection.connect();

    connection.query("DELETE FROM p_goods WHERE goods_id = 16", function (error, results, fields) {
        if (error) throw error;

        console.log(results);
    });

    connection.end();