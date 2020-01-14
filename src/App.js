import React from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Best from "./components/Best";
import Genres from "./components/Genres";
import Home from "./components/Home";
import theMovieDb from "./api/themoviedb";
import MovieList from "./components/MovieList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movieId: '550',
            movie: {},
            movies: [],
        };
    }

    componentDidMount() {
        fetch(theMovieDb.base_uri + 'latest' + theMovieDb.api_key)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movieId: data.id,
                });
            });
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link
                                        to={{
                                            Home: '/',
                                            state: { maxId: this.state.movieId }
                                        }}/>
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/genres">Genres</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/list">Make a list</Link>
                                </li>
                                <li className="nav-item">
                                    <Link class="nav-link" to="/best">The Best Movie</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/genres">
                            <Genres />
                        </Route>
                        <Route path="/best">
                            <Best />
                        </Route>
                        <Route path="/list">
                            <MovieList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
