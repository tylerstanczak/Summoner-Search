import React from 'react';

const Challenger = ({ player, rank, search }) => (
  <>
    <div>
      <p className='center-text'>{rank} | <span onClick={(e) => search(e.target.val)}>{player.summonerName}</span> | {player.leaguePoints} LP</p>
    </div>
  </>
);

export default Challenger;