import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:top-10 md:left-44 h-screen" fill="lightblue" />
        <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="purple" />
        <Spotlight className="top-36 left-96 w-[50vw] h-screen" fill="purple" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="flex flex-col justify-center items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-widest text-xs text-center text-purple-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi I'am Wahaj, an Aspiring MERN STACK DEVELOPER"
          />
          <p className="text-center text-sm md:text-lg lg:text-2xl mb-4 md:tracking-wider ">
            A Software engineer specialized in the MERN stack with problem solving skills and a passion for clean, efficient code. I turn ideas into solutions through curiosity and collaboration.
          </p>
          <a href="#about">
            <MagicButton title="See my work" icon={<FaLocationArrow />} position="right" />

          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero