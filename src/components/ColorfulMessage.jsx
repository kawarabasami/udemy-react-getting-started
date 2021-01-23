import React from "react";

// const ColorfulMessage = (props) => { // ここでexportを書かない場合、ファイル末尾でexport defaultが必要
export const ColorfulMessage = (props) => {
  // ↑ここにexportを書くとimport時に補完が効くが、{}で囲う必要がある
  const { color, children } = props;
  console.log(props);

  const contentStyle = {
    color, // cssプロパティ名と変数名が同じ場合、プロパティ:は不要
    fontSize: "18px" // -でつなぐstyleはcamelcaseに直す
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
