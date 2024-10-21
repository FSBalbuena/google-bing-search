# Simple Challenge

The goal was to create a simple Search App, consuming multiple APIs. User can choose between the available services, use them individually, or coupled.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) on 2020.

It is being updated since Oct 2024 (Check Update section below)

## Start

1. **Check the .env-example file** to know how to set the enviroment (is just google and bing service keys).
2. `yarn install`
3. `yarn start`

You only need an one service to play with it and check all the available features. -> I recommend Google, because is easier to get the API key.

## Google API-Key

1. Go to [Google search API](https://developers.google.com/custom-search/v1/overview?hl=es-419#api_key) and click on "Get Key" button.
2. Select a project, or create a new one, is really easy, just type a name.
3. Copy `.env-example` file and paste it next to it (root level), and name it `.env`.
4. Place your custom API key in `REACT_APP_GOOGLE_SEARCH_API_KEY=Th1sI5@n3xAmpL3` in your `.env` file.
5. run `yarn install` and `yarn start`

## Update

on Oct 2024 I started to update this legacy challenge app, in order to introduce more up to date tools.
(\*) -> The last working step

1. TypeScript (If you are wondering why typescript first and not better tests?)

- Catch Errors sooner
- Improve code quality
- Auto-complete, and other editor supports.
- Having typescript will allow me to write better code and tests in the future
  And...Writing tests right now with this code base, to update it later, is more like an Ego call for me and not the best decision for a project. If I had a project that needed to enhance coworkers contribution fast, I would go with typescript, then tests, then new features, and that Is what I plan to do.

2. (\*) PropTypes: I will keep PropTypes around for now, later I would try to implement a babel pluging to compile my TS code to PropTypes in order to remove a package, and have less boilerplate code for a component.

Helped by [this post](https://stackoverflow.com/questions/41746028/proptypes-in-a-typescript-react-application)

3. Tests: Introduce RTL

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
