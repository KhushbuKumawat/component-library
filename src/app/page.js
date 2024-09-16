"use client";
import { CiFolderOn } from "react-icons/ci";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import { TbComponents } from "react-icons/tb";
import { BsCodeSquare } from "react-icons/bs";
import CodeClipboard from "@/components/CodeClipboard";
import Image from "next/image";
import Link from "next/link";
export default function Example() {
  const cards = [
    {
      icon: <CgFileAdd />,
      title: "500+ Components",
      desp: "Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.",
    },
    {
      icon: <TbComponents />,
      title: "React, Next js",
      desp: "Interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.",
    },
    {
      icon: <BsCodeSquare />,
      title: "Fully Responsive",
      desp: "Every example is fully responsive and carefully designed and implemented to look great at any screen size.",
    },
  ];
 
  const pageSection=[
    {
      image:'heroes.png',
      title:'Hero Sections',
      comp:'2 components',
      path:'/page-sections/hero-section'
    },
    {
      image:'heroes.png',
      title:'Feature Sections',
      comp:'4 components',
      path:'/page-sections/hero-section'
    },
    {
      image:'heroes.png',
      title:'CTA Sections',
      comp:'1 component',
      path:'/page-sections/hero-section'
    },
  ]
  const element=[
    {
      image:'heroes.png',
      title:'Buttons',
      comp:'2 components',
      path:'/elements/buttons'
    },
    {
      image:'heroes.png',
      title:'Cards',
      comp:'4 components',
      path:'/page-sections/hero-section'
    },
    {
      image:'heroes.png',
      title:'Dropdown',
      comp:'1 component',
      path:'/elements/buttons'
    },
  ]
  return (
    <>
      <div className="bg-white border-b-2 container-box ">
        <div className="relative isolate px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="grid grid-cols-3 gap-11 py-22 sm:py-28 ">
            <div className="col-span-2">
              <div className="hidden sm:mb-8 sm:flex ">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  By the makers of components.{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="">
                <h1 className="text-3xl font-bold  text-grey-900 sm:text-6xl">
                  Beautiful UI components, crafted with Tailwind CSS.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Over 500+ professionally designed, fully responsive, expertly
                  crafted component examples you can drop into your Tailwind
                  projects and customize to your heart’s content.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Documentation <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative focus-within:shadow-lg border-1 rounded-lg">
              <div className="relative flex items-center w-full h-11 rounded-lg  bg-white overflow-hidden mt-11">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
              <div className="">
                <p className="text-sm font-semibold text-gray-500 mx-4 my-2">
                  Recent Search
                </p>
                <div className="border-b-2 ">
                  <p className="flex items-center gap-2 hover:bg-indigo-600 hover:text-white p-1 rounded-sm mx-4">
                    <CiFolderOn />
                    Website Redesign
                  </p>
                  <p className="flex items-center gap-2 hover:bg-indigo-600 hover:text-white p-1 rounded-sm mx-4">
                    <CiFolderOn />
                    Conference Branding
                  </p>
                </div>
                <p className="flex items-center gap-2 hover:bg-indigo-600 hover:text-white p-1 rounded-sm mx-4">
                  <CgFileAdd />
                  Add new file
                </p>
                <p className="flex items-center gap-2 hover:bg-indigo-600 hover:text-white p-1 rounded-sm mx-4">
                  <AiOutlineFolderAdd /> Add new folder
                </p>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {cards.map((item) => {
              return (
                <div
                  key={item?.icon}
                  className="hover:bg-indigo-600 border-2 rounded-lg p-4 hover:text-white"
                >
                  <div className="flex items-center gap-1">
                    <p className="text-xl">{item?.icon}</p>
                    <h3>{item?.title}</h3>
                  </div>
                  <p className="text-sm py-2">{item?.desp}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className="flex justify-between mx-24 my-4 border-b-2 pb-4">
        <div className="flex justify-between gap-6">
          <p className="cursor-pointer">Marketing</p>
          <p className="cursor-pointer">Application UI</p>
          <p className="cursor-pointer">Ecommerce</p>
        </div>
        <div className="flex justify-between gap-6">
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">FAQs</p>
        </div>
      </section>
      <section className='mx-24'>
        <div className="border-b-2">
          <h2 className='text-lg font-semibold'>Marketing</h2>
          <p className='py-8 text-grey-400'>Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.</p>
        </div>
        <div className="grid grid-cols-4 my-11 ">
         <div className=''>Page Sections</div>
         {/* <div className='hover:bg-gray-500 rounded-lg'> */}
         <div className="grid grid-cols-3 gap-4 p-1 col-span-3">
            {pageSection.length && pageSection.map((item) => {
              return (
                <Link
                  key={item?.image}
                  href={item?.path}
                  className="hover:bg-gray-200 p-2 rounded-lg hover:text-indigo-400 hover:shadow-sm"
                >
                  <div className="flex flex-col">
                    <Image className="text-xl" src={item?.image} height={300} width={400} alt="pageSectionImages"/>
                    <h3 className='pt-2'>{item?.title}</h3>
                  <p className="text-sm py-2">{item?.comp}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-4 my-11 ">
         <div className=''>Elements</div>
         {/* <div className='hover:bg-gray-500 rounded-lg'> */}
         <div className="grid grid-cols-3 gap-4 p-1 col-span-3">
            {element.length && element.map((item) => {
              return (
                <Link
                  key={item?.image}
                  href={item?.path}
                  className="hover:bg-gray-200 p-2 rounded-lg hover:text-indigo-400 hover:shadow-sm"
                >
                  <div className="flex flex-col">
                    <Image className="text-xl" src={item?.image} height={300} width={400} alt="pageSectionImages"/>
                    <h3 className='pt-2'>{item?.title}</h3>
                  <p className="text-sm py-2">{item?.comp}</p>
                  </div>
                </Link>
              );
            })}
          </div>
         {/* </div> */}
         {/* <div className=''>

         <CodeClipboard code={codeSnippet} />
         </div> */}

        </div>
      </section>

    </>
  );
}
