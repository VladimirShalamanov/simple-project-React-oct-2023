import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Path from './paths';
import AuthContext from './contexts/authContext';
import * as authService from './services/authService';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameDetails from './components/game-details/GameDetails';
import Login from './components/login/Login';
import Register from './components/register/Register';

export default function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);
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