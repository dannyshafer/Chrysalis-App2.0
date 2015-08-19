Chrysalis makes investing easier by doing a lot of the basic math associated with fundamental analysis, calculations that are tedious if done manually. Visit it <a href="chrysalis-app.herokuapp.com">here</a>. To get Chrysalis up and running, make sure you have Rails 4.2.0 and are running Ruby 2.2.1 within the local environment where you clone the repo.

As of right now, Chrysalis does not run locally without an .env file for Twitter authentication. These cannot be published in the repo as they contain account information.

To configure the environment, run bundler and npm with:
```
bundle install
npm install
```

To set up the database, ensure you have Postgresql installed on your machine and run
```
rake db:create && rake db:migrate && db:seed
```

As Chrysalis is a decoupled app (React front-end, Rails api back-end), it requires two servers running locally to work. In different terminal windows, run the following commands
```
rails s -b 127.0.0.1
```
and
```
npm run devserve
```

You'll then be able to see the website on localhost:8080, unless your machine is otherwise configured.


**Chrysalis was made with love in San Francisco by Daniel Shafer, Ryan Au, John Hess, and Andrew Donato.**
