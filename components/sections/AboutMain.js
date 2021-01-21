import SVG from 'react-inlinesvg'
import Footer from './Footer'

export default function AboutMain() {
  return (
    <>
      {/* Section 2 */}
      <div className="grid gird-cols-1 md:grid-cols-2 mt-10 md:my-10">
        <div className="px-4 py-14 md:ml-10">
          <SVG src="/svg/greenImg.svg" alt="" />
          <h2 className="text-3xl lg:w-4/6 pt-4 text-blue-900">
            The Easiest Way of Building Great Products
          </h2>
          <p className="pt-2 pb-4 text-sm md:text-base lg:w-5/6 2xl:w-10/12 text-blue-800">
            Our platform is powered by a highly trained AI on programming languages and software
            development designed to help you build anything in just a short period of time instead
            of weeks or months. All you have to do is give Neuronic some instructions and let it
            instantly do the rest of the work, you always have full control of the code and can
            easily adapt anything according to your needs.
          </p>
          <p style={{ color: '#7456FF' }} className="text-sm md:text-base">
            <a href="#">Learn more about our system →</a>
          </p>
        </div>
        <div>
          <SVG src="/svg/section2-about.svg" className="w-full 3xl:w-4/6 ml-auto h-full" alt="" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid gird-cols-1 md:grid-cols-2 mt-10 md:my-10">
        <div className="flex gap-0 lg:gap-10 md:ml-10 py-10 md:py-0">
          <SVG
            src="/svg/Rectangle.svg"
            className=" lg:border p-2 lg:shadow-md w-full 3xl:w-4/6 ml-auto h-full"
            alt=""
          />
          <SVG
            src="/svg/Rectangle.svg"
            className="mt-20 p-2 lg:shadow-md w-full 3xl:w-4/6 ml-auto h-full"
            alt=""
          />
        </div>
        <div className=" mt-20 ml-4 md:ml-16">
          <p className="text-sm md:text-md text-blue-500">POWERFUL GAINS AWAIT FOR YOU</p>
          <h2 className="text-3xl lg:text-4xl py-4 lg:w-96 text-blue-900">
            A complete set of tools designed to help you
          </h2>
          <SVG src="/svg/line.svg" alt="" />
          <p className="text-sm md:text-base pt-5 pb-6 md:w-11/12 text-blue-800">
            Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod tempor incididunt
            ut labore aliqua. Ut enim adi minim veniam, quis nostrud exercitation. Venerum
            ambitiomus vonter liberan fort nohan
          </p>
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

      {/* Section 4 */}
      <div className="container">
        <div className="row items-center md:py-40 py-20">
          <div className="col-12 md:col-6">
            <h2 className="text-3xl lg:text-4xl md:w-96 text-blue-900">
              More Description here in two lines
            </h2>
            <SVG src="/svg/line.svg" alt="" className="my-4" />

            <p className="text-sm md:text-base pt-5 pb-6 md:w-11/12 text-blue-800">
              Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed do eiusmod tempor
              incididunt ut labore aliqua. Ut enim adi minim veniam, quis nostrud exercitation.
              Venerum ambitiomus vonter liberan fort nohan
            </p>
          </div>
          <div className="col-12 md:col-6">
            <div className=" space-y-8">
              <div className="flex items-center gap-5">
                <SVG src="/svg/oval.svg" alt="" />
                <div>
                  <h3 className="text-blue-900 text-xl">UI ELEMENT</h3>
                  <p className="text-blue-800 text-xs">
                    Lorem ipsum description with a short two line comment about the intention
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <SVG src="/svg/oval.svg" alt="" />
                <div>
                  <h3 className="text-blue-900 text-xl">UI ELEMENT</h3>
                  <p className="text-blue-800 text-xs">
                    Lorem ipsum description with a short two line comment about the intention
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <SVG src="/svg/oval.svg" alt="" />
                <div>
                  <h3 className="text-blue-900 text-xl">UI ELEMENT</h3>
                  <p className="text-blue-800 text-xs">
                    Lorem ipsum description with a short two line comment about the intention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="row items-center py-10 md:py-20">
          <div className="col-12 md:col-6 py-5">
            <h2 className="text-3xl lg:text-4xl md:w-96 text-blue-900">Contact us</h2>
            <p className="text-sm md:text-base py-2 md:w-4/6 text-blue-800">
              Send us a mail below, we usually respond in just a few hours
            </p>
            <button
              className="w-40 h-9 rounded-sm shadow text-white text-xs md:text-sm bg-blue-500 flex items-center gap-2 pl-4"
              style={{
                boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
              }}
            >
              <SVG src="/svg/mail.svg" alt="" /> Send Email →
            </button>
          </div>
          <div className="col-12 md:col-6 py-5">
            <div className="flex items-center gap-5">
              <SVG src="/svg/call.svg" alt="" />
              <div>
                <p>(+41) 022 548 00 78</p>
                <p>(+41) 076 598 99 00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="row py-10">
          <div className="col-12 text-center">
            <h2 className="text-3xl lg:text-4xl text-blue-900">Stay in touch</h2>
          </div>
        </div>
        <div className="row text-center pb-20">
          <div className="col-6 lg:col-3">
            <div>
              <SVG src="/svg/tweet.svg" className="mx-auto p-4" alt="" />
              <p style={{ color: '#26A6D1' }}>@NeuronicApp</p>
            </div>
          </div>
          <div className="col-6 lg:col-3">
            <div>
              <SVG src="/svg/instagram.svg" className="mx-auto p-4" alt="" />
              <p style={{ color: '#FF0300' }}>@Neuronic.ai</p>
            </div>
          </div>
          <div className="col-6 lg:col-3">
            <div>
              <SVG src="/svg/medium.svg" className="mx-auto p-4" alt="" />
              <p style={{ color: '#10C767' }}>@Neuronic</p>
            </div>
          </div>
          <div className="col-6 lg:col-3">
            <div>
              <SVG src="/svg/youtube.svg" className="mx-auto p-4" alt="" />
              <p style={{ color: '#FF0000' }}>@Neuronic</p>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="row items-center pt-10 pb-20 md:py-20">
          <div className="col-12 lg:col-6">
            <form className="shadow-lg rounded-md">
              <label htmlFor="fullname"></label>
              <input
                className="lg:w-full w-1/3 p-4 outline-none "
                type="text"
                name="fullname"
                placeholder="Full Name"
              />
              <label htmlFor="email">
                <input
                  className="lg:w-full w-1/3 p-4 outline-none"
                  type="email"
                  name="fullname"
                  placeholder="Email Address"
                />
              </label>
              <button
                className="lg:w-full w-1/3 text-white py-2 rounded-b-md"
                style={{ backgroundColor: '#1A67BE' }}
              >
                Join NewSletter
              </button>
            </form>
          </div>
          <div className="col-12 lg:col-6 pt-5">
            <h1 className="text-3xl lg:text-4xl text-blue-900">Get the latest news and deals</h1>
            <p className="text-blue-800">You can always unsubscribe at any time.</p>
          </div>
        </div>

        {/* Section 8 */}
      </div>
      <div
        className="bg-blue-900 w-full"
        style={{ clipPath: 'polygon(0 9%, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <Footer />
      </div>
    </>
  )
}
