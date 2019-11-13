import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  type(e) {
    this.setState({
      input: e.target.value
    });
  }
  render() {
    return (
      <input
        className='w80'
        placeholder='Summoner Name'
        value={this.state.input}
        onChange={event => {
          this.type(event);
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.props.search(this.state.input);
          } 
        }}
      />
    );
  }
}

export default Search;