import Link from "next/link";

const AboutPage = () => (
  <>
    <header className="navbar" >
      <nav>
        <div className="logo-container">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPKh3IhDqYRX874IdIsbGNC9VjIYHcU3CzQB9AJbjdLek48pCObso5eDjkc7aUM6nlZf6lFG96He-ziOdluROEIoqhQ-ZfFr4ReA_YE_Dt82iEnQAaafCvC8kyG1r3WvrB3PNnatSZqQNJRhtDLBttc=w700-h394-s-no-gm?authuser=0" className="logo1" />
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPid-Hpt5ru6QyhjCUSGg2moleghcx3LdQMlJ8lGYmN56R7wMm1Uq-Kje5HmjDnsyHPqSf-IvllwjwhBFBfKeV2Orl3pHrvtpH4_1v33FF3aMHfi10dHpV64c7t5ddNE5q25ol0cx_Fjmmw7rpFnO-F=w98-h101-s-no-gm?authuser=0" className="logo2" />
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPVn6vBWjykfRqaJy9WXqTV-H_D-r0YgTVeTUecXH6Qv6KAL86H0ApW3dfMW9xtmWwOd1hpKw_VQnTR7nL6YZiiLN5TZZ0dW-3TfGUNw9cN7zG-tO6fg4W3B6fs0L-9fpWV9-Z1D5CVae3ZdNP16_Gh=w180-h180-s-no-gm?authuser=0" className="logo3" />
        </div>
        <div>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/users">Lista de Usuários</Link> |{" "}
          <a href="/api/users">API de Usuários</a>
        </div>
      </nav>
    </header>
    <div className="content">
      <h1>Sobre</h1>
      <p>
        Esta aplicação foi desenvolvida por Laura Campos de Santana como parte de um teste técnico utilizando Next.js. Abaixo estão os detalhes do que foi tentado realizar:
      </p>
      <h2>O que tentamos alcançar:</h2>
      <ul>
        <li>Implementar uma aplicação web utilizando Next.js, comunicando-se com uma API externa para listar e exibir personagens de Rick and Morty.</li>
        <li>A aplicação deve apresentar informações completas sobre cada personagem, incluindo nome, status de vida, gênero, imagem e outros atributos conforme especificado no layout fornecido.</li>
        <li>Funcionalidades incluídas: listar personagens, expandir a listagem de personagens, selecionar um personagem para ver mais detalhes e ter um layout responsivo.</li>
      </ul>
      <h2>Instruções para a entrega do teste:</h2>
      <ul>
        <li>Você deve entregar seu teste através do git (Github).</li>
        <li>Você tem 4 dias para entregar o seu resultado, ou seja, até 5 de março às 17h.</li>
        <li>O resultado do seu teste, com o link do teste no Github, deve ser enviado para o e-mail camila.bicalho@dtidigital.com.br e lubia.carvalho@dtidigital.com.br para formalizar sua resposta ao nosso teste prático para o RH.</li>
      </ul>
      <h2>O que deve ser enviado:</h2>
      <ul>
        <li>Código construído.</li>
        <li>Premissas assumidas.</li>
        <li>Decisões de projeto.</li>
        <li>Instruções para executar o sistema.</li>
      </ul>
      <h2>O que deve ser construído:</h2>
      <p>
        Desenvolver uma aplicação web responsiva utilizando Next.js, que se comunique com uma API externa para listar e exibir personagens do Rick and Morty. O sistema deve apresentar informações completas sobre cada personagem, incluindo nome, status de vida, gênero, imagem, localização, origem, etc., conforme especificado no layout fornecido.
      </p>
      <h2>Funcionalidades:</h2>
      <ul>
        <li>Listar personagens.</li>
        <li>Expandir a listagem de personagens (paginação).</li>
        <li>Selecionar um personagem para ver mais detalhes.</li>
      </ul>
      <p>
        Tente aderir o máximo possível ao layout fornecido e às especificações.
      </p>
    </div>
    <footer>
      <hr />
      <span>Estou aqui para ficar (Rodapé)</span>
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
  </>
);

export default AboutPage;
