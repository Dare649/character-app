# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Project Dependencies

For this project I used the following React js frontend dependencies;

- Axios: for managing my http requests with the baseURL - "http://localhost:3000/"

- Formik & Yup: for managing my form and validations

- Json-server: as a dummy server for managing data

- React Icons: for allowing me using react icons

- Tailwind CSS: for my styling 



# Process

- Users lands on the screen-1 which is the home route requesting for users to input a desired character not more than 20 characters

- Upon successfull input of the desired characters, the user will be directed to view all characters that has been inputted so far

- Users can click on the "back" button to got back to screen-1 from screen-2

- Users can click on the character in screen-2 which will direct them to see the individual character clicked. Note: users should click on the word character and not the entire box

- Users can click on the "back" button to return to screen-2

- Users can delete their desired character.
