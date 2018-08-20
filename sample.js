// 短縮url展開
var http = require('https');

var url = 'https://t.co/j6oxSfDzlp';
var req = http.get(url, function(res) {
    res.setEncoding('utf8');
    console.log(res)
    res.on('data', function(str) {
        console.log(str);//htmlが入る
        console.log(res.statusCode);//301とか310
        var location = res.headers.location;
        console.log(location);//リダイレクトされる先
    });
});
req.end();
