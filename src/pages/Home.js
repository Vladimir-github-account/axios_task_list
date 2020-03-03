import React  from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
  return (
      <>
        <h1>Home</h1>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/contacts'>Contacts</Link>
      </>
  );
}

export default Home;