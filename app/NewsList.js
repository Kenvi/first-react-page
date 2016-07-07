import React from 'react';
import NewsItem from './NewsItem.js';
import NewsHeader from './NewsHeader.js';

export default class NewsList extends React.Component{
	render(){
		return(
			<div className="newsList">
				<NewsHeader />
				<NewsItem />
			</div>
		);
	}
}