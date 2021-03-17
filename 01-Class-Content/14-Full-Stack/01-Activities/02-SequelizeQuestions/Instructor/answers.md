* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).


- Answer: What is Sequelize?
Promise based ORM used by NODEJS using JS promise syntax to accomplish mapping.

- Answer: What advantages does it offer?
Easier to manage a SQL database


- Answer: How do I install it? How do I incorporate it into my app?

```
npm install --save sequelize mysql2

const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

```
- Answer: What the heck is a Sequelize model? What role will it play?
replaces our ORM/models, replaces our schema.sql, 
a way to define our columns and tables using JS

- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Country = sequelize.define('Country', {
  // Model attributes are defined here
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_code: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  capitol: {
    type: DataTypes.STRING,
    allowNull, false
  },
  independence_year: {
      type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

Country.findAll({
    where: {
        independence_year: {
            [Op.gt]: 1971
        }
    }
})
// 2021 - 50 1971
Country.findAll({
order: [
    ['independence_year', 'DESC']
],
offset: 2,
limit: 2
});