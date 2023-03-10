# Back 4 Blood deck maker

This repository holds the code for the Node.js backend of the PlanetScale online service, developed using Express and MySQL. It provides a comprehensive API for user registration and card deck creation for the Back4Blood game.

## Features
- User registration with username and password
- User authentication with JWT
- Creation of card decks by users
- Querying all created card decks for the logged-in user

## Requirements
- Node.js installed on the local computer
- PlanetScale account for MySQL
- Configuration of environment variables for database connection

## Installation
1. Clone the repository on the local computer
2. Run `npm install` to install all necessary dependencies
3. Configure the environment variables in a `.env` file in the project's root directory
4. Run `npm start` to start the server in development mode

## Environment Variables
- **DATABASE_URL**: Connection URL to the database on PlanetScale
- **PORT**: Port on which the server will run (default is 3000)
- **JWT_SECRET**: Secret key for generation and verification of JWT tokens

## Database models

- #### USERS
  - **ID** 
  - username
  - password

- #### DECKS
  - **ID**
  - id_user
  - title

- #### CARDS
  - **ID**
  - id_type
  - id_affinity
  - title
  - description
  - img

- #### DECKS_CARDS
  - **id_deck**
  - **id_card**

- #### TYPES
  - **ID**
  - title

- #### AFFINITIES
  - **ID**
  - title
  - img