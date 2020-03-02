const restify = require('restify');
const errs = require('restify-errors')

const server = restify.createServer({
    name: 'Servidor',
    version: '1.0.0'
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '12345678',
        database: 'db'
    }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});


//Rotas REST

server.get('/comments/', (req, res, next) => {

    knex('comments').then((dados) => {
        res.send(dados);
    }, next)
})

server.get('/posts/', (req, res, next) => {

    knex('posts').then((dados) => {
        res.send(dados);
    }, next)
})

server.post('/comments/', (req, res, next) => {

    knex('comments')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)
})

server.post('/posts/', (req, res, next) => {
    knex('posts')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)
})

server.get('/comments/:id', (req, res, next) => {
    const { id } = req.params
    knex('comments')
        .where('id', id)
        .first()
        .then((dados) => {
            if (!dados) return res.send(new errs.BadRequestError('Nada foi encontrado'))
            res.send(dados);
        }, next)
})

server.get('/posts/:id', (req, res, next) => {
    const { id } = req.params
    knex('posts')
        .where('id', id)
        .first()
        .then((dados) => {
            if (!dados) return res.send(new errs.BadRequestError('Nada foi encontrado'))
            res.send(dados);
        }, next)
})
