"use strict";
var dotenv = require('dotenv');
dotenv.config();
module.exports = {
    development: {
        url: process.env.DEVELOPMENTDB,
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        host: process.env.DBHOST,
        dialect: 'postgres'
    },
    test: {
        url: process.env.TESTDB,
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: process.env.TESTDBNAME,
        host: process.env.DBHOST,
        dialect: 'postgres'
    },
    production: {
        url: process.env.PRODUCTIONDB,
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        host: process.env.DBHOST,
        dialect: 'postgres'
    }
};
//# sourceMappingURL=config.js.map