import React from 'react';
import App from './containers/App';
import Login from './containers/Login';
import AdminPage from './components/AdminPage';
import NewsList from './containers/NewsList';
import NewsListItem from './containers/NewsListItem';
import NotFound from './components/NotFound';
import {Route, IndexRedirect} from 'react-router';

export const routes = (
	<div>
		<Route path="/" component={App}>
			<IndexRedirect to="/news" />
			<Route path="/login" component={Login} />
			<Route path="/admin" component={AdminPage} />
			<Route path="/news" component={NewsList} />
			<Route path="/news/(:id)" component={NewsListItem} />
		</Route>
		<Route path="*" component={NotFound} />
	</div>
);