# Message_Archive_ChatWork


## 1. 概要
● Chatwork株式会社が提供するビジネスチャットツール「*Chatwork*」が、2022年10月から、直近40日以内に投稿されたメッセージしか閲覧できなくなる<br>（[公式サイトからのお知らせ](https://help.chatwork.com/hc/ja/articles/9319851372185-2022-09-06-%E3%83%95%E3%83%AA%E3%83%BC%E3%83%97%E3%83%A9%E3%83%B3-%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%AE%E5%88%A9%E7%94%A8%E4%B8%8A%E9%99%90%E6%95%B0%E6%92%A4%E5%BB%83%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B)はこちら）<br>
● 困ったので、メッセージを自動保存するプログラムをGASで記述<br>
![Chatwork Help](https://user-images.githubusercontent.com/94417526/191033148-53c19bce-5c56-4f1c-ab29-40f58a7e8f32.png)


## 2. 利用イメージ図
### ● チャット画面（[公式サイト](https://go.chatwork.com/ja/features/)より）
![chat screen](https://user-images.githubusercontent.com/94417526/191038005-47a06148-0a6f-4e49-96b6-8d3e68fd6b2f.png)


### ● メッセージ保存スプレッドシート
![message archive](https://user-images.githubusercontent.com/94417526/191037163-caed5a18-5a2b-41a4-86ca-f5a7a1f8813a.png)


### ● 月間レポート<br>
![monthly-report](https://user-images.githubusercontent.com/94417526/191433645-696fe196-8fa9-42f4-8967-47730510f1ff.png)


## 3. 利用方法
### メッセージ自動保存に必要なもの<br>
（1）メッセージ保存するためのスプレッドシート<br>
（2）スプレッドシートID<br>
（3）スプレッドシートのシート名<br>
（4）本Repositoryで公開している[main.gs](https://github.com/Ishiuchi/Message_Archive_ChatWork/blob/main/main.gs)<br>
（5）ChatworkアカウントのAPIトークン<br>
（6）ChatWorkClient for Google Apps ScriptのスクリプトID<br>
（7）メッセージ保存する対象のChatworkのルームID<br>

#### （1）メッセージ保存するためのスプレッドシート<br>
Googleアカウントを持っていれば、無料で利用できる。以下のサイトにアクセスし、空白のスプレッドシートを作成する。<br>
https://www.google.com/intl/ja_jp/sheets/about/
#### （2）スプレッドシートID<br>
「スプレッドシートID」はスプレッドシートのファイルを識別するID、「シートID」はファイル内の個別のシートを識別するIDとなり、それぞれスプレッドシートのURLから確認できる。<br>
スプレッドシートのURLは次のような形式となり、「スプレッドシートID」「シートID（今回は不要）」の箇所がそれぞれのIDとなる。<br>
`https://docs.google.com/spreadsheets/d/スプレッドシートID/edit#gid=シートID`<br>
（スプレッドシートIDは、文字・数字・およびいくつかの特殊文字を含む文字列となり、シートIDは数字の値）
#### （3）スプレッドシートのシート名<br>
後日記述<br>
#### （4）本Repositoryで公開している[main.gs](https://github.com/Ishiuchi/Message_Archive_ChatWork/blob/main/main.gs)<br>
後日記述<br>
#### （5）ChatworkアカウントのAPIトークン<br>
後日記述<br>
#### （6）ChatWorkClient for Google Apps ScriptのスクリプトID<br>
GASからチャットワークのAPIを簡単に利用することができるライブラリ「ChatWorkClient for Google Apps Script」が公開されている。<br>
（スクリプトID: **1nf253qsOnZ-RcdcFu1Y2v4pGwTuuDxN5EbuvKEZprBWg764tjwA5fLav**）
#### （7）メッセージ保存する対象のChatworkのルームID<br>
後日記述<br>
