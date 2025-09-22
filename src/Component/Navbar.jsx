import { useEffect, useState } from "react"

const Navbar = () => {
    const [show, setShow] = useState (false);
    const [scroll, setScroll] = useState(false)
  const handleClick = () => {
    setShow(!show);
    console.log(show);
    
};
let menuActive = show ? "left-0" : "-left-full";


useEffect(() => {
  window.addEventListener("scroll", () => {
    
    if (window.scrollY > 5) {
     console.log("testing")
     setScroll(true)
     setShow(false)
    } else{
    setScroll(false);}
  })
});

let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return ( 
    <div className={`navbar fixed w-full transition-all ${scrollActive}`} >
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold ">Ngoding.</h1>
          </div>
            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full 
            md:translate-y-0 md:text-black md:p-0 md:-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 
            flex-col px-8 py-6 rounded shadow-lg shadow-slate-100 bg-sky-400 font-bold text-white transition-all`}>

              <li className="flex items-center gap-3">
                <i className="ri-home-4-line text-3xl md:hidden block"></i>
                <a href="#home" className="font-medium opacity-70">Beranda</a>
              </li> 
              <li className="flex items-center gap-3">
                 <i className="ri-information-line text-3xl md:hidden block"></i>
                <a href="#about"  className="font-medium opacity-70">Tentang kami</a>
              </li>
              <li className="flex items-center gap-3">
                 <i className="ri-settings-3-line text-3xl md:hidden block"></i>
                <a href="#services"  className="font-medium opacity-70">Layanan</a>
              </li>
              <li className="flex items-center gap-3">
                 <i className="ri-building-line text-3xl md:hidden block"></i>
                <a href="#proyek"  className="font-medium opacity-70">Proyek</a>
              </li>
            </ul>
            <div className="social flex items-center gap-2">
              <a href="#social" className="bg-sky-400 py-2 px-5 rounded-full text-white font-black hover:bg-sky-500 transition-all">
                Social Media</a>
                <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar