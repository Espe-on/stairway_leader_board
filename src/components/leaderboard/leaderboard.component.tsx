import React, {FunctionComponent} from "react";

import UserCard from "../user-card/user-card.component"
import {LeaderboardResponse} from "../../models/LeaderboardResponse";

import "./leaderboard.styles.scss"

const Leaderboard: FunctionComponent<LeaderboardResponse> = ({profiles}) => (
        <div className="leaderboard">
            {
                profiles
                    .sort((a,b) => (a.weeklyXP < b.weeklyXP) ? 1 : -1)
                    .map((profile, index) => (
                    <UserCard key={index} position={index+1} user={profile}/>))
            }
        </div>
    );

export default Leaderboard;