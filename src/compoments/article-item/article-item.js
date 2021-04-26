import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import './articel-item.css';


const ArticleItemBase = ({ title, image, body }) => {
    return (
        <div className="article-base item">
            <a href="/">
                <img className="img-fluid" src={ image } />
            </a>
            <h3 className="name">{ title }</h3>
            <p className="description">
                { body }
            </p>
            <a className="action" href="/">
                <FontAwesomeIcon icon={ faChevronRight } />
            </a>
        </div>
    );
};


const ArticleItemAdvanced = ({ title, image, body }) => {
    return (
        <div className="article-advanced item">
            <a href="/" className="article-link">
                <img src={ image } className="img-fluid article-image" alt={ title } />
                <div className="carousel-caption title-block">
                    <h1 className="title">{ title }</h1>
                </div>
            </a>
        </div>
    );
};

export {
    ArticleItemBase,
    ArticleItemAdvanced
};
