import React from 'react';
import Challenger from './Challenger.jsx';

const Challengers = ({ ladder, search }) => {
  ladder.sort((a, b) => {
    return b.leaguePoints - a.leaguePoints;
  });
  return (
    <div className='white-shader'>
      <h1>Top 300</h1>
      {ladder.map((player, i) => (
        <Challenger key={i} player={player} rank={i} search={search}/>
      ))}
    </div>
  );
};

export default Challengers;