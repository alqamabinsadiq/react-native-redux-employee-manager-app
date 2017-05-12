import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyDlNXU_xQCygbhx6k1SFpqPpWARt6Smvuc',
            authDomain: 'employmanager-5394d.firebaseapp.com',
            databaseURL: 'https://employmanager-5394d.firebaseio.com',
            storageBucket: 'employmanager-5394d.appspot.com',
            messagingSenderId: '365790098990'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;
