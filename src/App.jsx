import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// reactのコンポーネント定義
// パスカルケースで定義する
const App = () => {
  // ステート定義
  // ステート変数,ステート変更関数の順で、配列で返される
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 初回レンダリング時だけ走らせたい処理は、useEffectの第2引数に[]を指定し、
  // 第一引数に処理を書く
  useEffect(() => {
    console.log("useEffect!!");
  }, []);

  // 特定のステートが変わった時だけ走らせたい処理は
  // 第2引数にステート変数を指定する
  useEffect(() => {
    // 3の倍数の時だけ顔文字を出す
    if (num % 3 === 0) {
      // setFaceShowFlag(true); // ←これだと無限に、再帰的にステート変更が発生するのでエラーとなる
      faceShowFlag || setFaceShowFlag(true); // flgがfalseの時だけ呼ぶようにする
    } else {
      // setFaceShowFlag(false); // ←これだと無限に、再帰的にステート変更が発生するのでエラーとなる
      faceShowFlag && setFaceShowFlag(false); // flgがtrueの時だけ呼ぶようにする
    }
    // eslint-disable-nextline react-hooks/exhaustive-deps
  }, [num]); // 今回はshowFaceFlagの変更は検知したくないので、書かない

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App; // 他ファイルで使う場合はexportする
