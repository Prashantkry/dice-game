import { GameInterface } from '../interface/GameInterface'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { setTotalPoints } from '../redux/UserData';
import { RootState } from '../redux/Store';

const Game = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [rolling, setRolling] = useState(false);
    const [betAmount, setBetAmount] = useState(0)
    const [betOption, setBetOption] = useState(100)
    const [message, setMessage] = useState('')
    const [wonUi, setWonUi] = useState<boolean>(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const signedStatus = useSelector((state: RootState) => state.UserDetails.SignedIn)

    useEffect(() => {
        if (!signedStatus) {
            // console.log("signedStatus", signedStatus)
            navigate('/signIn')
        }
    }, [signedStatus, navigate])

    const nameData = useSelector((state: RootState) => state.UserDetails.name)
    const emailData: string = useSelector((state: RootState) => state.UserDetails.email)
    const TotalPointsData = useSelector((state: RootState) => state.UserDetails.TotalPoints)

    // user details start
    const userData: GameInterface = {
        name: nameData,
        Points: +TotalPointsData,
        amountToBet: 100,
        option: ['7 up', '7', '7 down']
    }
    // end


    // dice face work start
    const renderDiceFace = (side: number) => {
        // console.log("side -> ", side)
        switch (side) {
            case 1:
                return <div className="face one">•</div>;
            case 2:
                return <div className="face two">• •</div>;
            case 3:
                return <div className="face three">• • •</div>;
            case 4:
                return (
                    <div className="face four">
                        • •
                        <br />
                        • •
                    </div>
                );
            case 5:
                return (
                    <div className="face five text-center flex flex-col items-center justify-center leading-3">
                        <p>• •</p>
                        <p>•</p>
                        <p>• •</p>
                    </div>
                );
            case 6:
                return (
                    <div className="face six text-center flex flex-col items-center justify-center leading-3">
                        <p>• • •</p>
                        <p>• • •</p>
                    </div>
                );
            default:
                return null;
        }
    };
    // dice face work end


    // dice code start
    const rollDice = () => {
        if (betAmount === undefined || betOption === undefined) {
            alert("Data Missing")
        } else {
            setRolling(true);
            setTimeout(() => {
                setDice1(Math.floor(Math.random() * 6) + 1);
                setDice2(Math.floor(Math.random() * 6) + 1);
                setRolling(false);
            }, 1000);
        }

    };
    // end 

    // api for dice handling part start
    const diceApi = async (dice1: number, dice2: number, betAmount: number, betOption: number) => {
        if (betAmount === undefined || betOption === undefined) {
            alert("Data Missing")
        } else {
            // const response = await fetch('http://localhost:5000/api/dice', {
            const response = await fetch('https://dice-game-bhdi.onrender.com/api/dice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dice1,
                    dice2,
                    betAmount,
                    betOption,
                    emailData
                })
            })
            const data = await response.json()

            if (data.message.toLowerCase().includes("won")) {
                setWonUi(true)
            }
            // setTimeout(()=>{
            // setWonUi(false)
            // },2000)
            // console.log(data)

            // updating total points in UI
            dispatch(setTotalPoints(data.newPoints))

            // animation of won start
            setMessage(data.message)
            // end
        }
    }
    // end  

    const handlePopModel = () => {
        setWonUi(false)
    }

    // console.log("dice1 -> ", dice1, "dice2 -> ", dice2, "betAmount -> ", betAmount, "betOption -> ", betOption)

    return (
        <div className="w-full flex flex-col items-center">
            {/* user data start */}
            <div className='text-gray-200 border-y-2 w-full border-indigo-600 py-3 my-4 flex items-center justify-around lg:px-20'>
                <p className="font-semibold text-xs text-gray-400"><span className='text-indigo-600 font-bold text-sm'>Name:</span> {userData.name}</p>
                <p className='font-semibold text-xs text-gray-400'><span className='text-indigo-600 font-bold text-sm'>Total Points:</span> {userData.Points}</p>
                {/* <p className='font-semibold text-xs text-gray-400'><span className='text-indigo-600 font-bold text-sm'>Bet Amount:</span> {userData.amountToBet}</p> */}
            </div>
            {/* user data end */}

            {/* select betting options start */}
            <div className='flex items-center justify-between px-4 rounded text-indigo-500 border-indigo-800 border-0 w-[80%] h-[5vh]'>
                <p className='font-bold border-0 w-[45%] h-full'>Choose to bet</p>
                <input type='number' onChange={(e) => setBetOption(+e.target.value)} className='w-[50%] h-full border-2 border-indigo-900 rounded bg-indigo-950 outline-none bg-transparent pl-1 placeholder:text-sm placeholder:text-gray-600' placeholder='Starts from 1' />
            </div>
            {/* bet amount  */}
            <div className='flex items-center justify-between px-4 rounded text-indigo-500 border-indigo-800 border-0 w-[80%] mt-2 h-[5vh]'>
                <p className='font-bold border-0 w-[45%] h-full'>Choose amount</p>
                <input type="number" name="" id="" onChange={(e) => setBetAmount(+e.target.value)} className='w-[50%] border-2 h-full border-indigo-900 rounded bg-indigo-950 outline-none bg-transparent placeholder:text-sm placeholder:text-gray-600 pl-1' placeholder='Can be 100,200,500' />
            </div>
            {/* select betting options end */}

            {/* dice work start */}
            <div className="dice-container mt-20">
                <div className="dice-wrapper">
                    <div className={`dice ${rolling ? 'rolling' : ''}`} data-side={dice1}>
                        {renderDiceFace(dice1)}
                    </div>
                    {/* dice 2  */}
                    <div className={`dice ${rolling ? 'rolling' : ''}`} data-side={dice2}>
                        {renderDiceFace(dice2)}
                    </div>
                </div>
                <button
                    className={`roll-button ${rolling ? 'disabled' : ''} mt-16`}
                    onClick={() => { rollDice(); diceApi(dice1, dice2, betAmount, betOption) }}
                    disabled={rolling}
                >
                    {rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
            {/* dice work end */}

            {/* won ui start */}
            {
                wonUi && (
                    <button onClick={handlePopModel} className='wonUi absolute w-[80%] h-[20vh] mt-[35vh] flex flex-col items-center justify-center rounded-md bg-indigo-800'>
                        <p className='text-gray-300 text-lg mt-2'>{message}</p>
                        <div className='flex items-center justify-around w-[60]'>
                            <span>🎉</span>
                            <span>🎆</span>
                            🎊
                            <span>🥂</span>
                        </div>
                        {/* <!-- Falling flowers/ribbons --> */}
                        <div className="falling-flowers">
                            <div className="flower">🌸</div>
                            <div className="flower">🌼</div>
                            <div className="flower">🌺</div>
                            <div className="flower">🌻</div>
                        </div>
                    </button>

                )
            }
            {/* end */}
        </div>
    )
}

export default Game