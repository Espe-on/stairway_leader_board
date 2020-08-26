import React, {FunctionComponent} from "react";
import daysUntilSunday from "./getDayOfWeek";

import "./countdown.styles.scss"

const Countdown: FunctionComponent = () => {
    const remainingDays = daysUntilSunday();
    return (
        <div className="ribbon-container">
            <div className="ribbon-body">
                <p className="remaining-days-container">Resets in:
                    <span className="remaining-days">{` ${remainingDays} Days`}</span>
                </p>
            </div>
        </div>
    );
};

export default Countdown;