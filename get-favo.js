// twitterモジュールを読み込み
var twitter = require('twitter');
var fs = require('fs');

var client = new twitter(JSON.parse(fs.readFileSync('app.json', 'utf-8')));

// ファボ取得
client.get('favorites/list', function(error, tweets) {
  if(error) throw error;
  tweets.forEach(function(tweet) {
    var favo = tweet.text; 

    // urlのみを取得
    var reg = new RegExp('http(s)?://([\\w-]+\.)+[\\w-]+(/[\\w-./?%&=]*)?', 'gi');
    var mat = favo.match(reg);
    console.log(mat[0]);
  });
});