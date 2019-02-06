import React from 'react';

class MovementInputs extends React.Component {
    render(){
        return (
            this.props.movements.map( (el, idx) => {
                let movement = `movement-${idx}`;
                return (
                    <React.Fragment key={idx}>
                        <input
                            type="text"
                            name={movement}
                            className="movements"
                            onChange={(e) => this.props.onInput(e, idx)}
                            required
                        />
                    </React.Fragment>
                )
            })
        );
    }
    
}

export default MovementInputs;