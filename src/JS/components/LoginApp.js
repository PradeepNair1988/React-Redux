import React from 'react';
import { connect } from 'react-redux';
import { updatePageStatus } from '../Actions/LoginAction';

class LoginApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props.frgtpwd);
       
    }
    handleClick(e){
        console.log(e.target);
        var obj=(e.target).getAttribute("name");
        this.props.updatePageStatus(obj);
    } 
  render() {
    var _this=this;
    var _obj=_this.props.frgtpwd;
    return (
        <div id="login-page" className="row">
        <div className="col s12 z-depth-4 card-panel">
        
            <form className="login-form">
                <div className="row">
                    <div className="input-field col s12 center">
                        <img src="../../Images/logo.jpg" alt="" className="circle responsive-img valign profile-image-login"/>
                        <p className="center login-form-text">COMPANY TITILE AND SIGNIN FORM PLACEHOLDER</p>
                    </div>
                </div> 
                { _obj==="login" ?
                    <div className="row">
                        <div className="margin">
                            <div className="input-field col s12">
                                <i className="mdi-social-person-outline prefix"></i>
                                <input id="username" required  data-error="wrong" type="email" className="validate"/>
                                <label htmlFor="username" className="center-align">Username</label>
                            </div>
                        </div>
                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="mdi-action-lock-outline prefix"></i>
                                <input id="password" required  type="password" className="validate"/ >
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>  
                        <div className="row">          
                            <div className="input-field col s12 m12 l12  login-text">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                        </div>
                        <div className="row">
                                <div className="input-field col s12">
                                    <a href="#" className="btn waves-effect waves-light col s12">Login</a>
                                </div>
                        </div>
                        </div>
                        :  <div className="row margin">
                        <div className="input-field col s12">
                        <i className="mdi-social-person-outline prefix"></i>
                        <input className="validate" id="email" type="email"/>
                        <label htmlFor="email" data-error="wrong" data-success="right" className="center-align">Email</label>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <a href="forgot-password.html" className="btn waves-effect waves-light col s12">Recover my Password</a>
                        </div>
                        </div>
                    </div> }  
                <div className="row">
                    <div className="input-field col s6 m6 l12">
                        <p className="margin center-align medium-small">
                {_obj==="login" ? <a href="#" name="forgotlink" onClick={this.handleClick}>Forgot password ? </a>: <a href="#" name="login" onClick={this.handleClick}>Back to Login</a>}</p>
                    </div>          
                    </div>  
            </form> 

        </div>
      </div>
    );
  }
}

/* const mapStateToProps = state => ({
    getLoginData: state.getLoginData
}) */
   
const mapDispatchToProps = dispatch => ({
    updatePageStatus : id => dispatch(updatePageStatus(id))
});


export default connect(
    null,
    mapDispatchToProps
  )(LoginApp);

