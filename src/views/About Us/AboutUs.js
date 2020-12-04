import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import "./style.css"
import Card from "../card"
import Card2 from "../card2"

function AboutUs() {
    return (
        <div>
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
        </div>
    )
}

export default AboutUs;
