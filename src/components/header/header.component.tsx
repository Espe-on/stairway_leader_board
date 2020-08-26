import React, {FunctionComponent} from "react";

import "./header.styles.scss"
import Countdown from "../countdown/countdown.component";

const Header: FunctionComponent = () => (
    <div className="header">
        <h1 className="header-title">Compete with your friends this week!</h1>
        <Countdown/>
    </div>
);

export default Header;