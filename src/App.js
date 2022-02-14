import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppContext } from './contexts/AppContext';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
	return (
		<>
			<AppContext>
				<Router>
					<Switch>
						<PrivateRoute exact path='/'><h1>Dashboard</h1></PrivateRoute>
						<Route path='/login'><Login /></Route>
					</Switch>
				</Router>
			</AppContext>
		</>
	);
}

export default App;
