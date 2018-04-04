import React, { Component } from 'react';
import '../CSS/App.css';
import LoginApp from '../JS/components/LoginApp';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(3);
    this.handlefrgtClick = this.handlefrgtClick.bind(this);
    /*this.state = {isforgotpasswd: false};*/
    this.state={pageStatus:"login"}
  }
  handlefrgtClick(data){
    console.log(data);
    this.setState({
      pageStatus:data
    });
  }

componentDidUpdate(prevProps, prevState){
  if(prevProps.getLoginData !== this.props.getLoginData){
    this.setState({
      pageStatus:this.props.getLoginData
    });
  }
}
  render() {
    return (
      <div className="App">
        <LoginApp frgtpwd={this.state.pageStatus} frgtclick={this.handlefrgtClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getLoginData: state.getLoginData
}) 

export default connect(
  mapStateToProps,
  null
)(App);

