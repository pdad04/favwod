import React from 'react';
import MovementInputs from './MovementInputs';

class AMRAP extends React.Component {
    componentDidMount(){
        this.props.getType(this.props.match.params.type);
    }

    render(){
        return(
            <div className="content full-width">
                <h1>For Rounds/Reps</h1>
                <form className="wod-inputs" onSubmit={this.props.handleSubmit}>
                    <label htmlFor="name">Time</label>
                    <input name="time" type="number" min="0" max="120" placeholder="0" onChange={this.props.handleMovementInput} />
                    <MovementInputs 
                        movements={this.props.movements}
                        onInput={this.props.handleMovementInput}
                    />
                    <button onClick={this.props.addMovement}>Add Movement</button>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default AMRAP;