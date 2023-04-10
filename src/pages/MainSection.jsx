import react from "react";
import image from "../components/assets/bg.jpg"
import briefcase from "../components/assets/briefcase.png"
import pdc from "../components/assets/pdc.png"
import degree from "../components/assets/degree.png"
import "../Styles/Main.css";
import Slide from "../components/Slide";

function MainSection() {
    return (
        <>
            <div className="topArea">
                <div className="topArea-content">
                    <h1>Clowak is the upcoming innovation in dentistry</h1>
                </div>
                <div className="hero">
                    <img src={image} />
                </div>

            </div>

            <div class="mainarea">
                <div class="about-us">
                    <h1>Portable Digital Clinic 1.0</h1>
                    <div class="fog">
                        <p class="fog-content">Clowak Innovations introduces Portable Dental Clinic (PDC), is portable dentistry equipment ideal for use for domiciliary, military, humanitarian and normally inaccessible environments. The PDC range allows you to have a fully working operative dental surgery in just 20 minutes! PDC has been specifically designed to suit the needs of a dentist on the move and due to their durable and portable nature, prove to be a valuable asset. The PDC can be opened, put together and ready to use with your patient in a matter of minutes. These high quality products cater for all dental needs.</p>
                        <img src={pdc} />
                    </div>
                </div>
                <div class="our-vision">
                    <h1>Push Forward- 66' Tilted Handle</h1>
                    <div class="fog-vision">
                        <img src={degree} alt="" />
                        <p class="fog-content">PDC case was designed to always be pushed forward, virtually eliminating all the effort required when using traditional luggage. When we lug or roll other bags, we use muscle groups we don't activate regularly. This can create major pain and discomfort. Pushing forward concentrates the entire activity on the main muscle groups we already use on a daily basis. As a result of this design, the PDC case is the healthiest Portable Dentistry Case ever created. All travel-related pain - in the wrists, arms, shoulders, neck, elbow, and back - is eliminated. It makes travel truly effortless.</p>
                    </div>
                </div>
            </div>
            <Slide />
        </>
    )
}

export default MainSection;