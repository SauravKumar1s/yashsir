import React from 'react'

const Footer = () => {
  return (
    <div className="background ">

<footer className="p-4  sm:p-6 dark:bg-gray-900">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <h1 className="text-4xl text-white">Javvry Logo</h1>
        </div>
        <div>
        <h1 className="text-4xl text-white">Lorem ipsum dolor sit <br></br> amet consectetur.</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Company</h2>
                <ul className="text-white ">
                    <li className="mb-4">
                        <a href="" className="hover:underline">lorem</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">lorem</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">lorem</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">lorem</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">lorem</a>
                    </li>
                    <li>
                        <a href="" className="hover:underline">lorem2</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Connect at </h2>
                <ul className="text-white dark:text-gray-400">
                    <li className="mb-4 flex flex-col ">
                        <div className="flex text-center items-center">
                    <svg className="w-5 h-5 space-x-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                        <a href="" className="hover:underline space-x-2 ml-2">facebook</a></div>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline ">facebook</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline ">facebook</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline ">facebook</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline ">facebook</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline ">facebook</a>
                    </li>
               
                </ul>
            </div>
            <div>
                <h2 className="mb-2 text-sm font-semibold text-white uppercase dark:text-white">Subscribe to Newslatter</h2>
                <div>
                      <label
                        for="email"
                        className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                   
                      />
                    </div>
                    <h2 className="text-white text-center mt-4">Contact @javry.com </h2>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    
</footer>

    </div>
  )
}

export default Footer