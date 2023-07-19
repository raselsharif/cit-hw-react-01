import React from 'react'

function Social() {
  return (
    <section id="social">
        <div class="headingAll">
            <div class="socialHeading">
                <div class="line"></div>
                <h3>Latest ınstagram shots</h3>
                <div class="line"></div>
            </div>
        </div>

        <div class="socialImageMain">
            <div class="socialImage">
                <img height="327" width="400" src="assests/images/instra01.jpg" alt="" />
            </div>
            <div class="socialImage">
                <img height="327" width="400" src="assests/images/instra02.jpg" alt="" />
            </div>
            <div class="socialImage">
                <img height="327" width="400" src="assests/images/instra03.jpg" alt="" />
            </div>
            <div class="socialImage">
                <img height="327" width="400" src="assests/images/instra04.jpg" alt="" />
            </div>
        </div>
        <div class="socialLink">
            <a href="#"><i class="fa-brands fa-instagram"></i>instagram page</a>
        </div>

    </section>
  )
}

export default Social