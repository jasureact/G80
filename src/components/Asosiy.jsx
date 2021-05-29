import React from 'react'
import { Component } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default class Asosiy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReg:true
        }
    }
    pressBtn=()=>{
        this.setState({
            isReg: !this.state.isReg
        })
    }
    render() {
        return (
            <div>{
                this.state.isReg ? <SignIn stark={this.pressBtn}/> : <SignUp stark={this.pressBtn}/>
                }
            </div>
        )
    }
}
