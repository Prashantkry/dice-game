import { GameInterface } from '../interface/GameInterface'
import Dice from '../components/Dice';
const Game = () => {
    // user details start
    const userData: GameInterface = {
        name: 'John Doe',
        Points: 100,
        amountToBet: 100,
        option: ['7 up', '7 down', 'Lucky 7']
    }
    // end

    return (
        <div className="w-full flex flex-col items-center">
            {/* user data start */}
            <div className='text-gray-200 border-y-2 w-full border-indigo-600 py-3 my-4 flex items-center justify-around lg:px-20'>
                <p className="font-semibold text-xs text-gray-400"><span className='text-indigo-600 font-bold text-sm'>Name:</span> {userData.name}</p>
                <p className='font-semibold text-xs text-gray-400'><span className='text-indigo-600 font-bold text-sm'>Points:</span> {userData.Points}</p>
                <p className="font-semibold text-xs text-gray-400"><span className='text-indigo-600 font-bold text-sm'>Betting Amount:</span> {userData.amountToBet}</p>
            </div>
            {/* user data end */}

            {/* select betting options start */}
            <div className='flex items-center justify-between px-4 rounded text-indigo-500 border-indigo-800 border-0 w-[80%] h-[7vh]'>
                <p className='font-bold border-0 w-[45%]'>Choose to bet</p>
                <select className='w-[50%] border-2 border-indigo-900 rounded bg-indigo-950 outline-none bg-transparent'>
                    <option value="">Select</option>
                    <option value="">{userData.option[0]}</option>
                    <option value="">{userData.option[1]}</option>
                    <option value="">{userData.option[2]}</option>
                </select>
            </div>
            {/* select betting options end */}

            <Dice />
        </div>
    )
}

export default Game