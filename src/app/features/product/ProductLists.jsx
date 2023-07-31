import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import axios from'axios'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/addToCart";
import productAPI from '../../../api/productAPI.js'
import { CurrencyBangladeshiIcon } from "@heroicons/react/24/outline";


// filter category
const filterCategory = [
  {
    name:"All",
    category:"all"
  },
{
  name:"Smartphones",
  category:"smartphones"
},
{
  name:"Laptops",
  category:"laptops"
},
{
  name:"Fragrances",
  category:"fragrances"
},
{
  name:"Skincare",
  category:"skincare"
},
{
  name:"Groceries",
  category:"groceries"
},
{
  name:"Home-Decoration",
  category:"home-decoration"
},
{
  name:"Furniture",
  category:"furniture"
},
{
  name:"Tops",
  category:"tops"
},
{name:"Women",
category:"womens-dresses"}

]



const ProductLists = () => {
  //  redux hook
    const dispatch = useDispatch()

    const addToCartMessage = () => toast("Item add to cart successfully!");

const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all")
  const [productFetchDetails, setProductFetchDetails] = useState([])

// useEffect(()=>{
//   // when backend -> http://localhost:5868
// //  axios("http://localhost:5868").then((responseData)=>{
// // setProductFetchDetails([...responseData.data.products])


// // setProductFetchDetails(productAPI.products)
// // AllProduct()

// // }).catch((err)=>{
// //   console.log(err)
// // })

// })


const AddToCartFunction=(currentCartItem)=>{
dispatch(add(currentCartItem))
addToCartMessage()

}

function AllProduct(){
  setProductFetchDetails(productAPI.products)
}

function onCategoryFilter(){
if(selectedCategoryFilter==='all'){
  AllProduct()

}
else{
 let filteredArray = productAPI.products.filter((item)=>{
  if(item.category===selectedCategoryFilter){
    return item
  }
 })

setProductFetchDetails(filteredArray)
}

}

useEffect(()=>{
 
  onCategoryFilter()
},[selectedCategoryFilter])

console.log(selectedCategoryFilter)


  return (
    <>
    
    <main className="mx-auto w-full px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                All Products
              </h1>
<div className="flex flex-wrap m-1 gap-2">


<select onMouseOut={(e)=>{setSelectedCategoryFilter(e.target.value)}}  onPointerEnter={(e)=>{selectedCategoryFilter(e.target.value)}}>
{/* <option  key="all" value="all" defaultValue="All" onSelect={AllProduct} >All</option> */}
{
 filterCategory.map((item)=>{
  return(
    <option  key={item.category} value={item.category} >{item.name}</option>
  )
 })
}

</select>



{/* <h1 key="allcategory"  onClick={AllProduct}>All</h1>

{
 filterCategory.map((item)=>{
  return(
    <h1  key={item.category} onClick={(e)=>{onCategoryFilter(item.category)}}>{item.name}</h1>
  )
 })
} */}

</div>

            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6 flex">
  

              <div className="">
                         {/* Product grid */}
                <div className="flex flex-wrap">
                  {/* product list */}
                  <div>
                    <div className="bg-violet-100 w-[95vw] ">
                      <div className="mx-auto w-full pl-1 py-1 ">
                        <h2 className="text-3xl mb-2 font-bold tracking-tight text-gray-900">
                          Latest
                        </h2>

                        <div className="mt-4 flex flex-row flex-wrap gap-8 mb-4 justify-center">
                    
{  productFetchDetails.map((product)=>{


  const {id,title,description,images,price} = product



  return(
    <section className="w-72 h-fit shadow-2xl rounded-xl bg-violet-500 m-2" key={id}>
<div className="img">
    <img src={images[0]} alt="project-image" className=" polygon rounded-t-xl bg-cover object-fill h-64 w-full" />
</div>
<div className="text bg-violet-500 rounded-b-xl px-2 py-2  ">
    <h1 className=" text-center text-blue-100  text-2xl font-nunito font-bold">{title}</h1>
    <p className="paragraph text-white font-nunito font-semibold mt-2 mb-2">{description}</p>
    <div className="links flex gap-5 p-2">
      
  <a href="" className="px-2 py-1 flex gap-2 h-fit bg-white rounded-sm font-nunito font-bold text-violet-500"> ${price}</a>
<button className="bg-blue-500 text-white px-2 py-1 " onClick={()=>{AddToCartFunction(product) }}   >Add to Cart</button>
    </div>
</div>

    </section>
  )
})


}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* product grid end */}
              </div>
            </section>
         
{/* paginataion */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>


             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                 {/* <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">97</span> results
                  </p>
                </div>  */}
                <div> 


                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      2
                    </a>
        
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </main>
          {/* only for toast working fine */}
          <ToastContainer />
    </>
  )
}
export default ProductLists


