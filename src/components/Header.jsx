const Header = () => {
    return (
        <div className="bg-gray-50 flex pt-1 flex-col items-center relative">
            <header className="text-center sm:text-left max-w-3xl w-full px-6">
                <h1 className="text-4xl font-extrabold text-green-900">Alex Peredelskii</h1>
                <p className="text-gray-700 mt-2 text-lg">Creating better customer experiences</p>
            </header>

            {/* Dark slate gray separator */}
            <div className="w-full max-w-3xl h-1 my-6 bg-gray-700 rounded-full px-3" />
        </div>
    );
};

export default Header;