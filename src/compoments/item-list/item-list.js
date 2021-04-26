import { Component } from 'react';

import Item from '../item';

import './item-list.css';


export default class ItemList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}