import React from "react";
import theMovieDb from "./themoviedb";

class Genre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: '550',
            mydata: {},
            movies: [],
            isFetching: true,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        fetch('https://api.themoviedb.org/3/discover/movie?with_genres='+this.props.match.params.id+'&sort_by=popularity.desc&api_key=ff38e52764e971ea27f0c77fbc1bc21b')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    mydata: data,
                    isFetching: false
                });
            });
        console.log(this.state);

    }

    componentDidMount() {
        this.setState({isFetching: true});
        fetch('https://api.themoviedb.org/3/discover/movie?with_genres='+this.props.match.params.id+'&sort_by=popularity.desc&api_key=ff38e52764e971ea27f0c77fbc1bc21b')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    mydata: data,
                    isFetching: false
                });
            });
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        let id = this.props.match.params.id;
        if (this.state.isFetching) return null;
        else
            return (
                <div>
                    <main role="main">
                        <div className="jumbotron">
                            <div className="container">
                                <h1 className="display-3">Most
                                    popular {theMovieDb.genres[id]} movies</h1>
                                <br/>

                                <div className="row">
                                    <div className="col-md-4">
                                        <h3>{this.state.mydata.results[0].title}</h3>
                                    </div>
                                    <div className="col-md-4">
                                        <h3>{this.state.mydata.results[1].title}</h3>
                                    </div>
                                    <div className="col-md-4">
                                        <h3>{this.state.mydata.results[2].title}</h3>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src={theMovieDb.images_uri +"/w300/"+ this.state.mydata.results[0].backdrop_path}
                                            alt="No poster found"/>
                                    </div>
                                    <div className="col-md-4">
                                        <img
                                            src={theMovieDb.images_uri +"/w300/"+ this.state.mydata.results[1].backdrop_path}
                                            alt="No poster found"/>
                                    </div>
                                    <div className="col-md-4">
                                        <img
                                            src={theMovieDb.images_uri +"/w300/"+ this.state.mydata.results[2].backdrop_path}
                                            alt="No poster found"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <p>{this.state.mydata.results[0].overview}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>{this.state.mydata.results[1].overview}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>{this.state.mydata.results[2].overview}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <p><a className="btn btn-primary btn-lg"
                                              href={"https://www.themoviedb.org/movie/"+this.state.mydata.results[0].id}
                                              target="_blank" role="button">Learn more &raquo;</a></p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><a className="btn btn-primary btn-lg"
                                              href={"https://www.themoviedb.org/movie/"+this.state.mydata.results[1].id}
                                              target="_blank" role="button">Learn more &raquo;</a></p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><a className="btn btn-primary btn-lg"
                                              href={"https://www.themoviedb.org/movie/"+this.state.mydata.results[2].id}
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

export default Genre