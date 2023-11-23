import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameDetails from './components/game-details/GameDetails';

import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

export default function App() {
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
};