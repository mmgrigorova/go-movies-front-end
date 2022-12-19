import Ticket from './../images/movie_tickets.jpg';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h2>Find a movie to watch!</h2>
                <hr/>
                <Link to="/movies">
                    <img src={Ticket} alt="movies tickets"/>
                </Link>
            </div>
        </>
    )
}

export default Home;