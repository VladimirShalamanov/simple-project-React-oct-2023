import { useEffect, useState } from "react";

import * as gameService from "../../services/gameService";
import withAuth from "../../HOC/withAuth";
import LatestGame from "./latest-game/LatestGame";

// userId is for example HOC
function Home({
    userId,
}) {
    const [latestGame, setLatestGame] = useState([]);

    useEffect(() => {
        gameService.getLatest()
            .then(result => setLatestGame(result));
    }, []);


    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGame.map(g => <LatestGame key={g._id} {...g} />)}

                {!latestGame.length && <p className="no-articles">No games yet</p>}

                <p>{userId}</p>
            </div>
        </section>
    );
};

export default withAuth(Home);