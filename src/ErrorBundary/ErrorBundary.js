import React , { Component } from 'react';

class ErrorBundary extends Component{
    state = {
        hasError:false,
        errorMessage: ''
    }

    componentDidCatch = (error,info) =>{
        this.setState({hasError:true, errorMessage: error});
    }

    render(){
        if(this.state.hasError){
        return <h1>`{this.state.errorMessage} hola mundo` </h1>;
        } else {
            return this.props.children;
        }

    }

}

export default ErrorBundary;