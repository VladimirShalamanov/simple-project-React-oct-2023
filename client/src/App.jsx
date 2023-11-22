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

import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

export default function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            alert('Passwords do not match!');

            navigate(Path.Register);
        } else {

            const result = await authService.register(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);
        }
    };

    const logoutHandler = async () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Header} element={<Header />} />
                    <Route path={Path.GameList} element={<GameList />} />
                    <Route path={Path.GameCreate} element={<GameCreate />} />
                    <Route path={Path.GameDetails} element={<GameDetails />} />

                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
};