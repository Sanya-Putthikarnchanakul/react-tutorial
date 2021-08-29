import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllMenu from './components/AllMenu';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import MUILoginPage from './components/MUILoginPage';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'><AllMenu /></Route>
					<Route path='/route1'><Route1 /></Route>
					<Route path='/route2'><Route2 /></Route>
					<Route path='/login'><MUILoginPage /></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
