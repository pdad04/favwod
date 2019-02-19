import React from 'react';
import {Row, Col, CardPanel} from 'react-materialize';

class SavedWod extends React.Component {

    state = {
        wods: ''
    }

    componentDidMount(){
        const wodsRef = this.props.firebase.ref(`${this.props.user}/wods`);
        this.getWods(wodsRef);
    }

    getWods = async (wodsRef) =>{
        const wodsRefValue = await wodsRef.once('value');
        this.setState({wods: wodsRefValue.val()});
    }

    render(){
        const {wods} = this.state;
        if(wods === null){
            return(
                <Row>
                    <Col s={12}>
                        <h2 className="center-align flow-text">You have no saved wods yet. Add a WOD to your list.</h2>
                    </Col>
                    <Col s={5} l={2}offset="s1 l4">
                        <a href="/addwod/amrap" className="my-button">AMRAP</a>
                    </Col>
                    <Col s={5} l={2}>
                    <a href="/addwod/fortime" className="my-button">For Time</a>
                    </Col>
                </Row>
            )
        }else{
            return(
                <React.Fragment>
                    <Row>
                    {Object.keys(wods).map(key => 
                            <Col s={12} l={4} key={key}>
                                <CardPanel>
                                        <h3 className="center-align">{wods[key].type}</h3>
                                        <h5>Time: {wods[key].time ? `${wods[key].time} Mins` : "-"}</h5>
                                        <h5>Rounds: {wods[key].rounds ? `${wods[key].rounds}` : "-"}</h5>
                                        <ul className="flow-text browser-default">
                                            {wods[key].movements.map((el,idx)=>
                                                <li key={`${key}_${idx}`}>{el.name}</li>
                                            )}
                                        </ul>
                                </CardPanel>
                            </Col>
                    )}
                    </Row> 
                </React.Fragment>
            )}
        }
        //         <div className="content">
        //             <div className="wods">
        //                 <h2>For Time</h2>
        //                 <ul>
        //                     <li>HSPU</li>
        //                     <li>Deadlifts 155/225lbs</li>
        //                     <li>Double Unders</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="content">
        //             <div className="wods">
        //                 <h2>AMRAP</h2>
        //                 <ul>
        //                     <li>HSPU</li>
        //                     <li>Deadlifts 155/225lbs</li>
        //                     <li>Double Unders</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="content">
        //             <div className="wods">
        //                 <h2>AMRAP</h2>
        //                 <ul>
        //                     <li>10-1 Deadlifts 155/225lbs</li>
        //                     <li>1-10 HSPU</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="content">
        //             <div className="wods">
        //                 <h2>AMRAP</h2>
        //                 <ul>
        //                     <li>10-1 Deadlifts 155/225lbs</li>
        //                     <li>1-10 HSPU</li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="content">
        //             <div className="wods">
        //                 <h2>AMRAP</h2>
        //                 <ul>
        //                     <li>10-1 Deadlifts 155/225lbs</li>
        //                     <li>1-10 HSPU</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </React.Fragment>
    //     )}
    // }
}

export default SavedWod;