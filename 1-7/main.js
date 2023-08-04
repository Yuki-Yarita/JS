// 問1：以下の要件を満たすように「たい焼きクラス」を作成してください。

// 【要件】
// ・クラス名：Taiyaki
// ・インスタンス化する度に「あんこ」「クリーム」「チーズ」等と中身を変えられるように実装してください。
// （コンストラクタで渡ってきた引数をセットする）
// ・「中身は〇〇です」と中身を出力する関数を作成してください。

class Taiyaki {     //Taiyakiクラスの作成
  constructor(foodType){     //最初に実行されるfoodTypeが入った関数を作成
    this.foodType = foodType;     //受け取ったfoodTypeをこのクラスのfoodTypeに代入し使用できる状態にする
  }

  showFood(){     //foodTypeの値を帰られる関数を作成
    console.log(`中身は${this.foodType}です`);     //中身は○○ですと出力する関数を作成
  }
}

let anko = new Taiyaki('あんこ');     //あんこのオブジェクトを作成
anko.showFood();     //ankoという変数にshowFoodという関数を繋いで表示させる
let cream = new Taiyaki('クリーム');     //クリームのオブジェクトを作成
cream.showFood();     //creamという変数にshowFoodという関数を繋いで表示させる
let cheese = new Taiyaki('チーズ');     //チーズのオブジェクトを作成
cheese.showFood();     //cheeseという変数にshowFoodという関数を繋いで表示させる
