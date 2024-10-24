## キャラクターがひょこっと出てくるボタン
キャラクターがホバーアニメーションするボタンです。ボタンは同一ページ上に複数設置することを想定しています。  
必要に応じて調整してみてください。

### 画像構成
![img](https://github.com/user-attachments/assets/74723039-75eb-48d8-bf1e-dd9e50e02e34)

パーツごとに異なるアニメーションを設定するため、画像は「頭」「右手」「左手」に分けています。
```
<img class="btn_head" src="images/head.png" width="450" height="282">
<img class="btn_hand hand0" src="images/hand.png" width="150" height="104">
<img class="btn_hand hand1" src="images/hand.png" width="150" height="104">
```
```
.btn_head {
  width: 70%;
}
.btn_hand {
  width: calc(70% / 3);
}
```
手の横幅は、頭の横幅の1/3としています。

### CSS変数
頭の縦幅に応じて可変します。頭の数に応じて変数が生成され、ボタンごとに頭のサイズが異なる場合でもとりあえず動きます。
```
document.documentElement.style.setProperty(`--headHeight${i}`, `${headHeight}px`)
```
頭の縦幅をそのまま代入した変数です。
```
document.documentElement.style.setProperty(`--threeQuarters${i}`, `${headHeight * 0.75}px`)
```
頭の縦幅の1/4がテキストと重なっているため、その分の計算に使用する変数です。
