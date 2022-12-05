# ArgentBank

Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application. Nous avons obtenu un contrat en deux parties qui se décompose en plusieurs phases :

Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
Phase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

## Back-end

Clone "Project 10 Bank-API Backend" repository from:

`https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API`

Open a terminal window in the cloned project
Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

#### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

#### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


## Front-end

Clone this repository:

`https://github.com/TutchMyGit/argentbank`

Then install dependencies:

`npm install`

Launch front-end on port 3000, automatically displayed on your default browser at `http://localhost:3000/`:

`npm run start`
