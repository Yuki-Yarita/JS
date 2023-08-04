// 問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。

let numbers = [2, 5, 12, 13, 15, 18, 22];
// //ここに答えを実装してください。↓↓↓
function isEven() {
  for(let i = 0; i < numbers.length; i++){     //forループを使って、numbers配列の要素を1つずつ処理。iはループのカウンタ変数で0からnumbers配列の長さ未満の値までインクリメント
    let num = numbers[i];     //num変数に、numbers配列の現在の要素 (numbers[i]) を代入
    if(num % 2 === 0){     //numの値を2で割ったときに余りが0になるかならないか判断する。余りが0かどうかの判断
      console.log(num + 'は偶数です');     //if文の条件であるnumが偶数の場合のみ「numは偶数です」とコンソールに表示される
    }     //if文の終了
  }     //for文の終了
}     //isEven()関数の終了
isEven();     //isEven()関数を呼び出す。numbers配列の偶数要素がコンソールに表示される
// 問2:以下の要件を満たすように実装してください。

// 【要件】

// ・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する

// ・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
class car {     //carクラスの定義
  constructor(gas, num){     //carがインスタンスがされたときに、最初に自動で実行される関数
    this.gas = gas;     //受け取ったgasをこのクラスのgasに代入して使える状態にする
    this.num = num;     //受け取ったgasをこのクラスのnumに代入して使える状態にする
  }

  getNumGas(){     //ガソリンとナンバーメソッドの作成
    console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`);     //オブジェクトのgasとnumの値をコンソールに表示させる
  }
}

//出力する方法↓
let gassNum = new car(22.5, 1234);
gassNum.getNumGas();