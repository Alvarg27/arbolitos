import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Loader from "../components/Loader";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <head></head>
        <body>
          <div id={"globalLoader"}>
            <Loader />
            <div />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
