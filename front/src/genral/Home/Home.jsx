import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const Navigate = useNavigate();
    const [plchldrText, setPlchldrText] = useState("Nickname");
    const [nickname, setNickname] = useState("User");
    const [saved, setSaved] = useState("Save Nickname");
    const gameModes = [{ Mode: "PvP" }, { Mode: "PvE" }];

    useEffect(() => {
        setNickname("User" + Math.floor(Math.random() * 100000000))
    }, [])


    function Nav(Mode) {
        Navigate(`/${Mode}`);
    }
    function SaveNickname() {
        setPlchldrText("SHOW US WHAT YOU GOT");
        setSaved("Saved!");
        sessionStorage.setItem("Nickname", nickname);
    }

    return (
        <div className="w-screen h-screen bg-cyan-600 flex justify-center">
            <div className="flex">
                <div className="h-screen w-screen justify-center flex-wrap ">
                    <div className="border-solid font-bold flex flex-col items-center">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to TicTacToad</h1>
                        <p className="mb-6 text-lg font-normal text-grey-900 lg:text-xl sm:px-16 xl:px-48 dark:text-grey-900">Please insert a nickname.</p>
                        <input
                            onChange={(e) => setNickname(e.target.value)}
                            className="rounded-md text-center"
                            placeholder={plchldrText}
                            type="text"
                        />
                        <br />
                        <button onClick={SaveNickname} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{saved}</button>
                        {gameModes.map((gameMode, index) => (
                            <button onClick={() => Nav(gameMode.Mode)} key={index} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{gameMode.Mode}</button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
