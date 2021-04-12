import { Logout, Add, Face, } from './Vectors'

export default function Navbar() {
    return (
        <nav className='nav' >
            <div className='flex justify-between items-center w-full' >
                <h1 className='text-xl font-extrabold' >
                    Pcz 
                    <span className='tag ml-4' >By Niemand</span>
                </h1>
                <nav className='flex' >
                    <button className='bt ml-2 text-primary-1 shadow w-10 md:w-32' >
                        <div className='desk' >Drop a Piece</div>
                        <Add color='fill-current text-primary-1' className='w-7 h-7 mobile' />
                    </button>
                    <button className='bt ml-2 text-primary-1 shadow w-10 md:w-32' >
                        <div className='desk' >Profile</div>
                        <Face color='fill-current text-primary-1' className='w-7 h-7 mobile' />
                    </button>
                    <button className='bt ml-2 bg-white md:bg-primary-1 text-primary-1 md:text-white shadow w-10 md:w-32' >
                        <div className='desk' >Logout</div>
                        <Logout color='fill-current text-primary-1' className='w-7 h-7 mobile' />
                    </button>
                </nav>
            </div>
        </nav>
    )
}