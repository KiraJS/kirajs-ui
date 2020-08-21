const noteRoutes = require('./users-routes');
module.exports = function(app, db) {
    noteRoutes(app, db);
};