// メイン関数
function MessageArchive() {
  // (4)ChatWorkAPIトークン
  var token = "Hoge";

  // (6)ルームID
  var room_id = xxxxxxxxx;

  // JSON形式でメッセージ情報を取得
  var json = fetchMessage(token, room_id);

  // 新規データがあるときのみ、処理を行う
  if (json != "None") {
    // 取得した情報から必要なものを取り出し、保存する
    for (let i = 0; i < json.length; i++) {
      // メッセージを送った時の日本標準時、発言者名、メッセージを格納
      var jstTime = Utilities.formatDate(
        new Date(json[i].send_time * 1000),
        "JST",
        "yyyy/MM/dd HH:mm"
      );
      var sender = json[i]["account"].name;
      var message = json[i].body;

      // スプレッドシートに書き込む
      setMessage(jstTime, sender, message);
    }
  }

  // 毎月1日に保存したメッセージ数をアナウンスする
  var date = new Date();
  var day = date.getDate();
  if (day == 1) {
    sendMessage(token);
  }
}

//メッセージを取り出す関数
function fetchMessage(token, room_id) {
  var params = {
    headers: { "X-ChatWorkToken": token },
    method: "get",
  };

  // リクエストURL
  var url =
    "https://api.chatwork.com/v2/rooms/" + room_id + "/messages?force=0";
  var response = UrlFetchApp.fetch(url, params);

  if (response.getContentText()) {
    return JSON.parse(response.getContentText());
  } else {
    return "None";
  }
}

//スプレッドシートに書き込む関数
function setMessage(jstTime, sender, message) {
  // (2)スプレッドシートID
  var id = "HogeHoge";
  var spreadSheet = SpreadsheetApp.openById(id);

  // (3)スプレッドシートのシート名
  var sheet = spreadSheet.getSheetByName("HogeHogeHoge");
  var lastRow = sheet.getDataRange().getLastRow();

  // 時間，送信者名，メッセージを書き込む
  sheet.getRange(lastRow + 1, 1).setValue(jstTime);
  sheet.getRange(lastRow + 1, 2).setValue(sender);
  sheet.getRange(lastRow + 1, 3).setValue(message);
}

// 月間レポートを送信する関数
function sendMessage(_token) {
  // 年と月を取得
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var d = "（" + year.toString() + "年" + month.toString() + "月）";

  // (2)スプレッドシートID
  var id = "HogeHoge";
  var spreadSheet = SpreadsheetApp.openById(id);

  // (3)スプレッドシートのシート名
  var sheet = spreadSheet.getSheetByName("Hoge");

  // 保存したメッセージ数を送信
  var num_message = sheet.getDataRange().getLastRow() - 2;
  var strBody =
    "[info][title] Message Archive Monthly-Report" +
    d +
    "[/title]運用開始からの保存状況は、以下の通りです。\n" +
    "・Hogeチャット：" +
    num_message.toString() +
    "メッセージ（1万メッセージまで、あと" +
    (10000 - num_message).toString() +
    "メッセージ）";

  // チャットワークにメッセージを送信
  var cwClient = ChatWorkClient.factory({ token: _token }); //チャットワークAPI
  cwClient.sendMessage({
    room_id: xxxxxxxxx, //ルームID
    body: strBody,
  });
}
