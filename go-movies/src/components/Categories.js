import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


export default class Categories extends Component {
    render(){
        return <h2>Category: {this.props.title}</h2>
    }
}