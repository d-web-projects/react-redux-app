import React ,{Component} from 'react';

class Status extends Component{
    
    constructor(){
        super();
        this.state = {
            isLogin:true
        }
    }

    render(){
        // let message;
        // if(this.state.isLogin){
        //     message = (<h3>Admin</h3>);
        // }else{
        //     message = (<h3>User</h3>)
        // }
        // return message;
        // return !this.state.isLogin && (<h3>Admin</h3>)
        return !this.state.isLogin ? (<h3>Admin</h3>) : (<h3>User</h3>)
    }
}

export default Status;