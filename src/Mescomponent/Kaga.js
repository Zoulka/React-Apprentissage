import React, {Component} from "react";
import './Kaga.css'

class Kaga extends Component{
    render() {


        return this.props.nom.map((presentation) =>

            <h1 style={{color: 'yellow', fontsize: '90'}} key={presentation.id}> {presentation.nom} {presentation.prenom} {presentation.age}

            </h1>

)

    }
}
export default Kaga;

