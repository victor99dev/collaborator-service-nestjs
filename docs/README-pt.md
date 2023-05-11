# 👩🧑 | Collaborator API Service.

## 💻 | Projeto: Construindo uma API de cadastro de colaboradores.

Seja bem vindo, esse projeto foi feito no intuito de criar uma API com NestJs utilizando o typescript.

- Colocando em prática alguns conceitos e utilizando com um microsserviço.
- Aplicando a clean architecture.
- Utilizando framework nestjs.
- Utilizando a linguagem typescript.
- Utilizando banco de dados PostgreSQL, sendo rodado local em um container através do Docker.

## ⚙ | API.

### ✔ | Tecnologias:
- Node v18.15.0
- npm v9.6.5
- NestJs v9.4.2
- Prisma v4.13.0

### 📁 | Uma breve visão do projeto:
Essa aplicação em si é bem simples e com poucas entidades se relacionando, sendo elas:
- Collaborator.
- Department.
- Group.

Em questão da arquitetura, eu fiz a escolhar de implementar a [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). No fim da documentação estarei disponibilizando artigos e publicações sobre.

Essas são as vantagem de utilizar uma arquitetura por camada, essa informação eu tiro direto do blog do clean code:

1 - Independente de Frameworks. A arquitetura não depende da existência de alguma biblioteca de software carregada de recursos. Isso permite que você use tais estruturas como ferramentas, em vez de ter que amontoar seu sistema em suas restrições limitadas.

2 - Testável. As regras de negócios podem ser testadas sem interface do usuário, banco de dados, servidor Web ou qualquer outro elemento externo.

3 - Independente da IU. A IU pode mudar facilmente, sem alterar o resto do sistema. Uma IU da Web pode ser substituída por uma IU de console, por exemplo, sem alterar as regras de negócios.

4 - Independente de banco de dados. Você pode trocar Oracle ou SQL Server por Mongo, BigTable, CouchDB ou qualquer outra coisa. Suas regras de negócios não estão vinculadas ao banco de dados.

5 - Independente de qualquer agência externa. Na verdade, suas regras de negócios simplesmente não sabem nada sobre o mundo exterior.

![preview1 img](/docs/img/CleanArchitecture.jpg)

Por meio de organização, fiz questão de fazer as separação de pasta da seguinte forma:
```
src
  ├───application
  │   ├───contracts
  │   │   └───repository
  │   └───usecases
  │       ├───collaborator
  │       ├───department
  │       └───group
  ├───domain
  │   ├───entities
  │   ├───enums
  │   └───value-objects
  ├───helpers
  └───infra
      ├───container
      ├───database
      │   └───mappers
      ├───http
      │   ├───dtos
      │   │   ├───collaborators
      │   │   ├───departments
      │   │   └───groups
      │   ├───exceptions
      │   ├───modules
      │   │   ├───collaborator
      │   │   ├───departments
      │   │   └───group
      │   └───view-models
      │       ├───collaborator
      │       ├───department
      │       └───group
      └───repositories
          ├───in-memory
          └───prisma
```

### ⌨ | Comandos

| **Comandos npm**                               |                                               **Descrição**|
|------------------------------------------------|------------------------------------------------------------|
|                          `npm install ou npm i`|       Instala todos os pacotes para funcinamento do projeto.|
|                                 `npm run build`|                      Constroi nosso projeto para ser rodado.|
|                                `npm run format`|               Por padrão o nestjs pede a utilização do lint para deixar seu código com a sintaxe e estilo padrão.|
|                `npm start ou npm run start:dev`| Ambos comandos para inicializar nosso projeto, sendo o **npm run start:dev** para ter a atualização do nosso projeto em tempo real a cada alteração.|

| **Comandos docker compose**                    |                                               **Descrição**|
|------------------------------------------------|------------------------------------------------------------|
|                          `docker compose up -d`|                                     Iniciar nosso contêiner.|
|                           `docker compose stop`|                               Para de rodar nosso contêiner.|
|                             `docker compose rm`|                Remove nossos contêineres que estão pausados.|

| **Comandos prisma**                            |                                               **Descrição**|
|------------------------------------------------|------------------------------------------------------------|
|`npx prisma migrate dev`| Crianção de suas migrations, servindo para criar, atualizar ou excluir suas tabelas ou campos de determinada tabela.|
|                           `npx prisma generate`|                 Gere o Prisma Client com o seguinte comando.|
|            `npx prisma db push`| Usado para sincronizar seu esquema Prisma com seu esquema de banco de dados.|
|         `npx prisma db seed`| Inclui dados em nossas tabelas que já deixei implementado no projeto para apenas serem consumidos.|

Fiz questão de adicinar seeds atráves do prisma para que se pudesse ter o melhor aproveitamento da API.

Aqui temos as relações entre minhas tabelas:

![preview2 img](/docs/img/collaboratordb-relations.png)

## 📝 | Utilizando a API:

Para acessar a API, basta clicar nos Links a baixo: 
- [Link LocalHost com Swagger](http://localhost:3000/swagger-ui) para utilizar a API localmente.
- Ou podendo utilizar [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

Visualização do Swagger:

![preview3 img](/docs/img/swagger-ui.png)

### 🌐 | Endpoints:
Os endpoint esperados estão funcinando perfeitamente.

<details><summary>Endpoints de Collaborator</summary>
<p>

| Verbo  | Endpoint                  | Parâmetro | Body             |
|--------|---------------------------|-----------|------------------|
| POST   | /collaborators            | N/A      | Schema collaborator |
| GET    | /collaborators/list       | N/A      | N/A              |
| GET    | /collaborators/{code}     | code       | N/A              |
| GET    | /collaborators/login/{login} | login  | N/A              |
| PUT    | /collaborators/{code}     | code       | Schema collaborator |
| DELETE | /collaborators/delete/{code}    | code  | N/A              |

</p>
</details>

<details><summary>Endpoints de Department</summary>
<p>

| Verbo  | Endpoint                | Parâmetro | Body          |
|--------|-------------------------|-----------|---------------|
| POST   | /departments            | N/A       | Schema department   |
| GET    | /departments/list       | N/A       | N/A           |
| GET    | /departments/{code}     | code      | N/A           |
| PUT    | /departments/{code}     | code      | Schema department|
| DELETE | /departments/{code}     | code      | N/A           |

</p>
</details>

<details><summary>Endpoints de Group</summary>
<p>

| Verbo  | Endpoint                | Parâmetro | Body          |
|--------|-------------------------|-----------|---------------|
| POST   | /groups                 | N/A       | Schema groups |
| GET    | /groups/list            | N/A       | N/A           |
| GET    | /groups/{code}          | code      | N/A           |
| PUT    | /groups/{code}          | code      | Schema groups |
| DELETE | /groups/{code}          | code      | N/A           |

</p>
</details>

O schema (model) dos endpoitns, são utilizado para passar os campos exigidos, como no verbo POST e PUT.

Todas solicitações como GET, POST, PUT e DELETE que correspondem como CREATE, READ, UPDATE e DELETE (CRUD) estão funcionando.

API em si é bem simples de ser utilizada, meu passo a passo é de utilização vai ser criando um colaborador.

<details><summary>Cadastrando um Collaborator:</summary>
<p>

```json
{
    "name": "victor99dev",
    "login": "dev.victor",
    "password": "12540",
    "age": "20",
    "contact": {
        "email": "v99dev@gmail.com",
        "telephone": "+00 00 00000-0000",
        "social_network": "@user"
    },
    "document": {
        "type": "cpf",
        "number": "000.000.000-00",
        "date_of_issue": "2023-05-11T00:53:24.957Z"
    },
    /* Aqui abaixo inserimos o id do nosso departamento e logo depois do nosso group */ 
    "department_id": "5702eabe-8d57-4f7d-9454-c7fa8bac1fdf",
    "group_id": "992548cb-49ca-47ba-ae5b-676dae488b8d",
    "address": {
        "street_address": "street address",
        "number": "123",
        "city": "city",
        "state": "SP",
        "country": "BR"
    },
    "description": "description",
    "active": true,
    "created_at": "2023-05-11T00:53:24.957Z",
    "updated_at": "2023-05-11T00:53:24.957Z"
}
```
</p>
</details>

Após cadastrar o swagger irá informar o Id gerado que podemos utilizar para verificar seu detalhar, onde será informado somente dados desse collaborator.

<details><summary>Detalhar:</summary>
<p>

```json
{
    "id": "8bb735e0-d51f-4c0a-bf5e-6d18016d88f1",
    "name": "victor99dev",
    "age": "20",
    "contact": {
        "email": "v99dev@gmail.com",
        "telephone": "+00 00 00000-0000",
        "social_network": "@user"
    },
    "document": {
        "documents_type": "cpf",
        "number": "000.000.000-00",
        "date_of_issue": "2023-05-11T00:53:24.957Z"
    },
    "department": {
        "id": "5702eabe-8d57-4f7d-9454-c7fa8bac1fdf",
        "name": "Administrative",
        "description": "Department For Administrative"
    },
    "group": {
        "id": "992548cb-49ca-47ba-ae5b-676dae488b8d",
        "name": "Human Resources",
        "description": "Group For Administrative"
    },
    "address": {
        "street_address": "street address",
        "number": "123",
        "city": "city",
        "state": "SP",
        "country": "BR"
    },
    "login": "dev.victor",
    "password": "12540",
    "description": "description",
    "active": true,
    "created_at": "2023-05-11T01:03:32.040Z",
    "updated_at": "2023-05-11T01:03:32.040Z"
}
```
</p>
</details>

Após esse mini tutorial, os próximos endpoints seguem o mesmo fluxo, apenas lembrando de passar os ID's onde referenciamos, igualmente nos exemplos a cima, os outros cadastros são mais simples, cadastrando apenas group e department, sem falar que eles já vem inseridos devido a seed.

<b>Segue a lista de commits para verificar o que foi implementado e alterado! Utilizo o Conventional Commits Pattern para ajudar e detalhar o contexto de cada commit efetuado.</b>

## 👩‍💻 Meus Links:

- Github: [Victor Hugo.](https://github.com/torugo99)
- LinkedIn: [Victor Hugo.](https://www.linkedin.com/in/victor-hugo99/)
- Meu Site: [Victor99dev.](http://victor99dev.site/)

### 😀 | Créditos e Agradecimentos:
- Todas as informações do Nestjs, sendo comandos ou qualquer outra informação foi retirada da documentação oficial.
- Documentações: 
    - [NestJs](https://docs.nestjs.com/)
    - [Swagger](https://docs.nestjs.com/openapi/introduction)
    - [Prisma](https://www.prisma.io/docs)
    - [Docker](https://docs.docker.com/)

Separei algumas ótimas leitua sobre clean architecture, aconselho a todos lerem principalmente o Link 3 que é muito bem explicativo, não deixem de ler o livro também de mesmo nome: **Clean Architecture: A Craftsman's Guide to Software Structure and Design** assim como ver outros padrões como Ports and Adapters.
- Documentações e artigos sobre clean architecture:
    - [link 1](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
    - [link 2](https://ballardchalmers.com/resources/clean-architecture-layers-what-they-are-and-the-benefits/)
    - [link 3](https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6)
    - [link 4](https://www.zup.com.br/blog/clean-architecture-arquitetura-limpa)
- Dbeaver é por onde acesso meus bancos de dados: [Link](https://dbeaver.io/)
- Onde eu gerei o diagrama do banco: [Link](https://app.sqldbm.com/#)
