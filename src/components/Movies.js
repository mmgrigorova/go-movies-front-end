import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description"
            },
            {
                id: 2,
                title: "Raiders of the Long Ark",
                release_date: "1986-11-07",
                runtime: 114,
                mpaa_rating: "PG-13",
                description: "Some long description 2"
            },
        ];

        setMovies(moviesList)
    }, []);

    return (
        <>
            <div className="text-center">
                <h2>Movies</h2>
                <hr/>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>{m.title}</Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Movies;