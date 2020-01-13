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
        }).then(function (response) {
            return response.json(); // pass the data as promise to next then block
        }).then(function (data) {
            var maxId = data.id;

            console.log('the max id' + maxId, '\n');

            return fetch(theMovieDb.base_uri + (Math.floor(Math.random() * maxId) + 1) + theMovieDb.api_key); // make a 2nd request and return a promise
        })
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({movie: data})
                console.log('movie title ' + data.title)
            })
            .catch(function (error) {
                console.log('Request failed', error)
            })

    }

    render() {
        console.log(this.state.movieId)
        return (

            <div>
                <br/>
                <br/>
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3">Hey ! Let's watch a random movie :</h1>
                            <br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={theMovieDb.images_uri + 'w342/' + this.state.movie.poster_path} alt="/342x513.jpg"/>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="display-4">{this.state.movie.title}</h3>
                                    <p>{this.state.movie.overview}</p>
                                    <p><a className="btn btn-primary btn-lg"
                                          href={"https://www.themoviedb.org/movie/" + this.state.movie.id}
                                          target="_blank" role="button">Learn more &raquo;</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                    commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                    Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                            </div>
                            <div className="col-md-4">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                    commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                    Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                            </div>
                            <div className="col-md-4">
                                <h2>Heading</h2>
                                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
                                    commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                                    risus.</p>
                                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                            </div>
                        </div>

                        <hr/>

                    </div>

                </main>
            </div>
        )
    }
}

export default Home