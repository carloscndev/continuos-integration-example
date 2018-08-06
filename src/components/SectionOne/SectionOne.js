//Import Modules
import React from 'react'

//Import Styles
import './SectionOne.css'

//Import Assets
import Paisaje from '../../assets/paisaje.jpeg'

const SectionOne = () => (
    <div className="section-one">
        <div className="background">
            <div className="img">
                <img src={Paisaje} alt="i-article" />
            </div>
            <div className="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu aliquam ligula. 
                In purus nibh, volutpat in est vitae, sagittis molestie massa. Pellentesque varius 
                nulla non ante luctus, quis egestas nisi aliquet. 
            </p>
            </div>
        </div>
    </div>
)

export default SectionOne