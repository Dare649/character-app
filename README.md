# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Project Dependencies

For this project I used the following React js frontend dependencies;

- Axios: for managing my http requests with the baseURL - "http://localhost:3000/"


- Json-server: as a dummy server for managing data. I run the json-server by typing; npx json-server -p 3000 -w data/db.json ensuring the port (3000) is the same as the baseURL "http://localhost:3000/"

- React Icons: for allowing me using react icons

- Tailwind CSS: for my styling 

- React Router DOM: for managing all navigations in the application



# Process

- Users lands on the input screen which is the home route requesting for users to input a desired character 

- Upon successfull input of the desired characters, the user will be directed to view all characters that has been inputted so far individually in a card. Same character will have the same card color

- Users can click on the "back" button to got back to input screen from input screen

- When a user click on a desired character on the result screen to delete, all the duplicate characters will deleted leaving the character that was clicked

- Users can click on the "back" button to return to input screen


