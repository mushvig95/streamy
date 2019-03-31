import React from 'react';
import {signIn, signOut} from '../actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '955775775801-ed87b1o210b5elh7pje2cbudi3q9lmb2.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.auth.isSignedIn.get()? this.props.signIn(this.auth.currentUser.get().getId()):this.props.signOut()
                this.auth.isSignedIn.listen((isSignedIn)=>{
                    isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()):this.props.signOut()
                })
            });
        });
    }

    signedIn(){
        if(this.props.isSigned){
            return <div onClick={()=>{this.auth.signOut()}}>Sign Out</div>
        } else if (this.props.isSigned===null){
            return null
        }else {
            return <div onClick={()=>{this.auth.signIn()}}>Sign In</div>
        }
    }
     

    render(){
        return <div>{this.signedIn()}</div>
    }
}

const mapStateToProps = (state)=>{
    return {
        isSigned: state.authStat.isSignedIn
    }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);