import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Friend : {gift}</h2>
        </div>
    );
};

export default Friend;