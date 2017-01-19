import React from 'react';


class LoginForm extends React.Component{

  constructor() {
  super();

  this.state = {
    username: '',
    password: '',
  };
  this.setUsername= this.setUsername.bind(this);
  this.setPassword= this.setPassword.bind(this);
}

setUsername(ev){
  this.setState({
    username: ev.target.value,
  });
}

setPassword(ev){
  this.setState({
    password: ev.target.value,
  });
}


  render(){
    return(
      <form>
        <div>
          <label>
          Username
          <input id="text-username" type="text" onChange={this.setUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
              <input id="test-password" type="password" onChange={this.setPassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>

    );
  }
}

export default LoginForm;
