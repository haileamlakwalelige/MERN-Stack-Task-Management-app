
# MERN Task Manager

# A MERN application for basic tasks management.

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)

## Features

### User-side features

- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features


- Form validations in frontend and backend
- Use of 404 page for wrong urls
- No external CSS files needed (made using Tailwind CSS)
- Redirect to task page after adding and updating
- Use of various React hooks
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Node.js
- Express.js
- React
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-router-dom
- cors
- dotenv
- express
- mongoose

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon


## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Create a file named ".env" inside the backend folder. Add database (if you use Mongodb atlas).

2. Start the application
       
   ````front-end``` -----
   npm run dev
   ```
   ````back-end```-----
   npm start

4. Go to http://localhost:5173/

## Backend API

<pre>
- GET      /tasks
- GET      /tasks/:id
- POST     /createtask
- PUT      /updatetask/:id
- DELETE   /deletetask/:id
</pre>

## Frontend pages

<pre>
- /             Home Screen (list of tasks)
- /create       Add New Task page                  
- /tasks/:id    Edit a task
</pre>

## npm scripts

Inside frontend folder:
- `npm run dev`: Start the frontend development mode


Inside backend folder:
- `npm start`: Starts backend without nodemon.

## Useful Links

- This project

  - Github https://github.com/haileamlakwalelige/MERN-Stack-Task-Management-app/

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world


- Download links

  - Nodejs download: https://nodejs.org/
  - VS Code download: https://code.visualstudio.com/

- Cheatsheets
  - Git cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf
  - VS Code keyboard shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
  - CSS Selectors Cheatsheet: https://frontend30.com/css-selectors-cheatsheet/

## Contact

- Email: haileamlakwaleligne3910@gmail.com
- Linkedin: https://www.linkedin.com/in/haileamlak-waleligne-95b716231/
