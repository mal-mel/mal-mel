import { Component } from 'react';

import { ArticleItemAdvanced } from '../article-item';

import './article-list.css';


export default class ArticleList extends Component {
    render() {
        const { articles } = this.props;
        let articlesList = articles.map((article, idx) => {
            return (
                <div className="row articles" key={ `_row_${idx}` }>
                    <div className="col-md-12" key={ `_col_${idx}` }>
                        <ArticleItemAdvanced { ...article } key={ idx } />
                    </div>
                </div>
            );
        });
        return (
            <div className="articles-list">
                <div className="container">
                    { articlesList }
                </div>
            </div>
        );
    }
}
