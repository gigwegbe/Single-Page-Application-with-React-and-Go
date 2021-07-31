import React, { Component } from 'react'; 

export default class AppContent extends Component {

    constructor(props){
        super(props); 
        this.listRef = React.createRef();
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(json => {
                console.log(json);

                // let posts = document.getElementById("post-list");
                const posts = this.listRef.current; 
                
                json.forEach(function(obj){
                    let li = document.createElement("li"); 
                    li.appendChild(document.createTextNode(obj.title)); 
                    posts.appendChild(li);

                })
            })
    }

    render(){
        return (
            <p>This is a content
                <br/>
                <button onClick={this.fetchList} class="btn btn-primary" href='#'>Fetch Data</button>

                <hr />

                <ul id="post-list" ref={this.listRef}></ul>
            </p>
        )
    }
}