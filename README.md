# LinkAcademy (a LinkedIn clone)
## Built using React JS, Redux, Firebase & Material-UI. This is a simple clone project with limited functionality.

<p align="center">
    <img src="src/assets/docs/Screenshot 2023-12-18 at 7.11.34 PM.png"
    width = 400px
    >
</p>
<p align="center">
<img src="src/assets/docs/Screenshot 2023-12-18 at 7.11.19 PM.png"
    width = 400px
    >
</p>

# Features and Fuctionality
- Register and Login using Google (Firebase Authentication)
- Add profile pictures using photo URL
- Create a new post
- Realtime update posts
- Auto authenticate user on refresh
- Sign Out

# Technologies Used
- React
- Redux
- Node
- Firebase
- Mongo DB Cluster
- Material UI
- React Flip Move

# How to build your own..?
1. Clone this repo
1. Install all the dependencies
    ```bash
    npm i
    ```
1. Setup Firebase

    - Create Firebase account
    - Create a new project
    - Create a web app for that
    - Copy your config from there

        - Select config option
        - Paste those config inside firebase/config.js file

    - Setup authentication using Google

1. Tweak code as you like
1. Let's build the optimized version

    ```bash
    npm run build
    ```

1. **Now for hosting on Firebase lets config Firebase locally**

    - Install Firebase CLI
    - Login to Firebase

        ```bash
        firebase login
        ```

    - Initialize Firebase

        ```bash
        firebase init
        ```

    - Select hosting in the menu
    - Select your respective project from the list
    - Select 'build' as your hosting directory and other options as you want
    - Let's deploy our clone and make it live

        ```bash
        firebase deploy
        ```

**That's it our clone is up and running share it now**

## Future Plans

-   Might add more login methods
-   Post deleting functionality
-   Post like functionality
-   Add comments on post
-   Private chat
-   Direct photo upload

**_NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS_**

# Licence
MIT