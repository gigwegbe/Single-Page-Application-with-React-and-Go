import React, { Component } from 'react'; 

export default class AppContent extends Component {

    state = {posts: []}; 

    constructor(props){
        super(props); 
        this.listRef = React.createRef();
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(json => {
               this.setState({posts: json});
            })
    }

    clickedItem = (x) =>{
        console.log("clicked", x);
    }
    render(){
        return (
            <p>This is a content
                <br/>
                <button onClick={this.fetchList} class="btn btn-primary">Fetch Data</button>

                <hr />

                <p>Post is {this.state.posts.length} items long</p>

                <ul>  
                    {this.state.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </p>
        )
    }
}