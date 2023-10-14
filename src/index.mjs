/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   ageg: 28,
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("mpmkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数。functionを省略する書き方 ※保存時に()自動補完が効かなかった
// const func2 = (str) => {
//   return str;
// };
// // const func2 = (str) => str; // {}を書かない場合はreturnは不要
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入(オブジェクトや配列から要素を抜き出して新規変数に代入する)
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const[name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

/**
 * デフォルト値、引数など。undefinedを渡された場合に自動的に代入される
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello();

/**
 * スプレッド構文 ... ドット3つ+変数名と記載すると要素を順番に処理してくれる
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); // コピー前の配列の値は変更されていない。参照渡しではなく値のコピーになっている事がわかる

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; // 配列を=で代入すると要素のコピーではなくポインタのコピー（参照渡し）になってしまい、コピー後の要素を編集するとコピー前の配列の要素も書き換わってしまう
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 * result = array.map(コールバック関数) という感じで使う。
 * 要素が1つずつコールバック関数に渡される。戻り地には処理結果の配列が返される
 * コールバック関数の引数は、配列の要素1つ、配列の要素のindex、配列全体
 * ↑第一引数以外は省略可能
 */
// map
const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr);
// console.log(nameArr2);

// nameArr.map((name, index, arr) => console.log(`${index + 1}番目は${name}です`));

// フィルタ filetrの引数で指定した関数に該当する要素のみ返す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// //const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);