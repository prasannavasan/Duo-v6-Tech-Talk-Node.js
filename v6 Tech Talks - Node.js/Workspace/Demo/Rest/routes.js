module.exports = function(app){
    var musicians = require('./controllers/musicians');
    
    app.get('/musicians', musicians.findAll);
    app.get('/musicians/:id', musicians.findById);
    app.get('/import', musicians.import);
}
