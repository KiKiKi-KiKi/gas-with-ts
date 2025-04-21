function main() {
  console.log('スクリプト実行開始');
}

function onOpen() {
  console.log('ファイルが開かれた時に実行');
}

// GAS として実行する関数を global に設定する
global.main = main;
global.onOpen = onOpen;
