# Message_Archive_ChatWork
**1. 概要**<br>
**2. 利用イメージ図**<br>
**3. 利用方法**<br>
**4. main.gsの説明**<br>

## 1. 概要
● Chatwork株式会社が提供するビジネスチャットツール「*Chatwork*」が、2022年10月から、直近40日以内に投稿されたメッセージしか閲覧できなくなる<br>（[公式サイトからのお知らせ](https://help.chatwork.com/hc/ja/articles/9319851372185-2022-09-06-%E3%83%95%E3%83%AA%E3%83%BC%E3%83%97%E3%83%A9%E3%83%B3-%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%AE%E5%88%A9%E7%94%A8%E4%B8%8A%E9%99%90%E6%95%B0%E6%92%A4%E5%BB%83%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B)はこちら）<br>
● 困ったので、メッセージを自動保存するプログラムをGASで記述<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/94417526/191033148-53c19bce-5c56-4f1c-ab29-40f58a7e8f32.png" title="Chatwork-help">
</div>


## 2. 利用イメージ図
### ● チャット画面（[公式サイト](https://go.chatwork.com/ja/features/)より）
<div align="center">
<img src="https://user-images.githubusercontent.com/94417526/191038005-47a06148-0a6f-4e49-96b6-8d3e68fd6b2f.png" title="chat-screen">
</div>


### ● メッセージ保存スプレッドシート
<div align="center">
<img src="https://user-images.githubusercontent.com/94417526/191037163-caed5a18-5a2b-41a4-86ca-f5a7a1f8813a.png" title="message-archive-spreadsheet">
</div>


### ● 月間レポート<br>
<div align="center">
<img src="https://user-images.githubusercontent.com/94417526/191433645-696fe196-8fa9-42f4-8967-47730510f1ff.png" title="monthly-report">
</div>


## 3. 利用方法
### メッセージ自動保存に必要なもの<br>
（1）メッセージ保存するためのスプレッドシート<br>
（2）スプレッドシートID<br>
（3）スプレッドシートのシート名<br>
（4）登録しているChatworkアカウントのAPIトークン<br>
（5）ChatWorkClient for Google Apps ScriptのスクリプトID<br>
（6）メッセージ保存する対象のChatworkのルームID<br>
（7）本Repositoryで公開している「main.gs」<br>

#### （1）メッセージ保存するためのスプレッドシート<br>
Googleアカウントを持っていれば、無料で利用できる。以下のサイトにアクセスし、空白のスプレッドシートを作成する。<br>
https://www.google.com/intl/ja_jp/sheets/about/

#### （2）スプレッドシートID<br>
スプレッドシートのURLは次のような形式であり、「スプレッドシートID」「シートID（今回は不要）」の箇所がそれぞれのIDとなる。<br>
`https://docs.google.com/spreadsheets/d/スプレッドシートID/edit#gid=シートID`<br>
（スプレッドシートIDは、文字・数字・およびいくつかの特殊文字を含む文字列となり、シートIDは数字の値）

#### （3）スプレッドシートのシート名<br>
後日記述<br>

#### （4）登録しているChatworkアカウントのAPIトークン<br>
1. Chatwork画面の右上にある [利用者名] 以下のメニュー内にある [サービス連携] から、[APIトークン発行ページ](https://www.chatwork.com/service/packages/chatwork/subpackages/api/token.php)にアクセス<br>
2. APIトークンが表示されるので、「コピー」ボタンでコピー<br>
（詳細を知りたい方は、[公式サイトのAPI設定](https://help.chatwork.com/hc/ja/sections/115000051162-API%E8%A8%AD%E5%AE%9A)を参照）
<div align="center">
<img src="https://user-images.githubusercontent.com/94417526/192207952-f6e84d80-2db1-47b1-8a3e-ec7195119055.png" title="Token-Copy">
</div>

#### （5）ChatWorkClient for Google Apps ScriptのスクリプトID<br>
GASからチャットワークのAPIを簡単に利用することができるライブラリ「ChatWorkClient for Google Apps Script」が公開されている。<br>
「スクリプトID: **1nf253qsOnZ-RcdcFu1Y2v4pGwTuuDxN5EbuvKEZprBWg764tjwA5fLav**」<br>

#### （6）メッセージ保存する対象のChatworkのルームID<br>
後日記述<br>

#### （7）本Repositoryで公開している「main.gs」<br>
後日記述<br>

## 4. main.gsの説明
後日記述<br>
