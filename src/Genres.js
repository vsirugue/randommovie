import React from "react";
import {
    Route,
    Link,
} from "react-router-dom";
import theMovieDb from "./themoviedb";
import Genre from "./Genre";

//const Genre = ({ match }) => <p>{match.params.id}</p>


class Genres extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-3">
                            <p><Link className="btn btn-primary btn-lg" to="/genres/28"> {theMovieDb.genres[28]} </Link>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p><Link className="btn btn-primary btn-lg" to="/genres/35"> {theMovieDb.genres[35]} </Link>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p><Link className="btn btn-primary btn-lg" to="/genres/18"> {theMovieDb.genres[18]} </Link>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p><Link className="btn btn-primary btn-lg"
                                     to="/genres/878"> {theMovieDb.genres[878]} </Link></p>
                        </div>
                    </div>
                </div>
                <Route path="/genres/:id" component={Genre}/>

            </div>
        );
    }
}

export default Genres