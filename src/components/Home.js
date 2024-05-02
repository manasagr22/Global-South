import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.png"

export default function Home(props) {
  const [pageNo, setPageNo] = useState(1);
    const navigate = useNavigate();
    // localStorage.clear();

    useEffect(() => {
        let ele1 = document.getElementById(pageNo)
        ele1.className = "slick-active";
    }, [pageNo]);

    function nextSlide() {
        let ele = document.getElementById(pageNo)
        ele.className = "";
        if (pageNo < 3) {
            let contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo + 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setPageNo(pageNo + 1)
        }
        else {
            var contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo + 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setTimeout(() => {
                contain.style.transition = "";
                contain.style.transform = `translate3d(-${window.innerWidth}px, 0px, 0px)`;
            }, 500)

            setPageNo(1)
        }
    }

    function prevSlide() {
        let ele = document.getElementById(pageNo)
        ele.className = "";
        if (pageNo > 1) {
            let contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo - 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setPageNo(pageNo - 1)
        }
        else {
            let contain = document.getElementById("contain");
            contain.style.transform = `translate3d(-${(pageNo - 1) * window.innerWidth}px, 0px, 0px)`;
            contain.style.transition = "transform 500ms ease 0s";
            setTimeout(() => {
                contain.style.transition = "";
                contain.style.transform = `translate3d(-${3*window.innerWidth}px, 0px, 0px)`;
            }, 500)

            setPageNo(3)
        }
    }

    function tryNow() {
        navigate("/app")
    }

  return (
    <div className="home relative" style={{width: window.innerWidth, height: window.innerHeight, overflow: "hidden"}}>
            <button className="prevButton" onClick={prevSlide}></button>
            <div className="absolute" id="contain" style={{ opacity: "1", transform: `translate3d(-${window.innerWidth}px, 0px, 0px)`, width: 5*window.innerWidth }}>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[740px] text-5xl font-bold"><span className="text-blue-600">Visualizing Voices: </span>Your Trusted Interpreter of Words and Images!</h1><p class="max-w-[740px] text-lg font-normal">Transforms spoken words into engaging visual representations for enhanced comprehension.</p></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img3} alt="home3" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="false">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[740px] text-5xl font-bold"><span className="text-blue-600">Empowering Communication: </span>Your Trusted Multimodal Companion!</h1><p class="max-w-[740px] text-lg font-normal">Seamlessly integrates speech recognition, translation, summarization, and visualization for effortless communication.</p><button class="max-w-[350px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }} onClick={tryNow}>Try Now!</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img1} alt="home1" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                                <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[740px] text-5xl font-bold"><span className="text-blue-600">Seamless Multilingual Interaction: </span>Your Reliable Language Companion!</h1><p class="max-w-[740px] text-lg font-normal">Breaks language barriers with reliable translation, summarization, and visualization tools.</p></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img2} alt="home2" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="true">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                            <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[740px] text-5xl font-bold"><span className="text-blue-600">Visualizing Voices: </span>Your Trusted Interpreter of Words and Images!</h1><p class="max-w-[740px] text-lg font-normal">Transforms spoken words into engaging visual representations for enhanced comprehension.</p></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img3} alt="home3" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="slick-slide" aria-hidden="false">
                    <div>
                        <div class="relative w-screen h-screen" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                            <span class="absolute top-0 bottom-0 right-0 left-0 z-[1]">
                            <div data-aos="fade-right" class="h-full grid justify-start items-center p-6 md:p-40 aos-init aos-animate"><div class="flex flex-col gap-6 text-white"><h1 class="max-w-[740px] text-5xl font-bold"><span className="text-blue-600">Empowering Communication: </span>Your Trusted Multimodal Companion!</h1><p class="max-w-[740px] text-lg font-normal">Seamlessly integrates speech recognition, translation, summarization, and visualization for effortless communication.</p><button class="max-w-[350px] bg-white text-black text-2xl font-semibold p-3 rounded-lg" style={{ width: "100%", margin: "auto" }} onClick={tryNow}>Try Now!</button></div></div>
                            </span>
                            <span className="spanImg">
                                <img src={img1} alt="home1" style={{ width: window.innerWidth, height: window.innerHeight, filter: "brightness(0.3)" }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="nextButton" onClick={nextSlide}></button>
            <ul className="slick-dots">
                <li className="slick-active" id="1"></li>
                <li className="" id="2"></li>
                <li className="" id="3"></li>
            </ul>
        </div>
  )
}
