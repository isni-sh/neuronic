import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { useState } from 'react'

export default function Navigation({ sticky }) {
  const [menu, setMenu] = useState(false)

  const MenuItem = ({ children, href }) => {
    return (
      <li className="w-full md:w-auto md:mr-6">
        <Link href={href}>
          <a
            href=""
            className="block py-4 lg:py-0 md:border-b-0 md:border-transparent hover:text-blue-500"
          >
            {children}
          </a>
        </Link>
      </li>
    )
  }
  return (
    <div className={`w-full sticky ${sticky ? 'navbar-sticky' : ''}`}>
      <div className="container">
        <div className="row items-center py-2">
          <div className="col-2">
            <a href="/">
              <SVG
                src="../svg/ic_logo_dark_white.svg"
                alt="logo image"
                style={{ width: '120px', height: '50px' }}
              />
            </a>
          </div>

          <div className="col-8 hidden lg:block">
            <ul className="flex justify-center gap-5 text-blue-900">
              <MenuItem href="/">How it works</MenuItem>
              <MenuItem href="/#about">Documentation</MenuItem>
              <MenuItem href="/about">About</MenuItem>
              <MenuItem href="/#about">Support</MenuItem>
            </ul>
          </div>
          <div className="col-2 text-right hidden lg:block">
            <button
              className="w-36 h-8 text-white rounded-sm mr-auto bg-blue-500"
              style={{
                boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
              }}
            >
              Sign In →
            </button>
          </div>

          <div className="col-10 lg:hidden flex justify-end">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/ic_side_menu.svg"
                className="fill-current lg:w-10 lg:h-10 w-8 h-8"
                alt="menu img"
                onClick={(e) => setMenu(!menu)}
              />
            </label>
          </div>
          <div className={`container lg:hidden ${menu ? ' flex' : ' hidden'}`}>
            <div>
              <ul className="text-blue-900">
                <MenuItem href="/">How it works</MenuItem>
                <MenuItem href="/#about">Documentation</MenuItem>
                <MenuItem href="/#about">About</MenuItem>
                <MenuItem href="/#about">Support</MenuItem>
              </ul>
              <button
                className="w-36 h-8 text-white rounded-sm bg-blue-500"
                style={{
                  boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
                }}
              >
                Sign In →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
