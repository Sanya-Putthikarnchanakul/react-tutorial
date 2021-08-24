import styles from './App.module.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './components/Home';
import IntroJSX from './components/IntroJSX';

function Users() {
	return <h2>Users</h2>;
}

const App = () => {
	return (
		<>
			<Router>
				<div className={styles.sidebar}>				
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/intro-jsx">Intro to JSX</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</div>

				<div className={styles.container}>
					<Switch>
						<Route exact path="/"><Home /></Route>
						<Route path="/intro-jsx"><IntroJSX /></Route>
						<Route path="/users"><Users /></Route>						
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
