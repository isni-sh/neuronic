import SVG from 'react-inlinesvg'
export default function Footer() {
  return (
    <div className="container text-white">
      <div className="row pt-28 md:pt-44 pb-20 text-sm space-y-8 md:space-y-0">
        <div className="xs:col-6 sm:col-6 md:col-2">
          <SVG
            src="/svg/ic_logo_white.svg"
            className="mb-4"
            style={{ marginTop: '-40px' }}
            alt=""
          />
          <p>
            Route de Clox-Donroux 1, 1870,<br></br> Monthey, Switzerland
          </p>
          <p>contact@neuronic.ai</p>
          <p>(+41) 022 548 00 78</p>
        </div>
        <div className="xs:col-6 sm:col-6 md:col-2 ">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="xs:col-6 sm:col-6 md:col-2 ">
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </div>
        <div className="xs:col-6 sm:col-6 md:col-2 ">
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="xs:col-6 sm:col-6 md:col-2 ">
          <ul>
            <li>
              <a href="#">Follow us on social media</a>
            </li>
          </ul>
          <p className="font-xs">© 2020 Neuronic by InSuit Sàrl</p>
        </div>
        <div className="xs:col-6 sm:col-6 md:col-2 ">
          <ul className="flex items-start space-x-4">
            <li>
              <a href="#">
                <SVG src="/svg/f.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <SVG src="/svg/twitter.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
