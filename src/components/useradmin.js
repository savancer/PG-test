import React, { Component } from 'react';
import axios from 'axios';

class Useradmin extends Component {
  constructor (props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit(event) {
        event.preventDefault();
        let form = document.getElementById( "CreateUser" );
        var json = this.toJSONString( form );
        this.formHandler(json);
    }

    formHandler(formFields) {
        axios.post('https://players-api.developer.alchemy.codes/api/user', formFields)
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
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

  render() {
    return (
      <div className="Useradmin">
        <h2>Create New User</h2>
        <form className="userform" id="CreateUser" onSubmit={this.handleSubmit}>
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
                    <td>Email</td>
                    <td><input type="email" name="email" /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" /></td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td><input type="password" name="confirm_password" /></td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Useradmin;