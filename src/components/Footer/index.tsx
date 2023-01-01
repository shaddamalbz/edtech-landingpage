import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDribbble,
} from 'react-icons/fa'

// assets
import Logo from '@/assets/logo.webp'

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-8 md:p-10 xl:pd-0">
      <section className="max-w-screen xl:w-[1200px] mx-auto pt-16 pb-12 flex gap-16 flex-wrap">
        <div className="w-80">
          <div className="flex items-center gap-x-2.5 mb-8">
            <img
              className="h-[25px] object-cover"
              src={Logo}
              alt="2 circle overlapping"
            />
            <h1 className="font-extrabold text-xl text-white">Ed-Circle.</h1>
          </div>
          <p className="text-gray-200">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-16">
          <div className="w-[184px]">
            <h6 className="text-gray-400 mb-4">Product</h6>
            <ul className="list-none text-gray-200 space-y-3">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[184px]">
            <h6 className="text-gray-400 mb-4">Company</h6>
            <ul className="list-none text-gray-200 space-y-3">
              <li>About Us</li>
              <li>Carrers</li>
              <li>
                Press{' '}
                <span className="bg-gray-100 text-gray-900 px-2 py-0.5 rounded-2xl">
                  New
                </span>
              </li>
              <li>News</li>
            </ul>
          </div>
          <div className="w-[184px]">
            <h6 className="text-gray-400 mb-4">Social</h6>
            <ul className="list-none text-gray-200 space-y-3">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[184px]">
            <h6 className="text-gray-400 mb-4">Legal</h6>
            <ul className="list-none text-gray-200 space-y-3">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 flex flex-wrap justify-between items-center max-w-screen xl:w-[1200px] mx-auto gap-4">
        <p className="grow text-gray-300 text-base">
          © 2022 Ed-Circle. All rights reserved.
        </p>
        <div className="flex gap-x-6 items-center text-gray-400 text-2xl">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaGithub />
          <FaDribbble />
        </div>
      </section>
    </footer>
  )
}

export default Footer
