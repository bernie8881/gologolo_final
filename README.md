This is a Logo Creation Application I made in Spring 2020 for CSE316.

Open VSC, locate to your root gologolo folder path.
Create New Terminal
run: mongod --dbpath="db"
Create New Terminal
run: cd server
run: nodemon (Connection should be successful)
Open http://localhost:3000/graphql
Create New Terminal
run: cd client
run: npm start
Would you like to run the app on another port instead? (Y/n) ,type Y
Your project should be in: http://localhost:3001/
GraphiQL interface, what can it do? What's the syntax?

-It basically gives you the ability to perform Query and Mutation in this project. 
-After clicking <Docs at the topright corner, you can see all current fields and their types. 
-If you click Mutation, you can see how to perform CRUD operations for logos.
-For syntax, there are many. But they are pretty straight forward. Please check https://graphql.org/learn/queries/

-Query Example:
{
  logos{
    _id
    text
    color
    fontSize
    lastUpdate
  }
}
-Small tricks: If you don't know what to type in the subfields, press any letter/number on your keyboard so that it gives you a list of options. I always recommend you to press 0(It usually doesn't match any defined subfield, so it gives you all options)

Can I query all fields without explicitly listing them?

-No?

What are query variables?

-Please check https://graphql.org/learn/queries/

How can I manage my database? GraphiQL does not really give me the entire view.

-1. Open MongoDB Compass

-2. On the right of New Connection, click Fill in connection fields individually

-3.  Configuration should be the demo below unless Mongod is not listening on 127.0.0.1:27017(which you can find out when you start Mongod)

Hostname: localhost
Port:27017
SRV Record: Off(On Not Tested)
Authentication: None
-4. You can now see 4 databases, the database that saves logos is node-graphql, click in and check it out.

-5. You should now be able to see your entire database, don't forget to click refresh if it's updated.
















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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
