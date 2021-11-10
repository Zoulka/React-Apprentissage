import React, {Component} from "react";



class Test extends Component {
    render(){
     return (
         <div>
             <h1>Mon component Test</h1>
             {this.props.nom}<br/>
             {this.props.moi}
         </div>
     )
    }
}
export default Test;