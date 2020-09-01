# Stairway Leaderboard
This is a small app created for Stairway's Junior Front-End tech test. 
It is a React App which uses Typescript and SCSS. 
It takes data from Stairways's [test API](https://www.stairwaylearning.com/api/v1/stub/leaderboard)   

## Code Structure 
This is a pure Single Page app meaning there is no need for separating out "pages". 
Components live as sub directories of /components. 
Inside each directory there is the main component, and the associated style sheet.  

## Types and Interfaces
Where a definition is used across the app it is stored as a type in the /models directory. 
Otherwise, it is stored in the component which uses it.  


## Styling
Styling for this side is based off the Figma guidelines [here](https://www.figma.com/file/9qSLmzKSmHaTbs3PAOubUF/Dev-Test-Leaderboard?node-id=0%3A1).
The styling works on Flexboxes meaning that it scales to the screen it is on.  

# Notes on task
If given a larger number of users from the API I would extend this app with a stepper or loader to put users on multiple leaderboard pages. 
I would also work on handling error from the API in a more graceful way, and auto updating when the new leaderboard is published. 




# Scripts and info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

