import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameDetails from './components/game-details/GameDetails';

import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthContext from './contexts/authContext';

export default function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        // setAuth(values);
        console.log(values);
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path='/header' element={<Header />} />
                    <Route path='/games' element={<GameList />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                </Routes>

                <Home />
            </div>
        </AuthContext.Provider>
    );
};