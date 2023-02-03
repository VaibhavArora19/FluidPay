const Navbar = () => {
    return (
        <div className="flex justify-between m-8">
            <div>
                <h1 className="text-2xl">Gnosis</h1>
            </div>
            <div>
                <ul className="flex">
                    <li className="mr-3">Explore</li>
                    <li>Bond</li>
                </ul>
            </div>
            <div>
                <button>Connect</button>
            </div>
        </div>
    )
};

export default Navbar;