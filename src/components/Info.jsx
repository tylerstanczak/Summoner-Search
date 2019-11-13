import React from 'react';
import axios from 'axios'; 

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.info.name,
      eSId: this.props.info.eSId,
      summonerLevel: this.props.info.summonerLevel,
      tier: '',
      rank: '',
      wins: 0,
      losses: 0,
    };
  }

  componentDidMount() {
    axios.get(`/rank/${this.state.eSId}`)
      .then(result => {
        this.setState({
          wins: result.data[0].wins,
          losses: result.data[0].losses,
          tier: result.data[0].tier,
          rank: result.data[0].rank
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <table className={'white-shader'}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Win Rate</th>
              <th>Tier</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{this.state.name}</th>
              <th>{this.state.summonerLevel}</th>
              <th>{((this.state.wins / (this.state.wins + this.state.losses)) * 100).toFixed(2)}%</th>
              <th>{this.state.tier}</th>
              <th>{this.state.rank}</th>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
} 

export default Info;