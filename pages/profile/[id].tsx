/*
    my collections
    saved 

    Collection :
        pub/priv
        title
        desc
        tags

    saved :
        who, when, what

*/

import { GetServerSideProps } from 'next'
import Header from '../../utils/ProfileHeader'
import Random from '../../utils/Random'
import CollectionCard from '../../utils/CollectionCard'

export default function Profile({ id }) {
    return (
        <div>
            <Random />
            <Header />
            <hr />
            <div className='ctr' >
                <CollectionCard 
                    title='My Stuffs'
                    desc='Here I store My stuffs and shit..'
                    tags={['stuffs', 'notes', 'shit']}
                    isPrivate={true}
                />
                <CollectionCard 
                    title='My Quotes'
                    desc='Quotes that can be shared..'
                    tags={['nigga', 'public', 'quote']}
                    isPrivate={false}
                />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params: { id } }) => {

    return {
        props: {
            id
        }
    }
}