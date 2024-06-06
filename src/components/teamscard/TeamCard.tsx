import React from 'react'
import './teamcard.css'
import team3 from '../images/team3.png'

const TeamCard = ({ data }: any) => {
    return (
        <>
            <section className='teamcard_main_wrap'>
                <div className='match_header'>
                    <h2>Football Teams</h2>
                    <p className='seeAll'>See All</p>
                </div>
                <div className='match_card_list'>
                    {
                        data.map((list: any) => {
                            return (
                                <div className='teamcard'>
                                    <div>
                                        <img src={team3} alt='team_image' />
                                    </div>
                                    <div>
                                        <p className='name'>{list.director}</p>
                                        <p className='champions'>Champions</p>
                                        <p className='players'>15 Players</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default TeamCard
