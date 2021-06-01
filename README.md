# Kayla Powell's Plant Blog
* **Purpose** - To create a reusble template for creating new React & Express applications.
* **Description** - This application is used to demonstrate an elegant way of connecting a front end React application to a backend Express server

## Prerequisite software
### Node JS
* Install [Node.Js](https://nodejs.org/en/)
* Execute the commands below to quickly install `node.js_v12.16.1-x64`
```batch
curl -o "%cd%\node-v12.16.1-x64.msi" "https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi"
start node-v12.16.1-x64.msi
```

## How to use

#### Part 2 - Running Express Server
* From the root directory of this project, execute
  * `npm run server`
* Navigate to `localhost:5000/api/plants` to view the json being returned by the Express server.

#### Part 3 - Running React Application
* From the `client` directory, located in the root directory of this project, execute
  * `npm start`
* Navigate to `localhost:3000` to view the the ReactJS application.