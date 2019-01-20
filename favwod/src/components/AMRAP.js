import React from 'react';
import MovementInputs from './MovementInputs';

class AMRAP extends React.Component {
    state = {
        time: "",
        movements: [{name: ""}],
    };

    addMovement = (e) => {
        e.preventDefault();
        this.setState( (prevState) => ({
            movements: [...prevState.movements, {name:""}]
        }))
    }
    
    render(){
        return(
            <div>
                <h1>AMRAP</h1>
                <form className="wod-inputs">
                    <label for="name">Time</label>
                    <input name="time" type="text" placeholder="0" />
                    <MovementInputs 
                        movements={this.state.movements}
                    />
                    <button onClick={this.addMovement}>Add Movement</button>
                </form>
            </div>
        )
    }
}

export default AMRAP;