import React from 'react'
import './matchcard.css'
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'

const MatchCard = ({data}:any) => {
  return (
    <>
      <section className='match_card_main_wrap'>
        <div className='match_header'>
            <h2>Upcoming Matches</h2>
            <p className='seeAll'>See All</p>
        </div>
        <div className='match_card_list'>
        {
          data.map((list:any) => {
            return (
              <div className='matchcard'>
              <h3>{list?.title}</h3>
              <div className='match_team'>
              <div className='team_name'>
                  <img src={team1} alt='team1'/>
                  <p className='team_list'>{list?.director}</p>
              </div>
  
              <div className='match_info'>
                  <p className='time'>4:00PM</p>
                  <p className='date'>10 APR</p>
                  <p className='side'>7-A-Side</p>
              </div>
  
              <div className='team_name'>
              <img src={team2} alt='team1'/>
                  <p  className='team_list'>{list?.director}</p>
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

export default MatchCard
