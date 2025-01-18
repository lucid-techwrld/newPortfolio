import {
  useEffect,
  useState
} from 'react';
import {
  IoMenu,
  IoClose
} from "react-icons/io5";
//import '../styles/animation.css'


function Header() {
  const [menu,
    setMenu] = useState('');
  const [menuOpen,
    setMenuOpen] = useState(false);
  useEffect(() => {
    setMenu(document.getElementById("menu"));
  }, [])

  const handleClick = () => {
    if (menu) {
      menu.textContent = menu.textContent === 'Menu' ? 'Close': 'Menu'
    }
    setMenuOpen(!menuOpen)
  }
  const closeNav = () => {
    menu.textContent = 'Menu'
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-full sm:w-[600px] lg:w-[650px] h-auto py-3 px-3 flex justify-between items-center fixed mt-5 space-x-2 z-index">
        <div className="w-12 h-12 bg-black flex justify-center items-center text-white rounded-full">
          <span className="font-myFont font-extrabold text-2xl">DA</span>
        </div>
        <span className="font-myFont font-bold text-base text-center text-2xl">DAVIS AYOMIDE</span>
        <div className="flex w-28 h-12 rounded-full bg-black text-white justify-between items-center">
          <h2 id="menu" className="ml-2 font-josefinsans font-extrabold text-lg">
            Menu
          </h2>
          <div className="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center" onClick={handleClick}>
            {menu.textContent === "Menu" ? <IoMenu size={30} />: <IoClose size={30} />}
          </div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 transition-all duration-500 ease-in-out z-50 ${menuOpen ? 'scale-100 opacity-100': 'scale-0 opacity-0'} `}style={ { transformOrigin: 'center' }}>
        <nav className="w-full h-full bg-red-500 flex justify-center items-center font-myFont text-3xl text-white">
          <ul className="gap-y-6">
            <li><a href="#home" onClick={closeNav}>Home</a></li>
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#work" onClick={closeNav}>My Work</a></li>
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>
        </nav>
      </div>

    </>
  )}

export default Header