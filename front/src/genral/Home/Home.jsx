
function Home(props) {
    return (
        //hero div
        <div className="flex-wrap w-screen h-screen antialiased  dark:text-slate-400 bg-slate-900">
            <div className="p-6  h-min w-1/3 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 justify-center">
                <p className="text-2xl font-mono font-bold underline underline-offset-8 ">
                    Hello and Welcome To TicTacTo
                </p>
            </div>
            <div className="flex items-center h-min  justify-center">
                <div className="p-6  h-min w-min mx-auto text-white rounded-xl bg- shadow-slate-200  shadow-2xl flex items-center space-x-4">
                    <p className="text-2xl font-mono font-bold underline underline-offset-8 "> PVP</p>
                </div>
                <div className="p-6  h-min w-min mx-auto bg-white rounded-xl shadow-lg  space-x-4">
                    <p className="text-2xl font-mono font-bold underline underline-offset-8 "> PVE</p>
                </div>
            </div>

        </div>
    );
}

export default Home;