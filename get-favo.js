// twitterモジュールを読み込み
var twitter = require('twitter');
var fs = require('fs');
var https = require('https');

var client = new twitter(JSON.parse(fs.readFileSync('app.json', 'utf-8')));

// ファボ取得
client.get('favorites/list', function(error, tweets) {
  if(error) throw error;
  tweets.forEach(function(tweet) {
    var favo = tweet.text; 

    // urlのみを取得
    var reg = new RegExp('http(s)?://([\\w-]+\.)+[\\w-]+(/[\\w-./?%&=]*)?', 'gi');
    var url = favo.match(reg);
    console.log(url[0]);
    
    // リダイレクト先を取得
    var req = https.get(url[0], function(url) {
      url.setEncoding('utf8');
      console.log(url.statusCode);//301とか310
      var location = url.headers.location;
      console.log(location);//リダイレクトされる先
    });
  });
});
