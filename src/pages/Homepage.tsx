import { FaStar } from 'react-icons/fa'

// assets
import Hero from '@/assets/hero.webp'
import Briefcase from '@/assets/briefcase.svg'
import Speak from '@/assets/speak.svg'
import Idea from '@/assets/idea.svg'
import Codecov from '@/assets/codecov.webp'
import UserTesting from '@/assets/usertesting.webp'
import Magicleap from '@/assets/magicleap.webp'
import Duolingo from '@/assets/duolingo.webp'
import Program1 from '@/assets/program1.png'
import Logo from '@/assets/logo.webp'
import BlogCover from '@/assets/blog-cover.png'
import BlogCover2 from '@/assets/blog-cover2.png'

const Homepage = () => {
  return (
    <>
      <section className="max-w-screen xl:w-[1200px] mx-auto flex flex-wrap lg:flex-nowrap px-8 md:p-10 xl:p-0 mb-20">
        <div className="max-w-screen xl:w-[573px] mt-[100px] order-2 lg:order-1">
          <div className="mb-9">
            <h1 className="capitalize text-[64px] leading-[82px] font-bold mb-5">
              up your <span className="text-primary-600">skills</span> to{' '}
              <span className="text-primary-600">advance</span> your{' '}
              <span className="text-primary-600">career</span> path
            </h1>
            <p>
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
          </div>
          <div className="space-x-7 mb-[50px]">
            <button className="bg-primary-600 text-white py-4 px-7 rounded-lg">
              Get Started
            </button>
            <button className="text-primary-600 bg-primary-100 py-4 px-7 rounded-lg">
              Get free trial
            </button>
          </div>
          <div className="flex gap-x-[34px] items-center">
            <div className="flex gap-x-2.5 items-center">
              <img src={Speak} alt="speak" />
              Public Speaking
            </div>
            <div className="flex gap-x-2.5 items-center">
              <img src={Briefcase} alt="briefcase" />
              Career-Oriented
            </div>
            <div className="flex gap-x-2.5 items-center">
              <img src={Idea} alt="idea" />
              Creative Thinking
            </div>
          </div>
        </div>
        <figure className="max-w-screen lg:w-[623px] mt-[41px] order-1 lg:order-2">
          <img src={Hero} alt="hero" />
        </figure>
      </section>
      <section className="max-w-screen xl:w-[1200px] h-full mx-auto flex flex-wrap xl:flex-nowrap items-center mb-20 px-8 md:p-10 xl:p-0">
        <div className="max-w-screen h-full md:w-fit mx-auto xl:mr-[55px] mb-4 lg:mb-0">
          <p className="text-3xl">
            <span className="text-primary-600 font-bold">250+</span>
            Collaboration
          </p>
        </div>
        <div className="w-full lg:flex justify-between items-center px-4 h-full gap-4">
          <img
            src={Duolingo}
            alt="logo magic leap"
            className="h-9 object-cover mx-auto my-4"
          />
          <img
            src={Codecov}
            alt="logo codecov"
            className="h-9 object-cover mx-auto my-4"
          />
          <img
            src={UserTesting}
            alt="logo user testing"
            className="h-9 object-cover mx-auto my-4"
          />
          <img
            src={Magicleap}
            alt="logo magic leap"
            className="h-9 object-cover mx-auto my-4"
          />
        </div>
      </section>
      <section className="space-y-10 mb-20 px-8 md:p-10 xl:p-0">
        <div className="max-w-screen lg:w-[768px] mx-auto">
          <p className="text-center text-primary-600 capitalize font-semibold">
            our services
          </p>
          <p className="text-center text-4xl text-gray-900">
            Fostering a playful & engaging learning environment
          </p>
        </div>
        <div className="max-w-screen xl:w-[1120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          <div className="bg-primary-600 text-white px-10 py-[30px] rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-x-5 mb-[30px]">
                <figure className="bg-primary-100 text-primary-600 rounded-lg p-3 h-12 w-12">
                  <img src="" alt="" />
                </figure>
                <h6 className="font-bold text-xl">User Experience</h6>
              </div>
              <p className="mb-[22px]">
                Lessons on design that cover the most recent developments.
              </p>
            </div>
            <div>
              <button className="font-medium">Learn More &gt;</button>
            </div>
          </div>
          <div className="bg-white text-black shadow px-10 py-[30px] rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-x-5 mb-[30px]">
                <figure className="bg-primary-100 text-primary-600 rounded-lg p-3 h-12 w-12">
                  <img src="" alt="" />
                </figure>
                <h6 className="font-bold text-xl">Web Development</h6>
              </div>
              <p className="mb-[22px] text-gray-400">
                Classes in development that cover the most recent advancements
                in web.
              </p>
            </div>
            <div>
              <button className="font-medium text-primary-600">
                Learn More &gt;
              </button>
            </div>
          </div>
          <div className="bg-white text-black shadow px-10 py-[30px] rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-x-5 mb-[30px]">
                <figure className="bg-primary-100 text-primary-600 rounded-lg p-3 h-12 w-12">
                  <img src="" alt="" />
                </figure>
                <h6 className="font-bold text-xl">Marketing</h6>
              </div>
              <p className="mb-[22px] text-gray-400">
                Marketing courses that cover the most recent marketing trends
              </p>
            </div>
            <div>
              <button className="font-medium text-primary-600">
                Learn More &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto flex gap-x-3 items-center">
          <div className="w-12 h-3 bg-primary-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </section>
      <section className="xl:w-[1200px] mx-auto space-y-5 mb-20 px-8 md:p-10 xl:p-0">
        <div className=" mb-10">
          <div className="font-semibold text-primary-600 mb-3">
            Explore Programs
          </div>
          <h6 className="font-semibold text-4xl mb-5">
            Our Most Popular Class
          </h6>
          <p className="text-gray-500">
            Let's join our famous class, the knowledge provided will definitely
            be useful for you.
          </p>
        </div>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from(Array(3), () => (
            <div className="shadow space-y-8 px-6 pt-6 pb-8">
              <img
                className="w-full h-[240px] object-cover"
                src={Program1}
                alt=""
              />
              <div>
                <div className="space-y-3 mb-8">
                  <span className="text-primary-700 font-semibold">Design</span>
                  <h6 className="font-semibold text-2xl">
                    Figma UI UX Design..
                  </h6>
                  <p className="text-gray-500">
                    Use Figma to get a job in UI Design, User Interface, User
                    Experience design.
                  </p>
                  <div className="flex items-center gap-x-1">
                    <span className="text-primary-600 font-medium">4.3</span>
                    <div className="flex gap-x-1 mr-2.5">
                      {Array.from(Array(5), () => (
                        <FaStar fill="#FF9B26" />
                      ))}
                    </div>
                    <p className="text-gray-400">(16,325)</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex gap-x-3 items-center">
                    <figure className="w-10 h-10 rounded-full bg-gray-100">
                      <img src="#" alt="" />
                    </figure>
                    <div>
                      <div>Jane Cooper</div>
                      <div className="text-gray-400">2001 Enrolled</div>
                    </div>
                  </div>
                  <div className="text-primary-600 font-bold text-2xl">
                    $17.84
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-fit mx-auto flex gap-x-3 items-center">
          <div className="w-12 h-3 bg-primary-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-fit mx-auto">
          <button className="w-fit  py-2.5 px-4 border rounded">
            Explore All Programs
          </button>
        </div>
      </section>
      <section className="xl:w-[1200px] mx-auto mb-20 px-8 md:p-10 xl:p-0">
        <div className="text-center space-y-5 mb-10">
          <div className="text-primary-700 font-semibold">Tutors</div>
          <h2 className="font-semibold text-4xl">Meet the Heroes</h2>
          <p className="text-xl text-gray-500">
            On Ed-Circle, instructors from all over the world instruct millions
            of students. We offer the knowledge and abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
          {Array.from(Array(4), () => (
            <div className="bg-gray-50 text-center p-6">
              <figure className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-5">
                <img src="#" alt="" />
              </figure>
              <div>
                <h6 className="font-medium text-">Theresa Webb</h6>
                <p className="text-primary-700">
                  Application Support Analyst Lead
                </p>
                <p className="text-gray-500">
                  Former co-founder of Opendoor. Early staff at Spotify and
                  Clearbit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="xl:w-[1200px] mx-auto space-y-8 mb-20 px-8 md:p-10 xl:p-0">
        <div className="flex justify-center items-center gap-x-2.5">
          <img className="w-6 object-cover" src={Logo} alt="" />
          <div className="font-extrabold text-xl">Ed-Circle.</div>
        </div>
        <h1 className="text-5xl font-medium text-center">
          Courses was fantastic! It is Master platform for those looking to
          start a new career, or need a refresher.
        </h1>
        <div>
          <figure className="w-16 h-16 mx-auto rounded-full bg-gray-200 mb-4">
            <img src="#" alt="" />
          </figure>
          <div className="text-center mb-28">
            <div className="mb-1 font-medium text-lg">Jacob Jones</div>
            <div className="text-gray-500">Student, National University</div>
          </div>
          <div className="w-fit mx-auto flex gap-x-3 items-center">
            <div className="w-12 h-3 bg-primary-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="xl:w-[1200px] mx-auto mb-20 px-8 md:p-10 xl:p-0">
        <h2 className="font-semibold text-2xl mb-8">Our recent blogs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {Array.from(Array(2), () => (
              <div className="grid grid-cols-2 md:grid-cols-2 gap-x-6">
                <figure>
                  <img src={BlogCover} alt="" />
                </figure>
                <div>
                  <div className="text-primary-700 mb-3">November 16, 2014</div>
                  <h3 className="font-semibold text-lg mb-2">
                    Three Pillars of User Delight
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Delight can be experienced viscerally, behaviourally, and
                    reflectively. A great design is ...
                  </p>
                  <div className="space-x-4">
                    <span className="text-[#C11574] bg-[#FDF2FA] py-0.5 px-2.5 rounded-full">
                      Research
                    </span>
                    <span className="text-[#027A48] bg-[#ECFDF3] py-0.5 px-2.5 rounded-full">
                      UI UX
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img className="mb-4" src={BlogCover2} alt="" />
            <div>
              <div className="text-primary-700 mb-3">November 16, 2014</div>
              <h3 className="font-semibold text-lg mb-2">
                Three Pillars of User Delight
              </h3>
              <p className="text-gray-500 mb-6">
                Delight can be experienced viscerally, behaviourally, and
                reflectively. A great design is ...
              </p>
              <div className="space-x-4">
                <span className="text-[#C11574] bg-[#FDF2FA] py-0.5 px-2.5 rounded-full">
                  Research
                </span>
                <span className="text-[#027A48] bg-[#ECFDF3] py-0.5 px-2.5 rounded-full">
                  UI UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage
