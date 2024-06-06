import React from 'react'
import './livematchcard.css'
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import live from '../images/live.png'

const LiveMatchesCard = ({data}:any) => {
  return (
    <>
      <section className='match_card_main_wrap'>
        <div className='match_header'>
            <h2>Live Matches</h2>
            <p className='seeAll'>See All</p>
        </div>
        <div className='match_card_list'>
          {
            data.map((list:any) => {
              return (
                <div className='matchcard'>
                <h3>Champions League 24</h3>
                <div className='match_team'>
                <div className='team_name'>
                    <img src={team1} alt='team1'/>
                    <p>{list?.director}</p>
                </div>
    
                <div className='live_match_info'>
                   <div className='live_score'>
                    <p className='live_team_score1'>1</p>
                    <p className='live'>Live</p>
                    <p className='live_team_score1'>0</p>
                   </div>
    
                   
                    <div className='live_icons'>
                      <img src={live} alt='live'/>
                        <p>Live</p>
                    </div>
    
                </div>
    
                <div className='team_name'>
                <img src={team2} alt='team1'/>
                    <p>{list?.director}</p>
                </div>
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

export default LiveMatchesCard
