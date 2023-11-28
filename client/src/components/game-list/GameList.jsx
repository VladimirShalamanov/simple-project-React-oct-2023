import { useEffect, useState } from "react";

import * as gameService from "../../services/gameService";
import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(res => setGames(res))
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(g => <GameListItem key={g._id} {...g} />)}

            {!games.length && <h3 className="no-articles">No articles yet</h3>}
        </section >
    );
}