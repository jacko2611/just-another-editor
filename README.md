# just-another-editor

## **Description**

This application is a simple note taking application that allows the user to create, edit, and delete notes. The application is a PWA that can be installed as a native app on the user's device. The application uses IndexedDB to store notes locally and then syncs them with a MongoDB database when the user is online. The application also uses a service worker to cache the application's assets and data.

---
## **Table of Contents**
- <a href="#installation">Installation</a>
- <a href="#technologies-used">Technologies Used</a>
- <a href="#usage">Usage</a>
- <a href="#deployment">Deployment</a>

---
## **Installation**
The application can be installed by cloning the repository and running 'npm i' in the console. The application can then be run by using 'npm run start:dev' in the console to concurrently initialise the server and client sides. Once the server is running - the user can access the application by going to 'localhost:8080' in the browser. Here, they can either use the application in browser or install it as a native app.

---
## **Technologies Used**

- @babel/core
- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/runtime
- babel-loader
- css-loader
- html-webpack-plugin
- http-server
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
- webpack-pwa-manifest
- workbox-webpack-plugin
- express
- concurrently
- nodemon

These can be downloaded localally by doing 'npm install' in console.
---

## **Usage**

To use this site, you simply go to the deployed application and either use it in browser or install it as a native app.

---

## **License**

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

---

## **Deployment**

Below is a link to the deployed site on heroku.