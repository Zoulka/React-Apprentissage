
import './App.css';
import Test from "./Mescomponent/Test";
import React, { Component } from "react";
import Kaga from "./Mescomponent/Kaga";


class App extends Component {

    /* La creation de notre premier State*/
    state = {
        prenom: "Zourkaleini",
        nom: "salihou",
        elle: "independance",
        village: "emploi",
        // creation d'un tableau

        presentation: [
            {
                id:1,
                composant: "Composant de Kaga",
            nom: 'Zoulka',
            prenom: 'Maiga',
                age: 24

        },
            {
                id:2,
            nom: 'Djibrilla',
            prenom: 'Hamidou',
                age: 35

        },
        {
            id:3,
            nom: 'Aminta',
            prenom: 'Salihou',
            age: 48

        }
        ]
    }
    rajeunir = ()=>{
       const nvState = this.state.presentation.map((utilisateur) =>{
           utilisateur.age -= 5;
           return utilisateur.age;
        });
       this.setState({
           nvState
       });
    }
            render() {
        /*SetState permet de modier la liste de tableau ci dessus.*/


                return (
                    <div className="App">
                        <h1>Commponent App</h1>


                        <Test nom={this.state.prenom} moi={this.state.nom}
                        />

                        <p>{this.state.prenom}</p>
                        <Kaga nom={this.state.presentation}/>
                        {<button onClick={this.rajeunir}>RAJEUNIR</button>}

                    </div>
                );
            }
    }
export default App;
