import { Component } from 'react';

import ItemList from '../../item-list';

import { WithApiService } from "../../hoc";

import './main-page.css';


class MainPage extends Component {

    render() {
        return (
            <div className="last-notes">
                <ItemList />
            </div>
        );
    }
}


export default WithApiService(MainPage);
