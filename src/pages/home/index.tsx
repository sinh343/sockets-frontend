import React from "react";
import { navigateTo } from "../../utilities/navigation";

export const Home = () => {
    return (
        <div>
            <button onClick={() => navigateTo("")}>Start!</button>
        </div>
    )
}