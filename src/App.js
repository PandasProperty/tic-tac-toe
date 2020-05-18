import React from 'react';
import { Provider } from 'react-redux';
import Game from './containers/game';

import store from './redux';

require ('./styles/App.css');

export default function App() {
	return (
		<Provider store={store}>
			<Game />
		</Provider>
  	);
}
