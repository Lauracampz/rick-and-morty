import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import SearchBar from "./SearchBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <><div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="navbar" >
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="logo-container">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPKh3IhDqYRX874IdIsbGNC9VjIYHcU3CzQB9AJbjdLek48pCObso5eDjkc7aUM6nlZf6lFG96He-ziOdluROEIoqhQ-ZfFr4ReA_YE_Dt82iEnQAaafCvC8kyG1r3WvrB3PNnatSZqQNJRhtDLBttc=w700-h394-s-no-gm?authuser=0" className="logo1" />
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPid-Hpt5ru6QyhjCUSGg2moleghcx3LdQMlJ8lGYmN56R7wMm1Uq-Kje5HmjDnsyHPqSf-IvllwjwhBFBfKeV2Orl3pHrvtpH4_1v33FF3aMHfi10dHpV64c7t5ddNE5q25ol0cx_Fjmmw7rpFnO-F=w98-h101-s-no-gm?authuser=0" className="logo2" />
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPVn6vBWjykfRqaJy9WXqTV-H_D-r0YgTVeTUecXH6Qv6KAL86H0ApW3dfMW9xtmWwOd1hpKw_VQnTR7nL6YZiiLN5TZZ0dW-3TfGUNw9cN7zG-tO6fg4W3B6fs0L-9fpWV9-Z1D5CVae3ZdNP16_Gh=w180-h180-s-no-gm?authuser=0" className="logo3" />
        </div>
        <div style={{padding: '10px'}}>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
    <div className="content">
      {children}
    </div>

    
    <footer style={{backgroundColor: '#000', height: '50px'}}>
    </footer>
    <style jsx>{`
      .navbar {
        background-color: #cfe071; /* Hex Value */
	height: 60px;
        padding: 10px 0px; /* Ajuste o espaçamento interno conforme necessário */
        position: fixed;
        width: 100%;
        top: 0;
        left: 0; /* Para garantir que a barra encoste no canto esquerdo */
        z-index: 1000;
	text-align: left;
      }
      .logo-container {
        display: flex;
        align-items: center;
      }

      .logo {
        width: 40px; /* Defina o tamanho desejado para as imagens */
        height: 40px; /* Defina o tamanho desejado para as imagens */
        margin-right: 0px; /* Espaçamento entre as imagens */
      }	
      .logo1 {
        width: 124,6px;
        height: 70px;
        margin-right: 0px;
      }
      .logo2 {
        width: 20px;
        height: 20px;
        margin-right: 0px;
      }

      .logo3 {
        width: 60px;
        height: 60px;
        margin-right: 0px;
      }
      .topoPag {
        width: 100vw; /* Garante que a imagem ocupe toda a largura da tela */
        margin-top: 60px; /* Define o espaço entre a barra de navegação e a imagem */
      }

      nav {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      nav a {
        margin: 0 10px;
        text-decoration: none;
      }

      .content {
        margin-top: 10px; /* Espaço extra para evitar que a barra cubra o título */
        padding: 0px; /* Adicione um padding opcional ao conteúdo principal */
        width: 100vw;
      }

      footer {
        margin-top: 20px; /* Adicione um espaço entre o conteúdo principal e o rodapé */
      }
    `}</style>
  </div>
  </>
);

export default Layout;

