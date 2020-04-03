import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './utils/privateRoute';
import Dashboard from './components/common/dashboard';
import Landing from './components/common/landing';
import Success from './components/authentication/success';
import Onboarding from './components/authentication/onboarding';
import CareerCoach from './components/authentication/careerCoach';
import CreatePost from './components/common/createPost';
import Post from './components/common/post';
import Error from './components/authentication/error';
import PageNotFound from './components/common/pageNotFound';

const App = () => {
	return (
		<Switch>
			<PrivateRoute exact path='/' component={Dashboard} />
			<Route path='/welcome' component={Landing} />
			<Route path='/success' component={Success} />
			<PrivateRoute exact path='/onboarding' component={Onboarding} />
			<PrivateRoute path='/onboarding/careercoach' component={CareerCoach} />
			<PrivateRoute exact path='/post' component={CreatePost} />
			<PrivateRoute path='/post/:id' component={Post} />
			<PrivateRoute path='/error' component={Error} />
			<Route component={PageNotFound} />
		</Switch>
	);
};

export default App;
