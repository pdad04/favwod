import React from 'react';

const MovementInputs = props => (
        props.movements.map( (el, idx) => {
            let movement = `movement-${idx}`;
            return (
                <React.Fragment key={idx}>
                    <input
                        type="text"
                        name={movement}
                        className="movements"
                    />
                </React.Fragment>
            )
        })
    
)

export default MovementInputs;