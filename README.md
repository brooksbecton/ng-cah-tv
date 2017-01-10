# Cah-Tv

## About

Cah-TV will alows users to start a game of Cards Against Humanity through a website and invite their friends to join and play.

Have Fun!

## Set Up

### Firebase
Cah-Tv uses Google Firebase Database as a back end. This will require that you set up a  project through Firebase if you would like to use the app. 

1. Go to the [Google Firebase Console](https://console.firebase.google.com/) and "Create New Project"
2. Click "Add Firebase to your web app"
3. Copy the "config" variable
4. Create file in ./src/assets/ called "firebaseConfig.ts"
5. Add "export const firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };"
6. Add in appropriate keys and urls

### CAH Json file
1. Go to [JSON Against Humanity](http://www.crhallberg.com/cah/json)
2. Download your as many cards as you want
3. Save file in ./src/assets/ called "masterCah.json"

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
