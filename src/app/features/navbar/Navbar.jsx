import {useState} from 'react'
import {LuMenu} from 'react-icons/lu'
import {VscChromeClose} from 'react-icons/vsc'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

import { BiSearch } from "react-icons/bi";
import {  useSelector } from 'react-redux'




// SearchBox Content
const SearchBox = () => {
  const [inputText, setInputText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);

    emptyTheInputBox();
  };

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter" || e.which === 14) {

      emptyTheInputBox();
    }
  };

  const emptyTheInputBox = () => {
    setInputText("");
  };

  return (
    <div className="flex justify-center flex-wrap  items-center mt-5 pt-5 xsm:gap-2">
      <div className="inputBoxContainer px-2 sm:w-[80vw] ml-1 text-2xl sm:text-xl ">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={onKeyUpHandler}
          autoFocus={true}
          name="search"
          className="bg-primary-200 zsm:ml-1 px-4 text-primary-900 placeholder-primary-600 h-full  py-1 outline-none"
          placeholder="Search your product..."
        />
      </div>
      <div className="  w-max  text-2xl  ">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-primary-500 h-full text-violet-50  bg-violet-400 py-1.5 mt-1 px-2 sm:rounded-full "
        >
          {<BiSearch className="animate-bounce" />}
        </button>
      </div>
    </div>
  );
};




const Navbar = () => {

const userDetails = useSelector((state)=>state.user)



     const [isMenuOpen, setIsMenuOpenOpen] = useState(false)
const [searchOpen, setSearchOpen] = useState(false)

const cartLength = useSelector((state)=>state.cart.length)


const handleSearchBox = ()=>{
  setSearchOpen((prev)=>{
    return prev===true?false:true
  })
}

  return (

    <>
    

<nav className=" text-black flex justify-between px-2 py-4 bg-white">
<div className="logo flex gap-2 ">


<motion.div animate={{rotate:360}}>

<img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="logo"  className="w-10 animate-waving-hand" />

</motion.div>
<h1 className="text-black text-2xl font-nunito  ">BoughtBazar</h1>


<h1 className='text-black text-sm font-nunito mt-2 ml-2 ' >Welcome {userDetails.name}</h1>
</div>




<ul className="flex  text-2xl pr-5 flex-row gap-4 pt-2  sm:hidden font-nunito  text-black">
<li><Link to="/"><AiOutlineHome/></Link></li>

<li><Link to="/" onClick={handleSearchBox}><BsSearch/></Link></li>


  <li><Link to="/cart" className="flex gap-0 "><AiOutlineShoppingCart/>  <h4 className={`text-sm bg-red-500 text-white rounded-full h-max mb-2 px-1.5 `}>{cartLength}</h4> </Link></li>
  <li><Link to="/profile"><CgProfile/></Link></li>
    


</ul>



    </nav>



    <div  onClick={()=>setIsMenuOpenOpen((prev)=>{

  return prev===true ?false :true;
})}> { isMenuOpen ? <VscChromeClose className="mt-5 mr-5 text-black text-2xl absolute top-0 right-1 invisible sm:visible" /> :<LuMenu className="mt-5 mr-5   text-3xl absolute top-0 right-1 invisible text-black sm:visible"/>}</div>



{
  isMenuOpen  &&
  <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
  
  <ul className={` bg-white text-2xl text-black font-mono  justify-center px-4 flex flex-col gap-4 pt-1 pb-4 pr-2 ease-linear duration-1000`}>
  
<li><Link to="/"><AiOutlineHome/></Link></li>
  <li><Link to="/" onClick={handleSearchBox}><BsSearch/></Link></li>



<li><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
<li><Link to="/profile"><CgProfile/></Link></li>

  


</ul>

</motion.div>






}


<div className='mt-4'>

{
  searchOpen && <SearchBox/>
}
  </div>

    </>
  )
}
export default Navbar