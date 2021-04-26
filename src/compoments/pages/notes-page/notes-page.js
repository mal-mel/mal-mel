import { Component } from 'react';

import ArticlesList from '../../articles-list';
import { WithApiService } from '../../hoc';

import './notes-page.css';


class NotesPage extends Component {
    render() {
        const { apiService } = this.props;
        return (
            <div className="article-list">
                <div className="container-fluid">
                    <ArticlesList articles={ apiService.getArticles(2) }/>
                </div>
            </div>
        );
    }
}


export default WithApiService(NotesPage);
