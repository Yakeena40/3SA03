import React, {Component} from 'react';
import { booleanTypeAnnotation } from '@babel/types';

export default class Content extends Component{
    constructor(){
        super()
        this.state={
            count:1,
            name:''
        }
    }

    addNum=()=>{
        this.setState({
            count:this.state.count+1,
            name:'test'
        })
    }
    render(){
        return(
         <div>
             name: {this.state.name}
            <botton onClick={this.addNum}> count: {this.state.count}</botton>
         </div> 
        );

    }

}