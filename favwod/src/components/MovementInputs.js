import React from 'react';
import {Input, Col} from 'react-materialize';

class MovementInputs extends React.Component {
    render(){
        return (
            this.props.movements.map( (el, idx) => {
                let movement = `movement-${idx}`;
                return (
                    <React.Fragment key={idx}>
                        <Col s={12} offset="l3" className="movement-input" >
                            <Input
                                s={9}
                                l={6}
                                label="Movement"
                                type="text"
                                name={movement}
                                onChange={(e) => this.props.onInput(e,idx)}
                                required
                            />
                        </Col>
                    </React.Fragment>
                )
            })
        );
    }
    
}

export default MovementInputs;