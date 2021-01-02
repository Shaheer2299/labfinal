import React from "react";
import { Navbar,Form} from 'react-bootstrap';



const TopMenu = () => {
    return ( 
    <>
    <Navbar bg="dark" className="topnav">

                <p>Home</p>
                <p>Typography</p>
                <p>Contact</p>
                <p>My Account</p>
        <Form inline>

        </Form>
    </Navbar>
    </>
    );
}
 
export default TopMenu;