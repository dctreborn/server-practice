* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
    Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

  	- Answer: What advantages does it offer?
    makes it easier to make dbs, enter data, and retrieve
    easy to test
    easy to access multiple databases
    validations
    complex sequel queries easier
    good for transactions and migrations

  	- Answer: How do I install it? How do I incorporate it into my app?
    npm install sequelize
    var sequelize = require("sequelize");

  	- Answer: What the heck is a Sequelize model? What role will it play?
    a representation of table in database
    defines mapping between model and table and add timestamps to creation


  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
        var countries = sequelize.define('country', {
          country: Sequelize.STRING,
          PhoneCode: Sequelize.INTEGER,
          Capital: Sequelize.STRING,
          IndependenceYear: Sequelize.INTEGER
        },{
            freezeTableName: true //tablename will be same as model name ex. country -> countries does not happen
        });

        countries.sync({force: true}).then(function () {
            return countries.create({

            });
        });

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
      countries.findAll({
      where: {
        IndependenceYear: { $gt: new Date().getFullYear() - 50}
      }
      });

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

      countries.findAll({
      order: "IndepedenceYear DESC"
      })

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
