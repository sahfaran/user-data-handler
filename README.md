# Express.js Application with MongoDB

This project is a Node.js application using the Express.js framework and MongoDB as the database. The application provides a simple interface for managing user data — including storing, retrieving, and deleting user information.

## Table of Contents

- [Pre-requisite](#Pre-requisite)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Pre-requisite
1. Install Node JS and NPM (Ubuntu):
   a. Install Curl
      sudo apt install curl
   b. curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
   c. nvm --version
   d. source ~/.bashrc
   e. nvm ls-remote
   f. nvm install v18.x.x
   g. npm install -g npm@9.x.x
2. Install MongoDB (Ubuntu):
   https://www.mongodb.com/docs/manual/administration/install-community/
   a. sudo apt-get install gnupg curl
   b. curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
   c. echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
   d. sudo apt-get update
   e. sudo apt-get install -y mongodb-org
3. Launch MongoDB:
   a. sudo systemctl start mongod
   b. sudo systemctl status mongod (check status)
   c. mongosh
   
## Installation

1. Clone the repository:
   git clone https://github.com/sahfaran/user-data-handler.git
2. cd user-data-handler
3. npm install
4. npm start

   
