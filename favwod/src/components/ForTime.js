import React from 'react';
import {Row, Col, Input, Button, Icon} from 'react-materialize';
import MovementInputs from './MovementInputs';

class ForTime extends React.Component {

    componentDidMount(){
        this.props.getType(this.props.match.params.type);
    }

    render(){
        return(
            <Row>
                <h1 className="center-align">For Time</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <Row>
                        <Col s={12} offset="l3">
                            <Input 
                                s={3} 
                                l={1} 
                                label="Time" 
                                name="time" 
                                type="number" 
                                onChange={this.props.handleMovementInput} />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} offset="l3">
                            <Input 
                                s={3} 
                                l={1} 
                                label="Rounds" 
                                name="rounds" 
                                type="number" 
                                onChange={this.props.handleMovementInput}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <MovementInputs 
                            movements={this.props.movements}
                            onInput={this.props.handleMovementInput}
                        />
                    </Row>
                    <Row>
                        <Col s={12} l={9} offset="l3">
                            <Button 
                                style={{marginRight:"1em", marginBottom:"1em"}}
                                className="deep-orange accent-4" 
                                type="submit">
                                Save<Icon left>save</Icon>
                            </Button>
                            <Button 
                                style={{marginRight:"1em", marginBottom:"1em"}}
                                className="deep-orange accent-4" 
                                onClick={this.props.addMovement}>
                                Add Movement<Icon left>add</Icon>
                            </Button>
                            <Button
                                style={{marginBottom:"1em"}}
                                className="deep-orange accent-4" 
                                onClick={this.props.removeMovement}>
                                Remove Movement<Icon left>remove</Icon>
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Row>
        )
    }
}

export default ForTime;