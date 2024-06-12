import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import './navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { setSignedIn } from "../redux/UserData";
import { RootState } from "../redux/Store";


const Navbar = () => {
    const navigate = useNavigate()
    let loginStatus: boolean = false
    const [showHamburger, setShowHamburger] = useState("slide-left")
    loginStatus = useSelector((state:RootState) => state.UserDetails.SignedIn)

    // console.log("loginStatus", loginStatus)
 

    const dispatch = useDispatch()
    const handleLogout = () => {
        // console.log("logout clicked")
        dispatch(setSignedIn(false))
        loginStatus = false
        navigate("/")
    }

    const handleHamBurger = () => {
        if (showHamburger === "slide-right") {
            setShowHamburger("slide-left")
        }
        else {
            setShowHamburger("slide-right")
        }
    }
    return (
        <>
            <div className="flex flex-wrap place-items-center xl:static md:static sticky top-0 z-20">
                <section className="relative mx-auto">
                    <nav className="flex justify-between  bg--950 text-[#ffffff] w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                            <NavLink to="/" className="border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] h-[25px] border-0' viewBox="0 0 640 512"><path fill="#5e45ba" d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                            </NavLink>
                            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-400 border-b-2 border-indigo-600" : ""}>Home</NavLink></li>
                                <li><NavLink to={"/game"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-400 border-b-2 border-indigo-600" : ""}>Game</NavLink></li>
                                <li><NavLink to={"/Plans"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-400 border-b-2 border-indigo-600" : ""}>Subscription</NavLink></li>
                                <li>
                                    {loginStatus ? (
                                        <button
                                            className="text-white"
                                            onClick={handleLogout}
                                        >
                                            Log Out
                                        </button>
                                    ) : (
                                        <NavLink to={"/signIn"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-400 border-b-2 border-indigo-600" : ""}>Sign In</NavLink>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-burger self-center mr-12 xl:hidden md:hidden" onClick={() => { handleHamBurger() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </nav>
                    {<div className={`xl:hidden md:hidden block fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform  bg-gray-950 text-[#ffffff] shadow-lg ${showHamburger}`}>
                        <div className=" py-4 flex flex-col h-full justify-between">
                            <ul className="  flex flex-col px-6 mx-auto font-semibold font-heading space-x-12 gap-5 justify-start w-full">
                                <li className='!m-0'><NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-600 border-b-2 border-indigo-600" : ""}>Home</NavLink></li>
                                <li className='!m-0'><NavLink to={"/game"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-600 border-b-2 border-indigo-600" : ""}>Game</NavLink></li>
                                <li className='!m-0'><NavLink to={"/Plans"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-600 border-b-2 border-indigo-600" : ""}>Subscription</NavLink></li>
                                <li className='!m-0'>
                                    {loginStatus ? (
                                        <button
                                            className="text-white"
                                            onClick={handleLogout}
                                        >
                                            Log Out
                                        </button>
                                    ) : (
                                        <NavLink to={"/signIn"} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-indigo-400 border-b-2 border-indigo-600" : ""}>Sign In</NavLink>
                                    )}</li>
                            </ul>
                        </div>
                    </div>}
                </section>
            </div>

        </>
    );
};

export default Navbar;