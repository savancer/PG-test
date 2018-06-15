import React, { Component } from 'react';
import axios from 'axios';

class listplayers extends Component {
 
 constructor (props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: ''
    }
    
  }
  componentDidMount() {
    axios.get('https://players-api.developer.alchemy.codes/api/players')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }
  render() {
    return (
      <div className="Playeradmin">
        <h2>List Players</h2>
        

      </div>
    );
  }
}

export default listplayers;