import React from 'react';

class TwitterMessage extends React.Component {
  constructor(){
    super();
    this.state={
      message:'',
    }
    this.setMessage = this.setMessage.bind(this);
  }
  setMessage(ev) {
    console.log(ev);
    console.log(this.state.message);
    this.setState({
      message: ev.target.value,
    });
  }


  render() {
    console.log(this.props.maxChars);
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage} />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}
TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};


export default TwitterMessage;

//
// 
