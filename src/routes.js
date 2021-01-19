const { Router } = require('express');

const UrlController = require('./app/controllers/UrlController');
const MasteryController = require('./app/controllers/MasteryController');
const QuoteController = require('./app/controllers/QuoteController');
const PointsController = require('./app/controllers/PointsController');
const GameController = require('./app/controllers/GameController');
const GreetingController = require('./app/controllers/GreetingController');
const CancelController = require('./app/controllers/CancelController');
const TweetController = require('./app/controllers/TweetController');
const PlaylistController = require('./app/controllers/PlaylistController');
const QueueController = require('./app/controllers/QueueController');
const HeaderController = require('./app/controllers/HeaderController');
const BichoController = require('./app/controllers/BichoController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: '?XD' });
});

routes.post('/api/url', UrlController.store);
routes.get('/api/mastery', MasteryController.show);
routes.get('/api/quote', QuoteController.show);
routes.post('/api/quote', QuoteController.store);
routes.put('/api/points', PointsController.update);
routes.get('/api/game', GameController.show);
routes.post('/api/game', GameController.store);
routes.get('/api/greeting', GreetingController.show);
routes.get('/api/cancel', CancelController.show);
routes.get('/api/tweet', TweetController.show);
routes.get('/api/sr/history', PlaylistController.show);

routes.get('/api/queue/list', QueueController.index);
routes.get('/api/queue/current', QueueController.show);
routes.get('/api/queue/join', QueueController.store);
routes.get('/api/queue/next', QueueController.update);

routes.get('/api/header/show', HeaderController.show);
routes.get('/api/header/write', HeaderController.store);
routes.get('/api/header/edit', HeaderController.update);
routes.get('/api/header/list', HeaderController.index);

routes.get('/api/bicho/bet', BichoController.store);

routes.get('/:id', UrlController.show);

module.exports = routes;
