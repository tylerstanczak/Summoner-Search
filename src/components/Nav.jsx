import React from 'react';

const Nav = ({ changePage, getChallengers }) => {
  return (
    <nav>
      <a onClick={() => {changePage('home')}}>Home</a>
      <a onClick={() => {getChallengers()}}>Ladder</a>
    </nav>
  );
}

export default Nav;