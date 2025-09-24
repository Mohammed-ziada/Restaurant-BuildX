import { NavLink } from "react-router-dom"

const Navbar = ()=>{
    return <>
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap bg-[#C9D6A0] text-sm py-3 ">
      <nav className=" w-[90%] mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div className="flex items-center justify-between">
      <a className="flex-none text-xl font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
        Brand
      </a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </div>
    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <NavLink 
            to="/"  
            className={({ isActive }) =>
                `font-medium focus:outline-hidden rounded-tl-2xl rounded-br-2xl p-2 transition-colors duration-500 ${isActive ? "text-white bg-linear-to-r from-[#485627] to-[#9CA975] " : "text-[#233000]"}`
            }
            aria-current="page"
            >
            Home
        </NavLink>
        <NavLink 
            to="/menu"  
            className={({ isActive }) =>
                `font-medium focus:outline-hidden rounded-tl-2xl rounded-br-2xl p-2  transition-all duration-500 ${isActive ? "text-white bg-linear-to-r from-[#485627] to-[#9CA975]" : "text-[#233000]"}`
            }
           
            >
            Menu
        </NavLink>
        <NavLink 
            to="/about-us"  
            className={({ isActive }) =>
                `font-medium focus:outline-hidden rounded-tl-2xl rounded-br-2xl p-2 transition-colors duration-500 ${isActive ? "text-white bg-linear-to-r from-[#485627] to-[#9CA975]" : "text-[#233000]"}`
            }
           
            >
            About Us
        </NavLink>
        <NavLink 
            to="/reservation"  
            className={({ isActive }) =>
                `font-medium focus:outline-hidden rounded-tl-2xl rounded-br-2xl p-2 transition-colors duration-500 ${isActive ? "text-white bg-linear-to-r from-[#485627] to-[#9CA975]" : "text-[#233000]"}`
            }
           
            >
            Reservation
        </NavLink>


      </div>
    </div>
  </nav>
</header>
    </>
}

export default Navbar