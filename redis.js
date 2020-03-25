    const redis = require('redis');

    //连接的主机
    const redis_host = "127.0.0.1";

    //端口
    const redis_port = "6379";

    //密码
    const redis_pass = "dargon123";

    //连接redis
    const client = redis.createClient(redis_port,redis_host);

    //连接密码
    client.auth(redis_pass);

    client.on("error", function(error) {
        console.error(error);
    });

    client.hmset("info","name","zhangsan","sex","M","age","20",redis.print);
    client.hgetall("info", redis.print);

    //设置key的过期时间为120秒
    client.expire("info",120);