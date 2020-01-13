import React from "react";
import theMovieDb from "./themoviedb";

class Best extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: '550',
            movie: {},
            movies: [],
        };
    }

    componentDidMount() {
        fetch(theMovieDb.base_uri + this.state.movieId + theMovieDb.api_key)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movie: data
                });
            });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <br/>
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3">Hey ! Let's watch the best movie :</h1>
                            <br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={theMovieDb.images_uri + 'w342/' + this.state.movie.poster_path} alt="No poster found"/>
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
                </main>
            </div>
        )
    }
}

export default Best