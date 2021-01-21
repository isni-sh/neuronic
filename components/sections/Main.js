import SVG from 'react-inlinesvg'
import Footer from './Footer'
import { Fade } from 'react-awesome-reveal'

export default function Main() {
  return (
    <>
      {/* Section 2 */}
      <div className="grid gird-cols-1 md:grid-cols-2 mt-10 md:my-10">
        <div>
          <SVG src="/svg/section2.svg" className="w-full 3xl:w-4/6 ml-auto h-full" alt="" />
        </div>

        <div className="px-4 py-14 md:ml-10">
          <SVG src="/svg/greenImg.svg" alt="" />
          <Fade>
            <h2 className="text-3xl lg:w-4/6 pt-4 text-blue-900">
              The Easiest Way of Building Great Products
            </h2>
          </Fade>
          <article className="pt-2 pb-4 text-sm md:text-base lg:w-5/6 2xl:w-10/12 text-blue-800">
            Our platform is powered by a highly trained AI on programming languages and software
            development designed to help you build anything in just a short period of time instead
            of weeks or months. All you have to do is give Neuronic some instructions and let it
            instantly do the rest of the work, you always have full control of the code and can
            easily adapt anything according to your needs.
          </article>
          <p style={{ color: '#7456FF' }} className="text-sm md:text-base">
            <a href="#">Learn more about our system →</a>
          </p>
        </div>
      </div>

      <div
        className="w-full py-20"
        style={{
          background: 'linear-gradient(285deg, rgba(235,245,245,1) 0%, rgba(248,250,254,1) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Section 3 */}
        <div className="container " style={{ color: '#1C4269' }}>
          <div className="row items-center md:py-14 py-10">
            <div className="md:col-6 col-12 md:order-1 order-2">
              <p className="text-sm md:text-md text-blue-500">POWERFUL GAINS AWAIT FOR YOU</p>
              <h2 className="text-3xl lg:text-4xl py-4 md:w-96 text-blue-900">
                AUTOMATE YOUR REPETITIVE WORK
              </h2>
              <SVG src="/svg/line.svg" alt="" />
              <article className="text-sm md:text-base pt-5 pb-6 md:w-11/12 text-blue-800">
                Software development usually requires you to write pieces of code, keeping up to
                date with new versions of APIs&SDKs and other manual work. With Neuronic, we’re
                giving you a powerful and always-improving tool that helps you automate this painful
                part of building software so you focus on creating more value for your users
                instead.
              </article>
              <button
                className="w-40 h-9 nolt pak  rounded-sm shadow text-white text-xs md:text-sm bg-blue-500"
                style={{
                  boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                }}
              >
                LEARN MORE →
              </button>
            </div>
            <div className="md:col-6 col-12 md:order-2 order-1">
              <SVG src="/svg/image.svg" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>

        {/* Sectioin 4 */}
        <div className="container">
          <div className="row items-center md:py-14 py-10">
            <div className="md:col-6 col-12">
              <SVG src="/svg/image.svg" className="w-full h-full" alt="" />
            </div>
            <div className="md:col-6 col-12">
              <p className="text-sm md:text-md text-blue-500">MAKE THE MOST OF YOUR TIME</p>
              <h2 className="text-3xl lg:text-4xl py-2 md:w-96 text-blue-900">
                NO BUGS APPEARING ANYMORE
              </h2>
              <SVG src="/svg/line.svg" alt="" />
              <article className="text-sm md:text-base pt-5 pb-6 md:w-full text-blue-800">
                Despite the hard work it takes to build a software, it is exhausting to have bugs
                appearing all the time and requiring you to always deal with them after publishing a
                version. We believe that the only way to stop wasting our precious time on fixing
                flaws is by having a super intelligent machine that already knows the best practices
                and is capable of correctly applying those everywhere it’s necessary and we’ve built
                exactly that in Neuronic.
              </article>
              <button
                className="w-40 h-9 rounded-sm shadow text-white text-xs md:text-sm bg-blue-500"
                style={{
                  boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                }}
              >
                LEARN MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#101227' }}>
        {/* BLUE SECTIONS  */}
        {/* Section 5 */}
        <div className="container text-white">
          <div className="row py-12 text-center">
            <div className="col-12 lg:col-6">
              <div
                className="border rounded-sm flex justify-center items-center"
                style={{ height: '480px' }}
              >
                <p>VIDEO SIDE BY SIDE</p>
              </div>
              <p className="py-1">Manual coding</p>
            </div>
            <div className="col-12 lg:col-6">
              <div
                className="border rounded-sm flex justify-center items-center"
                style={{ height: '480px' }}
              >
                <p>VIDEO SIDE BY SIDE</p>
              </div>
              <SVG src="/svg/ic_logo_white.svg" alt="" className="mx-auto my-2" />
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <div className="container text-white">
          <div className="row py-12">
            <div className="col-12">
              <h2 className="text-3xl lg:text-5xl md:w-1/2">Designed for faster innovation</h2>
              <SVG src="/svg/lineBottom.svg" alt="" className="my-4 " />
              <article className="md:w-10/12 text-sm md:text-md text-blue-800">
                Software has been at the core of global innovation and many efforts are being made
                for making it easier to develop. Our approach is a combination of machine
                capabilities and human instructing as the best way to accelerate the development of
                great and innovative products around the world.
              </article>
            </div>
          </div>
        </div>
        {/* Section 7 */}
        {/* <div className="container text-white">
          <div className="row py-14 space-y-8 md:space-y-0">
            <div className="xs:col-6 sm:col-6 md:col-6 lg:col-3">
              <div>
                <SVG src="/svg/search.svg" alt="" />
                <h4 className="text-2xl py-3" style={{ color: '#4C25D9' }}>
                  CONTROL
                </h4>
              </div>
              <div className=" text-sm md:text-md text-blue-800">
                We’ve designed Neuronic for you to have full control over your code and project. You
                can always access, modify and delete anything you want anywhere in your projects
              </div>
            </div>
            <div className=" xs:col-6 sm:col-6 md:col-6 lg:col-3">
              <div>
                <SVG src="/svg/chip.svg" alt="" />
                <h4 className="text-2xl py-3" style={{ color: '#2ECE59' }}>
                  CAPABILITY
                </h4>
              </div>
              <div className=" text-sm md:text-md text-blue-800">
                We’ve designed Neuronic for you to have full control over your code and project. You
                can always access, modify and delete anything you want anywhere in your projects
              </div>
            </div>
            <div className="xs:col-6 sm:col-6 md:col-6 lg:col-3">
              <div>
                <SVG src="/svg/speed.svg" alt="" />
                <h4 className="text-2xl py-3" style={{ color: '#D4C938' }}>
                  SPEED
                </h4>
              </div>
              <div className=" text-sm md:text-md text-blue-800">
                We’ve designed Neuronic for you to have full control over your code and project. You
                can always access, modify and delete anything you want anywhere in your projects
              </div>
            </div>
            <div className="xs:col-6 sm:col-6 md:col-6 lg:col-3">
              <div>
                <SVG src="/svg/cloud-network.svg" alt="" />
                <h4 className="text-2xl py-3" style={{ color: '#D92542' }}>
                  ACCESSIBILITY
                </h4>
              </div>
              <div className=" text-sm md:text-md text-blue-800">
                We’ve designed Neuronic for you to have full control over your code and project. You
                can always access, modify and delete anything you want anywhere in your projects
              </div>
            </div>
          </div>
        </div> */}
        {/* Section 8 */}
        <div className="container text-white">
          <div
            className="row md:text-center items-center rounded-none md:rounded-sm py-14"
            style={{ border: '1px solid #154054' }}
          >
            <div className="col-12">
              <h2 className="text-3xl lg:text-4xl py-5">Ready to start building with Neuronic ?</h2>
              <article
                className="mx-auto md:w-1/2 text-sm md:text-md pb-2 text-blue-800"
                style={{ color: '#8A9AAB' }}
              >
                Create a free account below with a 14-day-trial and minimal information required, or
                get in touch with us at anytime if you need help.
              </article>
              <p className="text-xs" style={{ color: '#2AC27C' }}>
                ✓ No payment required ✓ 24/7 Support team avaliable ✓ No software installation
                needed
              </p>
              <div className="py-5 flex justify-center">
                <button
                  className="text-white shadow rounded-sm mr-1 text-xs md:text-sm "
                  style={{
                    backgroundColor: '#25ACD9',
                    width: '216px',
                    height: '41px',
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  CREATE FREE ACCOUNT
                </button>
                <button
                  className="shadow rounded-sm ml-1 text-xs md:text-sm"
                  style={{
                    backgroundColor: '#fff',
                    color: '#101227',
                    width: '216px',
                    height: '41px',
                    boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                  }}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
