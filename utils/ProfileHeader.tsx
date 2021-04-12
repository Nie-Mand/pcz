
import { Avatar } from './Vectors'

export default function Header() {
    return (
        <div className='profile ctr py-5 h-more md:h-96' >

                <Avatar color='fill-current text-primary-1' className='left m-auto w-40 h-40' />
                <div className='right flex flex-col justify-between px-10 py-5 h-full' >
                    <div>
                        <div className='flex flex-wrap items-center' >
                            <h1 className='text-4xl font-extrabold text-gray-900 leading-10' >Niemand Rs</h1>
                            <button className='bt w-32 ml-auto text-gray-700' >Edit</button>
                        </div>
                        <h2 className='font-bold text-gray-700 text-xl py-1' >Someone in this Universe</h2>
                        <p className='font-bold text-gray-600 py-1' >
                            You know when good stuffs happen.. I'm not there
                        </p>
                        <div className='flex py-1 flex-wrap' >
                            <h3 className='tag mr-3' >Creator</h3> 
                            <h3 className='tag mr-3' >React</h3>
                            <h3 className='tag mr-3' >Software Engineer</h3>
                        </div>   
                    </div>
                    <div className='flex justify-center flex-wrap'>
                        <button className='bt w-32 bg-primary-1 text-white mb-2' >My Collections</button>
                        <button className='bt w-32 text-gray-700 mb-2' >Liked</button>
                        <button className='bt w-32 text-gray-700 mb-2' disabled>
                            Followers - To do
                        </button>
                        <button className='bt w-32 text-gray-700 mb-2' disabled>
                            Following - To do
                        </button>
                    </div> 
                </div>
                
            </div>
    )
}
