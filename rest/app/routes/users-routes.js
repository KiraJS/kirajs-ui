let ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        db.collection('users').findOne({_id: ObjectID(id)}, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });

    app.post('/users', (req, res) => {
        const user = { name: req.body.name };
        db.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.delete('/users/:id', (req, res) => {
        console.log('delete');
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').deleteOne(details, (err, item) => {
            if (err) {
                res.send(err);
            } else {
                res.send('User ' + id + ' deleted!');
            }
        });
    });

    app.put('/users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        delete req.body._id;
        const user = req.body;
        db.collection('users').updateOne(details,  { $set: user} , (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        });
    });
};