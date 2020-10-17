import React from "react";
import { useHistory } from "react-router-dom";
import { PageURI } from "../../models/enums";

export const Home = () => {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => history.push(PageURI.CONNECT4)}>Start!</button>
        </div>
    )
}