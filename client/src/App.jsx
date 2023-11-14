import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';

export default function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/header' element={<Header />} />
                <Route path='/games' element={<GameList />} />
                <Route path='/games/create' element={<GameCreate />} />
            </Routes>

            <Home />
        </div>
    )
}