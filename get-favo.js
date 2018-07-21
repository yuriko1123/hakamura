// twitterモジュールを読み込み
var twitter = require('twitter');
var fs = require("fs");

var client = new twitter(JSON.parse(fs.readFileSync("app.json","utf-8")));

// ファボ取得
client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets[1].text);  
});