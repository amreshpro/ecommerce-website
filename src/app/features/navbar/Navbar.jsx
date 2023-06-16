import {useState} from 'react'
import {LuMenu} from 'react-icons/lu'
import {VscChromeClose} from 'react-icons/vsc'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'





const Navbar = () => {

     const [isMenuOpen, setIsMenuOpenOpen] = useState(false)



  return (

    <>
    

<nav className=" text-black flex justify-between px-2 py-4 bg-white">
<div className="logo flex gap-2 ">


<motion.div animate={{rotate:360}}>

<img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="logo"  className="w-10 animate-waving-hand" />

</motion.div>
<h1 className="text-black text-2xl font-nunito  ">BoughtBazar</h1>
</div>




<ul className="flex  text-2xl pr-5 flex-row gap-4 pt-2  sm:hidden font-nunito  text-black">

<li><Link to="/"><BsSearch/></Link></li>


  <li><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
  <li><Link to="/contact"><CgProfile/></Link></li>
    


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
  

  <li><Link to="/"><BsSearch /></Link></li>


<li><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
<li><Link to="/contact"><CgProfile/></Link></li>

  


</ul>

</motion.div>

}
    </>
  )
}
export default Navbar