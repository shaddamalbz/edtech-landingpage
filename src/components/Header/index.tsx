import { FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa'

// assets
import Logo from '@/assets/logo.webp'

const Header = () => {
  return (
    <header className="h-[100px] max-w-screen xl:w-[1200px] mx-auto px-8 md:p-10 xl:px:0 py-7 flex justify-between items-center">
      <div className="flex justify-between items-center gap-x-[30px] max-h-11">
        <div className="flex items-center gap-x-2.5">
          <img
            className="h-[25px] object-cover"
            src={Logo}
            alt="2 circle overlapping"
          />
          <h1 className="font-extrabold text-xl">Ed-Circle.</h1>
        </div>
        <div className="relative shadow border border-gray-300 rounded-lg px-3.5 w-[367px] max-h-11 hidden xl:flex">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 ml-3.5">
            <FaSearch />
          </div>
          <input
            className="grow focus:outline-none pl-5"
            type="text"
            placeholder="Want to learn?"
          />

          <button className="text-primary-600 bg-primary-50 py-2 px-4 font-semibold my-1 flex items-center gap-x-2">
            Explore <FaChevronDown />
          </button>
        </div>
        <ul className="hidden lg:flex gap-x-[25px] list-none font-medium text-base leading-6 text-gray-900">
          <li>Program</li>
          <li>Enterprise</li>
          <li>Universities</li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-x-5 items-center">
        <p className="font-medium text-base leading-6 text-gray-900">Sign in</p>
        <button className="px-4 py-2.5 bg-primary-600 rounded-lg text-white">
          Create free account
        </button>
      </div>
      <div className="block lg:hidden">
        <FaTimes />
      </div>
    </header>
  )
}

export default Header
