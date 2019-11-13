import React from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Search from './Search.jsx';
import Info from './Info.jsx';
import Challengers from './Challengers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      info: {},
      ladder: [],
      queryOnce: 0
    };
    this.search = this.search.bind(this);
    this.getChallengers = this.getChallengers.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  search(query) {
    axios.get(`/search/${query}`,)
      .then(result => {
      this.setState({
        page: 'account',
        info: {
          name: result.data.name,
          eSId: result.data.id,
          summonerLevel: result.data.summonerLevel,
        }
      });
    }).catch(error => {
      console.error(error);
    });
  }

  getChallengers() {
    if (!this.state.queryOnce) {
      axios.get('/chally')
        .then(results => {
          this.setState({
            ladder: results.data.entries,
            page: 'challenger',
            queryOnce: 1
          });
        })
        .catch(error => {
          console.error(error);
        })
    } else {
      this.changePage('challenger');
    }
  }

  changePage(page) {
    this.setState({
      page,
      info: {}
    });
  }

  render() {
    if (this.state.page === 'home') {
      return (
        <>
          <Nav changePage={this.changePage} getChallengers={this.getChallengers}/>
          <h1>League of Legends Player Search</h1>
          <Search search={this.search}/>
        </>
      );
    } else if (this.state.page === 'account') {
      return (
        <>
          <Nav changePage={this.changePage} getChallengers={this.getChallengers}/>
          <Info info={this.state.info}/>
        </>
      );
    } else if (this.state.page === 'challenger') {
      return (
        <>
          <Nav changePage={this.changePage} getChallengers={this.changePage}/>
          <Challengers ladder={this.state.ladder} search={this.search}/>
        </>
      );
    }  
  }
}

export default App;
