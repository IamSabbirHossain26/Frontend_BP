import { Link } from 'react-router-dom'
import Button from '../Button'
export default function OurMission({type}){
    const desktop = 'bg-black rounded-md grid grid-cols-3 items-center gap-10 max-w-[922px] px-5 '
    const mobile = 'bg-black flex flex-col justify-center items-center px-5 '
    return(
        <div className={`${!type ? desktop : mobile}`}>
            <div>
                <img src="./donet.svg" alt="donet" className=''/>
            </div>
            <div className='col-span-2'>
                <h2 className={`${type ? 'text-center' : ''} text-white font-[600] text-[28px]`}>Support Our Mission</h2>
                <p className={`${type ? 'text-center' : ''} text-white font-[400] text-[14px]`}>Every drop of blood can save a life, but keeping this initiative alive needs your support too. By contributing, you are not just donating money—you are giving hope, strength, and a chance to live.</p>
                <Link to='/donate-us'>
                    <Button className={`${type? 'w-full' : ''} my-5`}>Donate Us</Button>
                </Link>
            </div>
        </div>
    )
}


