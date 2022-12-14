import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-black w-full">
      <Head>
        <title>Los Arbolitos Restaurante</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Los arbolitos restaurante | Los mejores platillos mexicanos | Reserva ya"
        />
        <link rel="icon" href="/icon.webp" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
