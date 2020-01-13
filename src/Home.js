import React from "react";
import theMovieDb from "./themoviedb";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movieId: '550',
            movie: {},
            movies: [],
        };
    }

    componentDidMount() {

        let result = fetch(theMovieDb.base_uri + 'latest' + theMovieDb.api_key, {
            method: 'get',
        }).then(function(response) {
            return response.json(); // pass the data as promise to next then block
        }).then(function(data) {
            var maxId = data.id;

            console.log('the max id' + maxId, '\n');

            return fetch(theMovieDb.base_uri + (Math.floor(Math.random() * maxId) + 1) + theMovieDb.api_key); // make a 2nd request and return a promise
        })
            .then(function(response) {
                return response.json();
            })
            .then((data) => {
                this.setState({ movie: data })
                console.log('movie title ' + data.title)
            })
            .catch(function(error) {
                console.log('Request failed', error)
            })

    }

    render() {
        console.log(this.state.movieId)
        return (
            <div class="main">
                <h1>On regarde quoi ce soir ?</h1>
                <h3>{this.state.movie.title}</h3>
                <img src={theMovieDb.images_uri + 'w342/' + this.state.movie.poster_path} alt="/342x513.jpg"/>
            </div>
        )
    }
}

export default Home