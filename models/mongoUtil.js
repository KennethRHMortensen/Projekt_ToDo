const mongoose = require('mongoose');

module.exports = {
    mongoConnect: async function () {    // utility function: connect to mongodb server
        const DBS = "localhost"; //Database Server
        const DBN = "todoList"; //Database Name
        const CONSTR = `mongodb://${DBS}:27017/${DBN}`; //Connection String
        const PARAMS = { useNewUrlParser: true, useUnifiedTopology: true }; // Hvad gør disse??? RESEARCH
        await mongoose.connect(CONSTR, PARAMS); // Afvent forbindelse før der må gøres mere
        return mongoose.connection;
    }
};
