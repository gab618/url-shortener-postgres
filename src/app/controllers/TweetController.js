const Twitter = require('../../services/twitter');

class TweetController {
  async show(req, res) {
    let { sender, tweet } = req.query;

    if (!tweet) {
      return res.status(400).json({ error: 'No tweet provided' });
    }

    if (!sender) {
      sender = '🕵️';
    }

    tweet = tweet.replace('@', '@.');
    Twitter.tweet(`${sender}: ${tweet}`);
    return res.json({ sender, tweet });
  }
}

module.exports = new TweetController();
