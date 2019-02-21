import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import savedwod from '../images/SavedWods.png';
import addwod from '../images/AddWods.png';
import CardTitle from 'react-materialize/lib/CardTitle';

const Main = () => (
    <div className="welcome">
        <Row>
            <Col s={12} className="flow-text">
                <p>FavWOD is for those days that the programed WOD(Workout Of The Day) just doesn't sound appealing or you want
                    to get some extra work in. It's simply a way to keep track of previous WODs that you've done and want to
                    remember so you can do it again, or for or ones you see and want to give a try. 
                </p>
                <p className="center-align hide-on-med-and-up"><a href="/createaccount" className="my-button">CREATE ACCOUNT</a></p>
            </Col>
        </Row>
        <Row className="hide-on-small-only">
            <Col s={12} l={6}>
                <Card className='medium flow-text'
                    header={<CardTitle image={savedwod}></CardTitle>}>
                    A simple way to track WODs you want to redo in the future.
                </Card>
            </Col>
            <Col s={12} l={6}>
                <Card className='medium flow-text'
                    header={<CardTitle image={addwod}></CardTitle>}>
                    Easily add 'For Time' or 'AMRAP' WODs.
                </Card>
            </Col>
        </Row>
        <Row className="hide-on-med-and-up">
            <Col s={12} l={6}>
                <Card className='small flow-text'
                    header={<CardTitle image={savedwod}></CardTitle>}>
                    A simple way to track WODs you want redo in the future.
                </Card>
            </Col>
            <Col s={12} l={6}>
                <Card className='small flow-text'
                    header={<CardTitle image={addwod}></CardTitle>}>
                    Easily add 'For Time' or 'AMRAP' WODs.
                </Card>
            </Col>
        </Row>
            <p className="center-align hide-on-small-only"><a href="/createaccount" className="my-button">CREATE ACCOUNT</a></p>
    </div>
)

export default Main;