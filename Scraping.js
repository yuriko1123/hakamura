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
            var Name = $p.find('span[class=RstSetInfoMainName]').text();
            var Category = $p.find('span[class=RstSetInfoMainAreaGenre]').text();
            var Address = $p.find('p[class=RstSetInfoDetailAddress]').text();
            
            if (url) {
                results.push({
                    Name: Name,
                    Category: Category,
                    Address1: Address, 
                    url: url,

                   });
            }
        });
    }
    console.info(results);
});
