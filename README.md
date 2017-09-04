This project uses MERN stack to build a complete web application using React, Redux, Express and MongoDB.

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [npm packages-used](#packages-used)
- [Usage](#Usage)
- [Available Scripts](#available-scripts)
  - [npm run dev](#npm-start)
  - [npm start](#npm-test)

## Packages used
This project uses a number of packages from the node ecosystem to simplify development of a complex web application. Details can be gleaned from the package.json files, but here is a list of key packages that this project depends on.
* `create-react-app` is used to generate client side react app. It is an excellent starting point for creating react client applications.
* `express, mongoose` Server side backend api functionality is built using express & mongoose.
* `passport` passport and its associated Strategies are used for authentication. Google oAuth2 strategy is extensively utilized.
* `redux` is used for client side state management.
* `react-router` obvious
* `cookie-session` This module stores the session data on the client within a cookie


## Usage
 * git clone https://github.com/sunkay/feedy.git
 * cd feedy/Server
 * run npm dev
 * Dev Keys:
  - create a file called dev.js in feedy/server/config
    - googleClientID:
    - googleClientSecret:
      - go to console.developers.google.com and setup the Google+API & enter the credentials here
    - mongoURI:
      - sign up for mlab & enter the URL here
      - 'mongodb://<user>:<pwd>@ds1633.mlab.com:63613/feedy-dev',
    - cookieKey:
      - any random alpha-numeric
 * Deploying to AWS
  - [Elastic Beanstalk](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs_express.html).
