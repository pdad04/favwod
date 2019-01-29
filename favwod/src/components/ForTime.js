import React from 'react';
import MovementInputs from './MovementInputs';

class ForTime extends React.Component {

    componentDidMount(){
        this.props.getType(this.props.match.params.type);
    }

    render(){
        return(
            <div className="content full-width">
                <h1>ForTime</h1>
                <form className="wod-inputs">
                    <label htmlFor="name">Time</label>
                    <input name="time" type="number" placeholder="0" onChange={this.props.handleMovementInput} />
                    <label htmlFor="rounds">Rounds</label>
                    <input name="rounds" type="number" placeholder="0" />
                    <MovementInputs 
                        movements={this.props.movements}
                        onInput={this.props.handleMovementInput}
                    />
                    <button onClick={this.props.addMovement}>Add Movement</button>
                    <button onClick={this.props.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ForTime;