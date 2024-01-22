//...
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx);
   return {
     ...initialProps,
     title: 'Tên tab mới'  
   };
  }

  //...

}