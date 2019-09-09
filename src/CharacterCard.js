import React, {Component} from 'react';
export default class CharacterCard extends Component {
    render(){
    return (
     <div class = "card">
      {this.props.value}
     </div>
    )
    }
}