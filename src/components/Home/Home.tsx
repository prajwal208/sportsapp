import React, { useEffect, useState } from 'react'
import Homebanner from '../homebanner/Homebanner';
import MatchCard from '../matchcard/MatchCard';
import LiveMatchesCard from '../livematches/LiveMatchesCard';
import TeamCard from '../teamscard/TeamCard';
import NavFooter from '../navfooter/NavFooter';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([])

  console.log(data,"datattaatt");
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://swapi-graphql.netlify.app/.netlify/functions/index',
        {
          query: `{
            allFilms {
                films {
                   title
                    director
                      releaseDate
                      speciesConnection { 
                        species {
                          name
                          classification
                          homeworld {
                            name
                          }
                        }
                      }
                    }
                   }
                }`
        },
      );
      setData(response?.data?.data?.allFilms?.films);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleSubmit()
  }, [])
  return (
    <>
       <Homebanner />
      <MatchCard data={data}/>
      <LiveMatchesCard data={data}/>
      <TeamCard data={data}/>
      <NavFooter />
    </>
  )
}

export default Home
