TWITTER = OAuth::Consumer.new(
  ENV['TWITTER_CONSUMER_KEY'],
  ENV['TWITTER_CONSUMER_SECRET'],
  authorize_path: '/oauth/authenticate',
  site: 'https://api.twitter.com'
)
