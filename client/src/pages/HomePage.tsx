import '../App.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate()
    const handleBtn = () => {
        navigate("/game")
    }
    return (
        <>
            <div className="relative mainDIv w-[100%]">
                {/* content start */}
                <div className='w-full md:px-20 flex flex-col items-center justify-center'>
                    <p className='lg:text-8xl w-full tracking-wide font-bold text-center text-indigo-600 lg:pt-20 kode-mono-bold headingText'>
                        Master-O Game
                    </p>
                    <div className='flex items-center justify-end contentDiv'>
                        <div className='flex flex-col items-start justify-end lg:mt-[10vh]'>
                            <p className='lg:text-6xl lg:w-[35vw] tracking-wide border-0 lg:mt-[5vh] leading-9 GetReady text-indigo-700 font-extrabold font-serif'>
                                Get Ready to <span> Play, Explore,</span> <span>Conquer</span>
                            </p>
                            <p className='text-indigo-600 font-semibold tracking-wide text-xs text-wrap my-2 lg:my-5'>Embark Your gaming journey of discovery  and excitement right here, where the world of immersive gameplay.</p>
                            <div className='my-[2vh] btn lg:w-[20vw] border-0 border-white'>
                                <Button variant="contained" onClick={handleBtn} sx={
                                    {
                                        color: 'white',
                                        backgroundColor: 'rgb(67,56,820)',
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            border: '2px solid rgb(67,56,820)'
                                        },
                                        height: '50px',
                                        width: '100%',
                                        fontWeight: 700,
                                        letterSpacing: "2px"
                                    }
                                }>Start Playing</Button>
                            </div>
                        </div>
                        <div className='w-[50vw] svgDiv -mt-[30vh] relative h-fit flex lg:items-start border-0 border-white lg:justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='svgBlend lg:w-full absolute lg:h-[500px] lg:mt-[0vh]' viewBox="0 0 640 512"><path fill="#5e45ba" d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage