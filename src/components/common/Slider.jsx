import React from "react";
import HeroSlider, {Slider} from 'hero-slider';
// import img1 from "../../../public/assets/img/bien1.jpg"

const img1 = "../../../public/assets/img/room-1.jpg";
const img2 = "../../../public/assets/img/room-2.jpg";
const img3 = "../../../public/assets/img/room-3.jpg";
const Slider = () => {
    return (
        <div>
            <HeroSlider
            slidingAnimation="left-to-right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSl)}
            onChange ={nextSlide => console.log("onChange", nextSlide)}
            onAfter ={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgb(0,0,0,0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slidindDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButton: true,
                autoplayDuration: 5000,
                height: "100vh",
            }}
            >
                <Slider 
                    background={{
                        backgroundImage: img1,
                        backgroundAttachment: "fixed",
                    }}
                   

                />
                <Slider 
                    background={{
                        backgroundImage: img2,
                        backgroundAttachment: "fixed",
                    }}
                   

                />
                <Slider 
                    background={{
                        backgroundImage: img3,
                        backgroundAttachment: "fixed",
                    }}
                   

                />
            </HeroSlider>
        </div>
    )
}

export default Slider