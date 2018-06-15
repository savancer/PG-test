import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
        email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(event) {
        event.preventDefault();
        let form = document.getElementById( "loginUser" );
        var json = this.toJSONString( form );
        this.formHandler(json);
    }

    formHandler(formFields) {
        axios.post('https://players-api.developer.alchemy.codes/api/login', formFields)
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
      <div className="Login">
        <form className="loginform" id="loginUser" onSubmit={this.handleSubmit}>
            <table className="table">
                <tbody>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name="email" /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" /></td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;