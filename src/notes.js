var theMovieDb = {
    api_key: "?api_key=ff38e52764e971ea27f0c77fbc1bc21b",
    base_uri: "http://api.themoviedb.org/3/movie/",
    images_uri: "http://image.tmdb.org/t/p/",
    timeout: 5000,
    language: "en-US"
};


function randomMovie() {
    var uri = theMovieDb.base_uri + 'latest' + theMovieDb.api_key;
    var randomId = Math.floor(Math.random() * 10) + 1;
    fetch(uri)
        .then(res => res.json())
        .then((data) => {
            //this.setState({ movie: data })
            console.log(data.id)
        })
}

fetch(theMovieDb.base_uri + (Math.floor(Math.random() * this.state.movieId) + 1) + theMovieDb.api_key)
    .then((res) => res.json())
    .then((data) => {
        this.setState({
            movieId: data.id,
            movie: data
        });
    });
console.log('zub'+this.state.movie.title);