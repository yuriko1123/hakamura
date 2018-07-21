# hakamura

Nodejsでtwitterのお気に入り情報を取得

## 目次(Table of contents)

- [必要条件(Requirements)](#必要条件requirements)
- [使い方(Usage)](#使い方usage)
- [ライセンス(License)](#ライセンスlicense)
- [参考(reference)](#参考reference)

## 必要条件(Requirements)

- Nodejs: ver 8.11.3  
- npm: ver 5.6.0

1. twitterのアプリケーションを登録  
    1. twitterアカウント作成  
    1. アプリケーションの作成  
    1. アクセストークンの取得

## 使い方(Usage)

1. リポジトリのダウンロード & hakamuraの中に入る
    ```shell
    git clone https://github.com/yuriko1123/hakamura
    cd hakamura
    ```
1. 必要パッケージのインストール
    ```shell
    npm install
    ```
1. 新たにファイルapp.jsonを作成する
    ```shell
    touch app.json
    ```

1. ファイルに下記の通り記述する
    ```shell
   {
      "consumer_key":"取得したconsumer_key",
      "consumer_secret":"取得したconsumer_secret",
      "access_token_key":"取得したaccess_token_key",
      "access_token_secret":"取得したaccess_token_secret"
   }
    ```


1.  起動(コンソールにtwitterのお気に入り情報を出力)
    ```shell
    npm test
    ```

## ライセンス(License)

[MIT License](./LICENSE)

## 参考(reference)

* [npm](https://www.npmjs.com/package/twitter)
* [shomiの備忘録](http://shomi3023.com/2018/01/21/twitter-api-get-tweet/)
* [わかりづらい事ばかり](http://d.hatena.ne.jp/mkio/20160125/1453696937)