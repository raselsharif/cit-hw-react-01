import React from 'react'
import Div from '../components/Div'
import My_ul from '../components/My_ul'
import My_li from '../components/My-li'
import Anchor from '../components/Anchor'

function Nav() {
    return (
        <Div divid="nav">
            <Div divclass="container">
                <Div divclass="menuArea">
                    <Div divclass="logo">
                        <a href='#'>
                            <img src="assests/images/logo.png" alt="logo" />
                        </a>
                    </Div>
                    <Div divclass="menu">
                        <My_ul>
                            <My_li> <Anchor >Home</Anchor> </My_li>
                            <My_li> <Anchor link="#about">Home</Anchor> </My_li>
                            <My_li> <Anchor link="#portfolio">Home</Anchor> </My_li>
                            <My_li> <Anchor link="#service">Home</Anchor> </My_li>
                            <My_li> <Anchor link="#journal">Home</Anchor> </My_li>
                            <My_li> <Anchor link="#contact">Home</Anchor> </My_li>
                        </My_ul>
                    </Div>
                </Div>
            </Div>
        </Div>

    )
}

export default Nav