import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-black pb-10">
        <div className="bg-black">
          <h1 className="text-3xl font-bold text-white text-center pt-6">
            {" "}
            Blog{" "}
          </h1>
        </div>
        <div className=" row lg:flex m-10 md:flex md:row  sm:row sm:flex bg-black">
          <div className="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600 spacing-2">
            <img
              className="object-cover w-full md:w-1/2 lg:w-1/3"
              src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
              alt="image"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                Lorem, ipsum dolor sit 
              </h4>
              <p className="mb-2 text-sm leading-normal text-justify text-sky-900">
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
        shadow-sky-600
        text-sky-700
        hover:bg-sky-600 hover:text-sky-100"
              >
                Read more
              </button>
            </div>
          </div>
          <div className="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600">
            <img
              className="object-cover w-full md:w-1/2 lg:w-1/3"
              src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
              alt="image"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                Lorem ipsum dolor sit 
              </h4>
              <p className="mb-2 text-sm leading-normal text-justify text-sky-900">
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
        shadow-sky-600
        text-sky-700
        hover:bg-sky-600 hover:text-sky-100"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600">
            <img
              className="object-cover w-full md:w-1/2 lg:w-1/3"
              src="https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794__340.jpg"
              alt="image"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                Lorem ipsum dolor sit.
              </h4>
              <p className="mb-2 text-sm leading-normal text-justify text-sky-900">
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
        shadow-sky-600
        text-sky-700
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
