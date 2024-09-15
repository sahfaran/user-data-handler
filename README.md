# Express.js Application with MongoDB

This project is a Node.js application using the Express.js framework and MongoDB as the database. The application provides a simple interface for managing user data — including storing, retrieving, and deleting user information.

## Table of Contents

- [Pre-requisite](#Pre-requisite)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Pre-requisite
1. Install Node JS and NPM (Ubuntu):
   - Install Curl
      `sudo apt install curl`
   - `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
   - `nvm --version`
   - `source ~/.bashrc`
   - `nvm ls-remote`
   - `nvm install v18.x.x`
   - `npm install -g npm@9.x.x`
3. Install MongoDB (Ubuntu):
   https://www.mongodb.com/docs/manual/administration/install-community/
   - `sudo apt-get install gnupg curl`
   - `curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor`
   - `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list`
   - `sudo apt-get update`
   - `sudo apt-get install -y mongodb-org`
4. Launch MongoDB:
   - `sudo systemctl start mongod`
   - `sudo systemctl status mongod` (check status)
   - `mongosh`
   
## Installation

1. Clone the repository:
   - `git clone https://github.com/sahfaran/user-data-handler.git`
2. `cd user-data-handler`
3. `npm install`
4. `npm start`

   
