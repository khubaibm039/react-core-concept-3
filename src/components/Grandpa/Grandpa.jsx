import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './grandpa.css'

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = "diamond";
    const [money, setMoney] = useState(1000)

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className=" flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 *  1. Create a context export it 
 *  2. Add provider for the context with a value could be anything
 *  3. useContext to access the value in the Context API
 * 
*/