import React, {FunctionComponent, useEffect, useState} from 'react';

import {getCurrentLeaderboard} from "./api/leaderboardApiClient";

import Header from "./components/header/header.component";
import Leaderboard from "./components/leaderboard/leaderboard.component";
import LoadingNotifier from "./components/loading-notifier/loading-notifier.component";

import './App.scss';

const App: FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [leaderBoardData, setLeaderBoardData] = useState([]);
    useEffect(() => {
        getCurrentLeaderboard()
            .then((response) => setLeaderBoardData(response.profiles))
            .then(() => setIsLoading(false))
            .catch((error) => alert(`Error Fetching Leaderboard: ${error.message}`))
    }, []);

    return (
        <div className="app">
            <Header/>
            {
                isLoading
                    ? <LoadingNotifier />
                    : <Leaderboard profiles={leaderBoardData} />
            }
        </div>
    )
};

export default App;
