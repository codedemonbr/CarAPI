<h1 align="center">
    Cars - Backend
</h1>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/codedemonbr/CarAPI">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codedemonbr/CarAPI">

  <a href="https://www.codacy.com/gh/codedemonbr/CarAPI/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=codedemonbr/CarAPI&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/1f8b30a499ce412f98fa085a579998f5"/>
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codedemonbr/CarAPI">

  <a href="https://github.com/codedemonbr/CarAPI/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codedemonbr/CarAPI">
  </a>

  <a href="https://github.com/codedemonbr/CarAPI/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/codedemonbr/CarAPI">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/codedemonbr/CarAPI">
</p>

<!-- Index -->

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#minidisc-database-connection">Database Connection</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-testing-connections">Testing Connections</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#card_index-my-contacts">My Contacts</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-License">License</a>
</p>

## :rocket: Technologies

This project is a challenge proposed by the company bhut. The following technologies were used:

-   [Node.js](https://nodejs.org/en/);
-   [BCrypt](https://www.npmjs.com/package/bcrypt);
-   [Consign](https://www.npmjs.com/package/consign);
-   [Cors](https://www.npmjs.com/package/cors);
-   [Express](https://expressjs.com/);
-   [Knex](https://knexjs.org/);
-   [Passport](http://www.passportjs.org/);
-   [JWT](https://jwt.io/);
-   [PostgreSQL](https://www.postgresql.org/);

## :information_source: How to use

First of all create a **_.env_** file in your root directory.  
As model below:

```javascript
module.exports = {
    authSecret: "insert here your key, something like : !@#$1234&%$425!@$*&",
};
```

```bash
    #Clone repository
    $ git clone git@github.com:codedemonbr/CarAPI.git

    #Go into the repository
    cd yourRepositoryHere

    #Install dependencies
    yarn install
    #OR
    npm install

    #Run Project
    yarn start
    #OR
    npm start

```

Use [Node.js v14.15][nodejs] or higher.

## :minidisc: Database connection

As a prerequisite for running this project it is necessary to have an instance of postgreSQL running.
If you don't have a ready and configured postgres environment, enter [this repository](https://github.com/codedemonbr/PostgreSQL-Environment).
To run migrations, you can type in the terminal the following command:

```bash
knex migrate:latest
```

You need to have PostgreSQL running. Edit the file **_knexfile.js_** as following:

```javascript
module.exports = {
    client: "postgresql",
    connection: {
        host: "youInstanceIP",
        port: "5432",
        database: "cars",
        user: "postgres",
        password: "Postgres2021!",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "knex_migrations",
    },
};

```

## :link: Testing connections

:link: Signup User:

<p align="center">
  <img alt="Signin User" src="https://res.cloudinary.com/codedemonbr/image/upload/v1624405230/signup_h4locv.gif">
</p>

:link: Signin User:
<p align="center">
  <img alt="Signup User" src="https://res.cloudinary.com/codedemonbr/image/upload/v1624405230/signin_qugerg.gif">
</p>


:link: Post Car:

<p align="center">
  <img alt="Post Car" src="https://res.cloudinary.com/codedemonbr/image/upload/v1624405230/PostCars_wb3qno.gif">
</p>

:link: Get Cars:

<p align="center">
  <img alt="Get Cars" src="https://res.cloudinary.com/codedemonbr/image/upload/v1624405230/GetCars_mxg6r7.gif">
</p>

:link: Delete Car:

<p align="center">
  <img alt="Delete Car" src="https://res.cloudinary.com/codedemonbr/image/upload/v1624405229/DeleteCar_ijyd8h.gif">
</p>

:link: Update Car:

<p align="center">
  <img alt="Update Car" src="https://res.cloudinary.com/codedemonbr/image/upload/v1624405232/UpdateCar_xt08zy.gif">
</p>

## :card_index: My contacts

```json
{
    "name": "Thiago Henrique dos Santos",
    "email": "henrique.thsantos.ths@gmail.com",
    "github": "https://github.com/codedemonbr",
    "linkedin": "www.linkedin.com/in/codedemonbr",
    "phones": [
        {
            "sp_phone": "+5511986082341"
        },
        {
            "ba_phone": "+5571997115946"
        }
    ]
}
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/codedemonbr/CarAPI/blob/master/LICENSE) for more information.

---

Made with inner :fire: by Thiago Henrique dos Santos :wave: [Get in touch!](www.linkedin.com/in/codedemonbr)

[nodejs]: https://nodejs.org/
