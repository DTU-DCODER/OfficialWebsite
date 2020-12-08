// import { CenterFocusStrong } from '@material-ui/icons';
// import IndexHeader from 'components/Headers/IndexHeader'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
// import {
//     // Button,
//     // Card,
//     // CardBody,
//     // CardFooter,
//     // CardTitle,
//     // Form,
//     // Input,
//     // InputGroupAddon,
//     // InputGroupText,
//     // InputGroup,
//     // Container,
//     Row,
//     Col,
//   } from "reactstrap";
import Car from './sr_carousel';
import JR from './jr_carousel';

import './style.css'

function SrCouncil() {
    return (
        <div>
            <IndexNavbar noPhoto/>
            <h3
            style={{
                textAlign: 'center',
                marginTop: '20vh',
                fontSize: 38,
                fontWeight: 525
            }}
            >COUNCIL 20-21</h3>
            <div className='w80 mt-4'>
                
                <Car />
                <br />
                <br />
                <JR />
            </div>
        </div>
    )
}

export default SrCouncil
