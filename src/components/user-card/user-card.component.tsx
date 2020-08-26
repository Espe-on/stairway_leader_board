import React, {FunctionComponent} from "react";
import {Profile} from "../../models/Profile";

import "./user-card.styles.scss"

interface UserCardProps {
    user : Profile
    position : number
}

const UserCard : FunctionComponent<UserCardProps> = ({user, position}) => {
    const {isCurrentUser, username, weeklyXP} = user
    return (
        <div className={`user-card ${isCurrentUser ? "current-user" : ""}`}>
        <span className="user-card-name">
            {position}. {username}
        </span>
            <span className="user-card-xp">{`${weeklyXP}XP`}</span>
        </div>
    );
}

export default UserCard;