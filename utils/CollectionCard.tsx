
export default function Card({ title, desc, tags, isPrivate }) {
    return (
        <div className='bg-white rounded-xl shadow-lg my-4' >
            <div className='p-4 bg-gray-300 rounded-t-xl flex flex-wrap items-center' >
                <h1 className='font-bold text-lg' >{ title }</h1>
                <h2 className='font-bold text-gray-700 text-sm ml-4' >By ME</h2>
                { isPrivate && <h2 className='tag ml-4' >Private</h2> }
                <h2 className='tag ml-auto' >Collection</h2>
            </div>
            <div className='p-4 flex justify-center md:justify-between items-center flex-wrap' >
                <div>
                    <p className='font-bold text-gray-900 ' >{ desc }</p>
                    <div className='flex flex-wrap my-4' >
                        { tags.map(t => <div className='tag mr-2' >{ t }</div>) }
                    </div>
                </div>
                <div className='flex' >
                    <button className='bt text-primary-1 w-32' >Edit</button>
                    <button className='bt ml-2 bg-primary-1 text-white w-32' >Access</button>
                </div>
            </div>
        </div>
    )
}

Card.prototype = {
    title: String,
    desc: String,
    tags: [String],
    isPrivate: Boolean
}