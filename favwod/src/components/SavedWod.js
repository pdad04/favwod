import React from 'react';

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
        // const wods = wodsRefValue.val();
        this.setState({wods: wodsRefValue.val()});
    }

    render(){
        const {wods} = this.state;
        if(!wods){
            return(
                <div></div>
            )
        }else{
            return(
                <React.Fragment>
                    {Object.keys(wods).map(key => 
                        <div className="content" key={key}>
                            <div className="wods">
                                <h2>{wods[key].type}</h2>
                                <ul>
                                    {wods[key].movements.map((el,idx)=>
                                        <li key={`${key}_${idx}`}>{el.name}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )} 
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