## Sample todo app implementing [socket.io](https://github.com/Automattic/socket.io) with [React](https://github.com/facebook/react) & [Flux](https://github.com/facebook/flux)
There are already a lot of [tutorials](http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/) online on react & flux, so will keep this short and simple. Screenshot of the end result

<p align="center">
  <img src="https://raw.githubusercontent.com/amritb/socketio_todo/master/todo_socketio.png" alt="Socket.io with React & Flux" />
</p>
> _`Todo1` & `Todo2` are added using the text field, whereas The [`Date.now()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now) items are added by socket.io. These are being emitted from the [`server.js`](https://github.com/amritb/socketio_todo/blob/master/server.js) file every 5 seconds._

### Installation
```shell
git clone git@github.com:amritb/socketio_todo.git
cd socketio_todo
npm install
```
I have used [webpack](http://webpack.github.io) as it's very simple to use coming from an [node.js](http://nodejs.org) background (Webpack lets you write modular frontend code just like we do in node.js using `require()` calls). The frontend is seperate from backend server.js code for simplicity. Hence you will find two `package.json` files, one in the root and another inside frontend directory.

To _build_ the frontend js files
```shell
cd frontend
npm install
npm run build
```
`npm` will run webpack to generate plain javascript. It will create a `build.js` file in the `frontend/public` directory.

To run the app, first run the server (it will run it using nodemon - and keeps _watching_ your files)
```shell
cd ..
npm start
```
This node server will serve the frontend static files `index.html` and `build.js`. You can now access the app from `http://localhost:8080`

### Explanation
React is pretty simple to learn. Its just the `view` of MVC. You create components and attach necessery actions (e.g. add_item, remove_item, etc.). The components know which action to trigger when something chnages. The react components have no connection to the `store`. All the interactions happens via actions-dispatcher.

The actions will require the [`dispatcher`](https://github.com/facebook/flux/blob/master/src/Dispatcher.js) and dispatch events. Dispatcher has nothing much going on, it just sits in between.

The store does a lot of heavy lifting. It _holds_ the data and its operations. It has a `AppDispatcher.register` which checks the actions and _routes_ them. It also _emits_ a `change` event so that the componets can re-render with new data.

Basically this is how the flow goes `Component -> Action -> Dispatcher -> Store -> Component`.

Now, the components are not the only ones who can trigger an _action_. It can be anything, like a server event received via WebSockets.

Our [socketio.js](https://github.com/amritb/socketio_todo/blob/master/frontend/app/socketio/socketio.js) file does exactly that. Whenever it receives a massage, it triggers the relevant action.
