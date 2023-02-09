import classes from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <div className={`md:flex ${classes.page}`}>
        <div className={`ml-28 md:w-1/2 ${classes.description}`}>
            <div className="w-52">
                <h1 className="font-bold text-2xl text-green-400 tracking-wider">Money</h1>
            </div>
            <div className="w-9/12 mt-4">
                <h2 className={`text-5xl font-bold leading-15 ${classes.heading}`}>Manage your payments with <span>Gnosis Pay</span></h2>
                <p className="w-9/12 mt-4 text-md text-slate-200 tracking-wide">Stream salary, get funds against salary streaming with the power of Superfluid x Gnosis.</p>
            </div>
            <div>
                <button className="rounded-full mt-12 text-md">Start Streaming &nbsp; <i className="fa-regular fa-chevron-right"></i></button>
            </div>
        </div>
        </div>
    )
};

export default LandingPage;