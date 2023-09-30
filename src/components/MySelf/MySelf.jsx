import Special from "../special/Special";

const MySelf = ({ asset }) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;