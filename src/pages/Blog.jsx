import React from "react";

const Blog = () => {
  
  return (
    <>
      <div className="bg-black h-full pb-10 items-center flex flex-col justify-center ">
        <div className="bg-black">
          <h1 className="text-3xl font-bold text-white text-center pt-6 ">
            {" "}
            Blog{" "}
          </h1>
        </div>
        <div className=" bg-black xl:flex xl:flex-row md:gap-14 flex flex-col lg:flex m-10 md:flex md:col  lg:row sm:flex background ">
          <div className="gradiantClr max-w-xl rounded-lg shadow-md lg:flex md:flex ">
            <img
              className="rounded-lg object-cover w-full md:w-1/2 lg:w-1/3"
              src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
              alt="image"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 sm:text-xl text-sm  font-semibold tracking-tight text-white">
                Nft Dominose
              </h4>
              <p className="mb-2 sm:text-sm text-xs leading-normal text-justify text-gray-400">
                Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
                Praesen tium, quibusdam facere quo laborum maiores sequi nam
                tenetur laud.
              </p>
              <button
                className="
        px-4
        py-2
        text-sm
        shadow
        bg-sky-100
     
        text-black
        hover:bg-sky-600 hover:text-sky-100"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="gradiantClr max-w-xl rounded-lg shadow-md lg:flex md:flex ">
            <img
              className="rounded-lg object-cover w-full md:w-1/2 lg:w-1/3"
              src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
              alt="image"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 sm:text-xl text-sm font-semibold tracking-tight text-white">
                Nft Dominose
              </h4>
              <p className="mb-2 sm:text-sm text-xs leading-normal text-justify text-gray-400">
                Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
                Praesen tium, quibusdam facere quo laborum maiores sequi nam
                tenetur laud.
              </p>
              <button
                className="
        px-4
        py-2
        text-sm
        shadow
        bg-sky-100
     
        text-black
        hover:bg-sky-600 hover:text-sky-100"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="gradiantClr max-w-xl rounded-lg shadow-md lg:flex md:flex ">
            <img
              className="rounded-lg object-cover w-full md:w-1/2 lg:w-1/3"
              src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
              alt="image"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 sm:text-xl text-sm  font-semibold tracking-tight text-white">
                Nft Dominose
              </h4>
              <p className="mb-2 sm:text-sm text-xs leading-normal text-justify text-gray-400">
                Lorem ipsum dolor, sit amet cons ectetur adipis icing elit.
                Praesen tium, quibusdam facere quo laborum maiores sequi nam
                tenetur laud.
              </p>
              <button
                className="
        px-4
        py-2
        text-sm
        shadow
        bg-sky-100
     
        text-black
        hover:bg-sky-600 hover:text-sky-100"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
