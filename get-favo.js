// twitterモジュールを読み込み
var twitter = require('twitter');

//アプリ登録時に取得したkey
var client = twitter({
  consumer_key:'取得したconsumer_key',
  consumer_secret:'取得したconsumer_secret',
  access_token_key:'取得したaccess_token_key',
  access_token_secret:'取得したaccess_token_secret'
});

// ファボ取得
client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets[1].text);  
});