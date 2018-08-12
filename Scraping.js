/*
モジュール読み込み
*/
var client = require('cheerio-httpcli');

/*
スクレイピング開始
*/
client.fetch('https://tabelog.com/matome/10647/',{},function (err, $, res, body) {
    if (err) {
        console.log(err);
    } else {

        var results = [];
        // 店名と飲食店サイトurlを取得したい
        $('.RstSetInfo').each(function () {
            var $p =$(this).find('p');
            var url = $p.find('a').attr('href');
            var x = $p.text();
            var y = x.replace(/\r?\n/g, '');
            var z = y.replace(/\s+/g, '');

            if (url) {
                results.push({
                    restaurantInfo: z,
                    url: url,
                });
            }
        });
    }
    console.info(results);
});
