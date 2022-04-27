import React from "react";
import classNames from "classnames";

import './Badge.scss';

const Badge = ({ onClick, color, className }) => {
    return (
        <span
            onClick={onClick}
            style={{ backgroundColor: color}}
            className={classNames('badge', className)}
        >
        </span>
    );
}

export default Badge;