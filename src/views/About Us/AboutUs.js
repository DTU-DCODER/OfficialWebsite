import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import "./style.css"
import Card from "../card"
import Card2 from "../card2"
import DemoFooter from 'components/Footers/DemoFooter'
import {
    Button,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";

function AboutUs() {
    return (
        <>
            <IndexNavbar noPhoto />
            <div className="container_banner">
                <div className="sub_container">
                    <h3 class="head_banner">About D_Coder</h3>
                    <p className="about_des">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos sed. Odit quaerat error at sed iure incidunt deleniti. Alias quaerat nostrum fugiat pariatur ducimus laudantium error delectus veritatis consectetur!
                    </p>
                    <Card />
                    <br />
                    <Card2 />
                </div>
            </div>
           <Row md="12">
               <h1 style={{
                   fontSize: 50,
                   marginTop: '30vh',
                   marginLeft: 'auto',
                   marginRight: 'auto',
                   marginBottom: 50
               }}>Faculty Advisor</h1>
           </Row>

           <Row>
               <Col md="6">
                <img src="https://www.accenture.com/t20200622T032553Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/54/Accenture-Jim-Wilson-724x543.png" alt=""
                style={{
                    position: 'absolute',
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 350,
                    
                }}/>
            </Col>
            <Col md="3">
                <p
                    style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 16,
                        padding: 20,
                    }}                
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto rem neque quis assumenda delectus consequatur, eos aliquam est necessitatibus quibusdam placeat explicabo, vitae hic modi doloremque odit ipsa expedita ducimus at. Molestias, quisquam ipsam odio facilis qui, inventore impedit nam architecto tempore eligendi aut, ad delectus repellat minus quo.</p>
            </Col>
           </Row>
            
            
            {/* <DemoFooter /> */}
        </>
    )
}

export default AboutUs;
