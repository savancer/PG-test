import React, { Component } from 'react';
import axios from 'axios';

class Playeradmin extends Component {
 
 constructor (props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: '',
        handedness: 'left'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleChange(event) {
        this.setState({
        handedness: event.target.value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();
        let form = document.getElementById( "CreatePlayer" );
        var json = this.toJSONString( form );
        this.formHandler(json);
    }

    formHandler(formFields) {
        console.log(formFields);
        axios.post('https://players-api.developer.alchemy.codes/api/players', formFields)
            .then(function(response){
            console.log(response);        
            })
            .catch(function(error){
            console.log(error);        
        });
    }

    toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				if(name === "handedness"){
                    obj[ name ] = this.state.handedness
                }else{
                    obj[ name ] = value;
                }
			}
		}

		return JSON.stringify( obj );
	} 

  render() {
    return (
      <div className="Playeradmin">
        <h2>Create New Player</h2>
        <form className="playerform" id="CreatePlayer" onSubmit={this.handleSubmit}>
            <table className="table">
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td><input type="text" name="first_name"/></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text" name="last_name" /></td>
                </tr>
                <tr>
                    <td>Rating</td>
                    <td><input type="text" name="rating" /></td>
                </tr>
                <tr>
                    <td>Handedness</td>
                    <td>Left<input type="radio" name="handedness" value="left" onChange={this.handleChange} />
                        Right<input type="radio" name="handedness" value="right" onChange={this.handleChange} /></td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Playeradmin;