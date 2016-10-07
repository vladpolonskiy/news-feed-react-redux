import React from 'react';
import App from './containers/App';
import NewsList from './containers/NewsList';
import NewsListItem from './containers/NewsListItem';
import NotFound from './components/NotFound';
import {Route, IndexRedirect} from 'react-router';

export const routes = (
	<div>
		<Route path="/" component={App}>
			<IndexRedirect to="/news" />
			<Route path="/news" component={NewsList} />
			<Route path="/news/(:id)" component={NewsListItem} />
		</Route>
		<Route path="*" component={NotFound} />
	</div>
);