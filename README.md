ENGLISH
# Code Challenge - Full Stack

This repository contains the solution for the Code Challenge Full Stack. This document describes the research and development process, presenting the decisions and assumptions made during the project.

## Challenge

The challenge is to build an application that allows Pharma Inc. view your patients' information in a simple and objective way on a Dashboard. The backend was implemented using Nest.js, a Node.js framework aimed at developing scalable and modularized applications. The frontend was developed using Next.js, a React framework that offers advanced features for building user interfaces.

## Requirements

- The company must be able to register, update, delete and delete its patients in the database.
- The API must return the list of patients through paging, allowing the definition of the number of patients per page.
- The company must visualize the list of patients through a table that contains a search engine to facilitate filtering.
- The company must be able to visualize, when necessary, the complete data of the patients in the table.
- The table must be limited to displaying only 50 patients per page.

## Installation and Configuration

To run the application in your local environment, follow the instructions below:

1. Clone this repository.
2. Navigate to the backend and frontend folders and run `pnpm i` or `npm i` to install the dependencies.
3. Inside the backend directory, run `pnpm start` or `npm run start` to start the backend server.
3.1. Inside the frontend directory, run `pnpm dev` or `npm run dev` to start the frontend server.

## Project Architecture

The application follows a layered architecture, with a separate frontend and backend. The backend was built using Nest.js, taking advantage of its modularity and scalability. The frontend is built using Next.js, which enables server-side rendering and provides a fast development experience.

## Main Features

Below are some of the main features of the application:

- Manipulations: allow registration, update, get and delete data.
- Patient management: visualization of patients and their information.

---

## Design Decisions

During project development, several design decisions were made to ensure a robust and scalable architecture. Here are some of the key decisions:

### Modular Pattern

I chose to follow a modular pattern to organize the application's code. Split the project into independent modules, each with its own responsibility. This approach eases maintenance, enables code reuse, and improves project scalability. Each module has its own directory structure, including controllers, services, and models.

### Code Organization

I adopted a modularized design structure for ease of maintenance and extensibility. I divided the code into independent modules, each one with its own responsibility, following some architecture principles with SOLID.

### Database

I chose SQLite as the database to speed up the development. SQLite is a lightweight and easy to configure option, suitable for smaller projects or in the prototyping phase. While it is a less scalable option compared to more robust databases such as PostgreSQL, it meets the needs of this project and provides a quick way to persist data.

### Styling and Componentization

I chose Tailwind CSS, a highly configurable library of CSS utilities. Tailwind CSS offers a "utility-first" approach, allowing the creation of custom styles by combining pre-defined classes. This makes styling components easier and maintains more concise and consistent CSS code throughout the application.

---

## Challenges and Solutions

During the development of the project, I faced some challenges that required specific solutions. Below, I describe some of the main challenges encountered and how I requested them:

### Management and Visualization of Patient Data

One of the main challenges was to create an intuitive and objective Dashboard to list, filter and expand patient data. It was necessary to establish a proper database structure and define the queries needed to fetch and display patient information. To address this challenge, paging functionality was implemented.

### Data Pagination

Considering that the number of patients can be very large, it was essential to implement paging functionality in the backend. This would allow displaying only a limited amount of patients per page, improving performance and user experience. To solve this challenge, I used the resources offered by PrismaORM to implement paging efficiently and efficiently.

### Table with Search Engine and Patient Details

On the frontend, the challenge was to create a table with search capabilities and a details screen to display complete information for each selected patient. To solve this challenge, I used Next.js and implemented a table component that allows filtering patients based on specific criteria, such as name, age or any other relevant information. In addition, a details screen has been developed that displays all the detailed data for a specific patient when selected in the table.

These were some of the challenges faced during the development of the project and the solutions adopted to overcome them. Each challenge demanded a specific approach, taking into account the requirements and objectives of the project. With the implemented solutions, manage to deliver an application that facilitates the management and visualization of patient information in a simple and objective way.

---

## Deployment

To facilitate the application deployment process, Docker was used to create and run the necessary containers. Docker offers a lightweight and portable virtualization solution, allowing the application to run consistently in different environments.

### Prerequisites

Before proceeding with the deployment, make sure you have Docker correctly installed and configured in your deployment environment. You can find detailed instructions on how to install Docker in the official documentation: <https://docs.docker.com/get-docker/>

### Deployment Steps

1. Clone this repository to your deployment environment.

2. Open a terminal and navigate to the project's root directory.

3. Run the following command to build the Docker images:

``` shell
    docker-compose build
```

4. After the completion of building the images, run the following command to start the containers:

``` shell
docker-compose up -d
```

This will start the containers in the background (detached mode).

5. Wait until all containers start correctly. You can check the status of running containers using the following command:

``` shell
docker-compose ps
```

6. The application will now be running and accessible through the browser

- Backend: `http://localhost:5000`
- frontend: `http://localhost:3000`

### Closing the Application

If you want to close the application and stop the containers.

``` shell
docker-compose down
```

This will shut down the containers and release the resources used by the application.
# Code Challenge - Full Stack

Este repositório contém a solução para o Code Challenge Full Stack. Este documento descreve o processo de investigação e desenvolvimento, apresentando as decisões e hipóteses tomadas durante o projeto.

## Desafio

O desafio consiste em construir uma aplicação que permita a empresa Pharma Inc. visualizar as informação dos seus pacientes de maneira simples e objetiva em um Dashboard. O backend foi implementado utilizando Nest.js, um framework de Node.js voltado para o desenvolvimento de aplicativos escaláveis e modularizados. Já o frontend foi desenvolvido utilizando Next.js, um framework React que oferece recursos avançados para construção de interfaces de usuário.

## Requisitos

- A empresa devem ser capazes de se registrar, atualizar, deletar e excluir seus pacientes no banco de dados.
- A API deve retornar a lista de pacientes por meio de paginação, permitido definir a quantidade de pacientes por página.
- A empresa deve visualizar a lista de pacientes por meio de uma tabela que contem um buscador para facilitar a filtragem.
- A empresa deve ser capaz de visualizar, quando necessário, os dados completos dos pacientes na tabela.
- A tabela deve limitar-se a exibir apenas 50 pacientes por página.

## Instalação e Configuração

Para executar a aplicação em seu ambiente local, siga as instruções abaixo:

1. Clone este repositório.
2. Navegue até as pasta do backend e do frontend e execute `pnpm i` ou `npm i` para instalar as dependências.
3. Dentro da diretório backend, execute `pnpm start` ou `npm run start` para iniciar o servidor do backend.
3.1. Dentro da diretório frontend, execute `pnpm dev` ou `npm run dev` para iniciar o servidor do frontend.

## Arquitetura do Projeto

A aplicação segue uma arquitetura em camadas, com o frontend e o backend separados. O backend foi construído utilizando o Nest.js, aproveitando sua modularidade e capacidade de escalabilidade. O frontend foi desenvolvido com o Next.js, que permite renderização do lado do servidor e fornece uma experiência de desenvolvimento rápida.

## Funcionalidades Principais

A seguir estão algumas das principais funcionalidades da aplicação:

- Manipulações: permitir o registro, atualizar, obter e excluir dados.
- Gerenciamento de pacientes: visualização dos pacientes e suas informações.

---

## Decisões de Design

Durante o desenvolvimento do projeto, foram tomadas várias decisões de design para garantir uma arquitetura robusta e escalável. A seguir, estão algumas das principais decisões:

### Padrão Modular

Optei por seguir um padrão modular para organizar o código da aplicação. Dividir o projeto em módulos independentes, cada um com sua própria responsabilidade. Essa abordagem facilita a manutenção, permite a reutilização de código e melhora a escalabilidade do projeto. Cada módulo possui sua própria estrutura de diretórios, incluindo controladores, serviços e modelos.

### Organização de Código

Adotei uma estrutura de projeto modularizada para facilitar a manutenção e extensibilidade. Dividi o código em módulos independentes, cada um com sua própria responsabilidade seguido alguns princípios de arquitetura com SOLID.

### Banco de Dados

Eu escolhei o SQLite como banco de dados para agilizar o desenvolvimento. O SQLite é uma opção leve e de fácil configuração, adequada para projetos menores ou em fase de prototipação. Embora seja uma opção menos escalável em comparação com bancos de dados mais robustos, como o PostgreSQL, atende às necessidades deste projeto e oferece uma maneira rápida de persistir os dados.

### Estilização e Componentização

Escolhi o Tailwind CSS, uma biblioteca de utilitários CSS altamente configurável. O Tailwind CSS oferece uma abordagem "utility-first", permitindo a criação de estilos personalizados por meio da combinação de classes pré-definidas. Isso facilita a estilização dos componentes e mantém um código CSS mais conciso e consistente em toda a aplicação.

---

## Desafios e Soluções

Durante o desenvolvimento do projeto, enfrentei alguns desafios que exigiram soluções específicas. A seguir, descrevo alguns dos principais desafios encontrados e como eu os solicitei:

### Gestão e Visualização de Dados dos Pacientes

Um dos principais desafios era criar um Dashboard intuitivo e objetivo para listar, filtrar e expandir os dados dos pacientes. Foi necessário estabelecer uma estrutura de banco de dados adequada e definir as consultas necessárias para buscar e exibir as informações dos pacientes. Para solucionar esse desafio, foi implementado a funcionalidade de paginação.

### Paginação de Dados

Considerando que o número de pacientes pode ser muito grande, era essencial implementar uma funcionalidade de paginação no backend. Isso permitiria exibir apenas uma quantidade limitada de pacientes por página, melhorando o desempenho e a experiência do usuário. Para solucionar esse desafio, utilizei os recursos oferecidos pelo PrismaORM para implementar a paginação de forma eficiente e escalável.

### Tabela com Buscador e Detalhes dos Pacientes

No frontend, o desafio era criar uma tabela com recursos de busca e uma tela de detalhes para exibir as informações completas de cada paciente selecionado. Para solucionar esse desafio, utilizei o Next.js e implementamos um componente de tabela que permite a filtragem dos pacientes com base em critérios específicos, como nome, idade ou qualquer outra informação relevante. Além disso, foi desenvolvida uma tela de detalhes que exibe todos os dados detalhados de um paciente específico quando selecionado na tabela.

Esses foram alguns dos desafios enfrentados durante o desenvolvimento do projeto e as soluções adotadas para superá-los. Cada desafio exigiu uma abordagem específica, levando em consideração os requisitos e objetivos do projeto. Com as soluções implementadas, conseguir entregar uma aplicação que facilita a gestão e visualização das informações dos pacientes de maneira simples e objetiva.

---

## Implantação

Para facilitar o processo de implantação da aplicação, foi utilizado o Docker para criar e executar os containers necessários. O Docker oferece uma solução de virtualização leve e portável, permitindo que a aplicação seja executada de maneira consistente em diferentes ambientes.

### Pré-requisitos

Antes de prosseguir com a implantação, certifique-se de ter o Docker instalado e configurado corretamente no seu ambiente de implantação. Você pode encontrar instruções detalhadas sobre como instalar o Docker na documentação oficial: <https://docs.docker.com/get-docker/>

### Passos de Implantação

1. Clone este repositório para o seu ambiente de implantação.

2. Abra um terminal e navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para construir as imagens Docker:

```shell
   docker-compose build
```

4. Após a conclusão da construção das imagens, execute o seguinte comando para iniciar os containers:

```shell
docker-compose up -d
```

Isso iniciará os containers em segundo plano (modo detached).

5. Aguarde até que todos os containers sejam iniciados corretamente. Você pode verificar o status dos containers em execução utilizando o seguinte comando:

```shell
docker-compose ps
```

6. A aplicação agora estará em execução e será acessível por meio do navegador

- Backend: `http://localhost:5000`
- frontend: `http://localhost:3000`

### Encerrando a Aplicação

Caso deseje encerrar a aplicação e parar os containers.

```shell
docker-compose down
```

Isso encerrará os containers e liberará os recursos utilizados pela aplicação.
