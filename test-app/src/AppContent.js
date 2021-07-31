import React, { Component } from 'react'; 

export default class AppContent extends Component {

    render(){
        return (
            <p>This is a content
                <br/>
                <button class="btn btn-primary" href='#'>My Button</button>
            </p>
        )
    }
}