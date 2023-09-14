# Adding and Deleting Book Collections using Firebase-9

## Introduction

This guide will walk you through the process of adding and deleting book collections using Firebase version 9 in a JavaScript project.

## Getting Started

To run this project, follow these steps:

1. Open your terminal.

2. Install Webpack and Webpack CLI as development dependencies using npm:

    ```bash
    npm i webpack webpack-cli -D
    ```

3. Build the project:

    ```bash
    npm run build
    ```

## Adding a Book Collection

To add a book collection to Firebase, you'll need to follow these steps:

1. Set up Firebase by initializing it with your project's configuration.

2. Use Firebase Firestore or Realtime Database to create a new collection and add books to it.

   Example code:

   ```javascript
   // Initialize Firebase
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     // Add other configuration details
   };
