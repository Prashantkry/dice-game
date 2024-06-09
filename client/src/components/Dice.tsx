import { useState } from 'react'

const Dice = () => {
    // dice code start
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [rolling, setRolling] = useState(false);

    const rollDice = () => {
        setRolling(true);
        setTimeout(() => {
            setDice1(Math.floor(Math.random() * 6) + 1);
            setDice2(Math.floor(Math.random() * 6) + 1);
            setRolling(false);
        }, 1000);
    };
    // end 
    return (
        <>
            {/* dice work start */}
            <div className="dice-container mt-20">
                <div className="dice-wrapper">
                    <div className={`dice ${rolling ? 'rolling' : ''}`} data-side={dice1}>
                        <div className="face one">•</div>
                        <div className="face two">• •</div>
                        <div className="face three">• • •</div>
                        <div className="face four">
                            • •
                            <br />
                            • •
                        </div>
                        <div className="face five text-center flex flex-col items-center justify-center leading-3">
                            <p>• •</p>
                            <p>•</p>
                            <p>• •</p>
                        </div>
                        <div className="face six text-center flex flex-col items-center justify-center leading-3">
                            <p>• • •</p>
                            <p>• • •</p>
                        </div>                        </div>
                    <div className={`dice ${rolling ? 'rolling' : ''}`} data-side={dice2}>
                        <div className="face one">•</div>
                        <div className="face two">• •</div>
                        <div className="face three">• • •</div>
                        <div className="face four">
                            • •
                            <br />
                            • •
                        </div>
                        <div className="face five text-center flex flex-col items-center justify-center leading-3">
                            <p>• •</p>
                            <p>•</p>
                            <p>• •</p>
                        </div>
                        <div className="face six text-center flex flex-col items-center justify-center leading-3">
                            <p>• • •</p>
                            <p>• • •</p>
                        </div>
                    </div>
                </div>
                <button
                    className={`roll-button ${rolling ? 'disabled' : ''} mt-16`}
                    onClick={rollDice}
                    disabled={rolling}
                >
                    {rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
            {/* dice work end */}
        </>
    )
}

export default Dice