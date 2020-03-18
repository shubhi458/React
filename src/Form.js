import React, {Component} from 'react'

import {withRouter} from 'react-router-dom'
class Form extends Component{
    obj=[];
    constructor(props){
        super(props);
        this.state={
            username:"",
            skills:"",
            technology:""
        }
    }
}
