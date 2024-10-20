# Avantica Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Check the .env-example file** to know how to set the enviroment (is just google and bing service keys).

You only need an one service to play with it. I recommend Google, because is easier to get the API key.

## Google API-Key

1. Go to [Google search API](https://developers.google.com/custom-search/v1/overview?hl=es-419#api_key) and click on "Get Key" button.
2. Select a project, or create a new one, is really easy, just type a name.
3. Copy `.env-example` file and paste it next to it (root level), and name it `.env`.
4. Place your custom API key in `REACT_APP_GOOGLE_SEARCH_API_KEY=Th1sI5@n3xAmpL3` in your `.env` file.
5. run `yarn install` and `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
