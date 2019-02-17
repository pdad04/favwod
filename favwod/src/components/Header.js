import React from 'react';
import {Navbar, NavItem, Dropdown} from 'react-materialize';

const Header = props => (
    <Navbar className="deep-orange accent-4" brand="Favwod" right>
        <NavItem href="/">Home</NavItem>
        <Dropdown trigger={<NavItem>Add Wod</NavItem>}>
            <NavItem href="/addwod/amrap">AMRAP</NavItem>
            <NavItem divider />
            <NavItem href="/addwod/fortime">For Time</NavItem>
        </Dropdown>
        {props.user ? <NavItem href="/savedwod">My WODs</NavItem> : null}
        {!props.user ? <NavItem href="/signin">Sign In</NavItem> : <NavItem onClick={props.signOut}>Sign Out</NavItem>}
    </Navbar>
)

export default Header;