import React from 'react'
import Div from '../components/Div'
import Myp from '../components/Myp'

function Service() {
  return (
    <Div divid="service">
    <Div divclass="container">
        <Div divclass="serviceHeading">
            <h2>Hello! I’m Jonathon Kubb, a freelance Photographer.</h2>
            <Myp ptext="Based in New York, I specialize in landscape, advertorial and conceptual photography. " />
        </Div>
        <Div divclass="headingAll">
            <h3>What services do I offer</h3>
        </Div>

        <Div divclass="imageMain">
            <Div divclass="imageArea">
                <Div divclass="image">
                    <img src="assests/images/service-01.jpg" alt="Service01" />
                </Div>
                <Div divclass="serviceTitle">
                    <h3>Landscape</h3>
            <Myp ptext="Curabitur blandit tempus porttitor. Duis mollis inceptos mollisest commodo luctus erat. " />
                </Div>
            </Div>
            <Div divclass="imageArea">
                <Div divclass="image">
                    <img src="assests/images/service-02.jpg" alt="Service01" />
                </Div>
                <Div divclass="serviceTitle">
                    <h3>Advertorial</h3>
            <Myp ptext="Maecenas faucibus mollis interdum. Morbi risus porta ac consectetur, vestibulum at eros." />

                </Div>
            </Div>
            <Div divclass="imageArea">
                <Div divclass="image">
                    <img src="assests/images/service-03.jpg" alt="Service01" />
                </Div>
                <Div divclass="serviceTitle">
                    <h3>Conceptual</h3>
            <Myp ptext="Donec elit non porta gravida eget metus. Etiam porta sem malesuada magna mollis euismod. " />

                </Div>
            </Div>
        </Div>
    </Div>
</Div>
  )
}

export default Service