### Scouttit 

[Live Site](https://scouttit.herokuapp.com/) | [Wiki](https://github.com/ryanbender34/scouttit/wiki)


Scouttit is a reddit inspired website where users can create, update, and delete threads, create, update and delete comments on existing threads, and create update and delete replies to comments in existing threads. This website was designed as a part of App Academy's 24 week Full Stack software engineering bootcamp program. 

Technologies Used 
Javascipt | Node.js | Flask | React | Redux | SQLAlchemy | PostgresQL

Launching Locally

Prerequisites: 
Node.js version 16.13.1

Getting Started
1) Clone the repository 
  `git clone https://github.com/ryanbender34/scouttit`
2) Install dependencies 
  `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt` 
3) Create a local .env file similar to the .env.example file located in the root directory
  `FLASK_APP=app
   FLASK_ENV=development
   SECRET_KEY=<<YOUR-SECRET_KEY>> (this can be anything)
   DATABASE_URL=postgresql://focusspace_user:<<PASSWORD>>@localhost/focusspace`
4) Set up your PSQL user, password, & database - making sure that it matches your .env file
5) Access your pipenv shell, migrate your database, seed your database, and run your flask app with the following commands:
  `pipenv shell`
  `flask db upgrade`
  `flask seed all`
  `flask run`
6) To run the react app, cd into the react-app directory, install dependencies using node package manager, and start react: 
  `cd react-app`
  `npm install`
  `npm start`
  
Developer
Ryan Bender | LinkedIn
