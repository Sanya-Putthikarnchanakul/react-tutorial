import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllMenu from './components/AllMenu';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import MUILoginPage from './components/MUILoginPage';
import ResponsiveLayout from './components/ResponsiveLayout';
import ResponsiveLayoutExample from './components/ResponsiveLayoutExample';
import Shop from './components/Shop';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'><AllMenu /></Route>
					<Route path='/route1'><Route1 /></Route>
					<Route path='/route2'><Route2 /></Route>
					<Route path='/login'><MUILoginPage /></Route>
					<Route path='/responsive-layout'><ResponsiveLayout /></Route>
					<Route path='/responsive-layout-example'><ResponsiveLayoutExample /></Route>
					<Route path='/shop'><Shop /></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
