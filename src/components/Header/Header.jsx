
const Header = () => {
    return (
        <div className="flex flex-col items-center py-4 border-gray-400 border-b-2">
            <h3 className="text-purple-700 text-3xl font-bold">Select Your <span className="text-gray-800">Avengers!!</span> </h3>
            <p className="text-xl text-lime-400 font-semibold">Total Budget: <span className="text-gray-800 font-bold">$20000</span></p>
        </div>
    );
};

export default Header;