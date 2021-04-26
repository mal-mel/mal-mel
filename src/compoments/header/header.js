import { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="uk-container">
                <div className="nav-links">
                    <Link className="nav-link uk-heading-small" to="/notebook/">notes</Link>
                    <Link className="nav-link uk-heading-small" to="/projects/">projects</Link>
                    <Link className="nav-link uk-heading-small" to="/about/">about</Link>
                </div>
            </div>
        );
    }
}
