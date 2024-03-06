# README 

## A aplicacao

O sistema é uma aplicação web desenvolvida usando a api de Rick and Morty. Ele permite aos usuários explorarem informações sobre os personagens da série de forma interativa e responsiva. Utilizando tecnologias modernas como Next.js, TypeScript e React.

## Premissa Assumida

1. Utilizei o framework Next.js para construir a aplicação web, garantindo um desenvolvimento eficiente e escalável.
2. Utilizei a API externa do Rick and Morty para obter informações sobre os personagens, fornecendo uma base sólida de dados para minha aplicação.
3. Utilizei TypeScript para oferecer uma tipagem estática e melhorar a robustez e manutenibilidade do código.
4. Adotei React como minha biblioteca principal para criação de componentes, permitindo uma construção modular e reutilizável da interface do usuário.
5. Garanti a responsividade da aplicação para proporcionar uma experiência consistente em uma variedade de dispositivos.
6. Utilizei estilos CSS-in-JS com o módulo styled-jsx para estilizar os componentes de forma encapsulada e organizada.
7. Estruturei a aplicação em componentes reutilizáveis, facilitando a manutenção e a escalabilidade do código ao longo do tempo.
8. Tentei seguir um layout básico fornecido para orientar o desenvolvimento da interface, mantendo a consistência visual.
   
## Decisões de Projeto

1. *Componentização*: Optei por dividir a aplicação em componentes reutilizáveis, como Card, Features e SearchBar, para promover uma arquitetura mais modular e organizada, facilitando a manutenção e a extensibilidade do código.
2. *Utilização de Hooks*: Utilizei Hooks do React, como useState e useEffect, para gerenciar o estado da aplicação de forma eficiente e lidar com efeitos colaterais de forma simples e declarativa.
3. *Responsividade*: A aplicação foi projetada para ser responsiva, adaptando de forma diferentes em dispositivos,garantindo uma experiência de usuário consistente.
4. *Estilização CSS-in-JS*: Optei por utilizar o módulo styled-jsx para estilização dos componentes, mantendo os estilos encapsulados e garantindo uma melhor organização do código, além de facilitar a manutenção e o reuso dos estilos.
5. *Paginação*: Implementei a funcionalidade de paginação para carregar mais personagens à medida que o usuário navega pelas páginas, proporcionando uma experiência de usuário mais eficiente.
6. *Detalhes do Personagem*: Criei uma página específica para exibir detalhes de cada personagem, incluindo informações como nome, status, gênero, origem e localização, fornecendo uma visão mais completa e dos personagens.
7. *Tratamento de erros*: Implementei tratamento de erros para lidar com falhas na obtenção de dados da API, garantindo uma experiência de usuário mais confiável, mesmo em condições adversas.

## Instruções para Executar o Sistema

1. Clone o repositório para sua máquina local.
2. Certifique-se de ter o Node.js e o npm instalados em seu ambiente de desenvolvimento.
3. Va até o diretório do projeto e execute `npm install` para instalar as dependências.
4. Após a instalação das dependências, execute `npm run dev` para iniciar o servidor de desenvolvimento.
5. Abra seu navegador e acesse `http://localhost:3000` para visualizar a aplicação em funcionamento.
6. Você pode navegar entre as páginas e utilizar a funcionalidade de busca para encontrar personagens específicos.
