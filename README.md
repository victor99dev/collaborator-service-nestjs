# 👩🧑 | Collaborator API Service.

## 💻 | Project: Building a collaborator registration API.

Welcome, this project was made with the aim of creating an API with NestJs using typescript.
##### [ 🇧🇷 Leia esta página em Português | Read this page in Português](./docs/README-pt.md)

- Put some concepts into practice and use them with a microservice.
- Applying the clean architecture.
- Use of the nestjs framework.
- Use of the typescript language.
- Use of PostgreSQL database, running locally in container via Docker.

## ⚙ | API.

### ✔ | Technologies:
- Node v18.15.0
- npm v9.6.5
- NestJs v9.4.2
- Prisma v4.13.0

### 📁 | A brief overview of the project:
This application itself is very simple and with few related entities:
- Collaborator.
- Department.
- Group.

In terms of architecture, I chose to implement [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). At the end of the documentation I will be providing articles and publications about.

These are the advantages of using an architecture per layer, this information I take directly from the clean code blog:

1 - Independent of Frameworks. The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.

2 - Testable. The business rules can be tested without the UI, Database, Web Server, or any other external element.

3 - Independent of UI. The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.

4 - Independent of Database. You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else. Your business rules are not bound to the database.

5 - Independent of any external agency. In fact your business rules simply don’t know anything at all about the outside world.

![preview1 img](/docs/img/CleanArchitecture.jpg)

For the sake of organization, I made a point of separating the folders as follows:
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

### ⌨ | Commands

| **Commands npm**                               |                                             **Description**|
|------------------------------------------------|------------------------------------------------------------|
|                          `npm install ou npm i`|               Install all packages for the project to work.|
|                                 `npm run build`|                                          Build our project.|
|                                `npm run format`|               By default, nestjs asks you to use lint to leave your code with the default syntax and style.|
|                `npm start ou npm run start:dev`| Both commands to initialize our project, being **npm run start:dev** so that our project is updated in real time with each change.|

| **Commands docker compose**                    |                                             **Description**|
|------------------------------------------------|------------------------------------------------------------|
|                          `docker compose up -d`|                                        Start our container.|
|                           `docker compose stop`|                             It stops running our container.|
|                             `docker compose rm`|                     Removes our containers that are paused.|

| **Commands prisma**                            |                                             **Description**|
|------------------------------------------------|------------------------------------------------------------|
|`npx prisma migrate dev`| Creation of your migrations, serving to create, update or delete your tables or fields from a given table.|
|                           `npx prisma generate`|                             Generate the Prisma Client with the following command.|
|            `npx prisma db push`|                                  Used to synchronize your Prisma schema with your database schema.|
|         `npx prisma db seed`|    It includes data in our tables that I have already implemented in the project to be consumed only.|

I made a point of adding seeds through the prism so that we could have the best use of the API.

Here are the relationships between my tables:

![preview2 img](/docs/img/collaboratordb-relations.png)

## 📝 | Using the API:

To access the API, just click on the links below:
- [Link LocalHost with Swagger](http://localhost:3000/swagger-ui).
- Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

Swagger view:

![preview3 img](/docs/img/swagger-ui.png)

### 🌐 | Endpoints:
The expected endpoints are working perfectly.

<details><summary>Collaborator Endpoints</summary>
<p>

| Verbs  | Endpoint                  | Parameter | Body             |
|--------|---------------------------|-----------|------------------|
| POST   | /collaborators            | N/A      | Schema collaborator |
| GET    | /collaborators/list       | N/A      | N/A              |
| GET    | /collaborators/{code}     | code       | N/A              |
| GET    | /collaborators/login/{login} | login  | N/A              |
| PUT    | /collaborators/{code}     | code       | Schema collaborator |
| DELETE | /collaborators/delete/{code}    | code  | N/A              |

</p>
</details>

<details><summary>Department Endpoints</summary>
<p>

| Verbs  | Endpoint                | Parameter | Body          |
|--------|-------------------------|-----------|---------------|
| POST   | /departments            | N/A       | Schema department   |
| GET    | /departments/list       | N/A       | N/A           |
| GET    | /departments/{code}     | code      | N/A           |
| PUT    | /departments/{code}     | code      | Schema department|
| DELETE | /departments/{code}     | code      | N/A           |

</p>
</details>

<details><summary>Group Endpoints</summary>
<p>

| Verbs  | Endpoint                | Parameter | Body          |
|--------|-------------------------|-----------|---------------|
| POST   | /groups                 | N/A       | Schema groups |
| GET    | /groups/list            | N/A       | N/A           |
| GET    | /groups/{code}          | code      | N/A           |
| PUT    | /groups/{code}          | code      | Schema groups |
| DELETE | /groups/{code}          | code      | N/A           |

</p>
</details>

The schema (model) of the endpoints are used to pass the mandatory fields like in POST and PUT verbs.

All requests like GET, POST, PUT and DELETE that correspond to CREATE, READ, UPDATE and DELETE (CRUD) are working.

The API itself is very simple to use, my walkthrough is to use it by creating a collaborator.

<details><summary>Registering a Collaborator:</summary>
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
    /* Here below we insert the id of our department and right after our group */ 
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

After registering, the swagger will inform the generated ID that we can use to verify your data, where only the data of that collaborator will be informed.

<details><summary>Detail:</summary>
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

After this mini tutorial, the next endpoints follow the same flow, just remembering to pass the ID's where we referenced, as well as in the examples above, the other entries are simpler, registering only the group and department, not to mention that they are already inserted due to seeding.

<b>Follow the list of commits to check what was implemented and changed! I use the Conventional Commits Pattern to help and detail the context of each commit made.</b>

## 👩‍💻 My Links:

- Github: [Victor Hugo.](https://github.com/torugo99)
- LinkedIn: [Victor Hugo.](https://www.linkedin.com/in/victor-hugo99/)
- My WebSite: [Victor99dev.](http://victor99dev.site/)

### 😀 | Credits and Thanks:
- All Nestjs information, whether commands or any other information were taken from the official documentation.
- Documents: 
    - [NestJs](https://docs.nestjs.com/)
    - [Swagger](https://docs.nestjs.com/openapi/introduction)
    - [Prisma](https://www.prisma.io/docs)
    - [Docker](https://docs.docker.com/)

I separated some great readings about clean architecture, I advise everyone to read mainly Link 3 which is very well explanatory, be sure to read the book with the same name: **Clean Architecture: A Craftsman's Guide to Software Structure and Design** as well how to see other standards like ports and adapters.
- Documents and articles on clean architecture:
    - [link 1](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
    - [link 2](https://ballardchalmers.com/resources/clean-architecture-layers-what-they-are-and-the-benefits/)
    - [link 3](https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6)
    - [link 4](https://www.zup.com.br/blog/clean-architecture-arquitetura-limpa)
- Dbeaver is where I access my databases: [Link](https://dbeaver.io/)
- Where I generated the database diagram: [Link](https://app.sqldbm.com/#)
