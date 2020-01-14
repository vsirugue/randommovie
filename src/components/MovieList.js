import React, { Component } from 'react';
import '../App.css';
import List from './List';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        //add random movie
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return null
        /*return (
            <div>
                <br/>
                <br/>
                <br/>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <List items={this.state.items} />
            </div>
        );*/
    }
}