import { Fade } from 'react-awesome-reveal'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
export default function Header() {
  return (
    <div
      className="w-full"
      style={{
        background: 'linear-gradient(285deg, rgba(235,245,245,1) 0%, rgba(248,250,254,1) 100%)',
      }}
    >
      <div className="container">
        <div className="row items-center py-20 pb-72 xs:screen md:py-48">
          <div className=" col-12 md:col-6 ">
            <Reveal keyframes={customAnimation}>
              <h1 className="text-4xl md:text-5xl text-blue-900" style={{ lineHeight: '3.2rem' }}>
                Coding done by Artificial Intelligence
              </h1>
            </Reveal>
            <Reveal keyframes={customAnimation} delay={100}>
              <p className="text-base py-4 lg:w-9/12 tracking-wide text-blue-800">
                Neuronic is an A.I development platform that codes by receiving just some
                instructions
                <br /> ke from a human.
              </p>
            </Reveal>
            <Reveal keyframes={customAnimation} delay={150}>
              <div className="flex">
                <button
                  className="md:w-48 w-36 h-10 rounded-sm  mr-1 text-white text-xs md:text-sm bg-blue-500"
                  style={{
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  JOIN FOR FREE
                </button>
                <button
                  className="md:w-48 w-36 h-10 rounded-sm  bg-white text-xs md:text-sm text-blue-900"
                  style={{
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  DISCOVER MORE
                </button>
              </div>
            </Reveal>
          </div>
          <Fade>
            <div className=" col-12 md:col-6">video</div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
