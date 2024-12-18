import React from "react";
import { IoSearch } from "react-icons/io5";


export default function SearchBtn() {
    return (
        <form className="flex items-center gap-2 shadow-md focus-within:ring-2 dark:focus-within:ring-gray-200
         focus-within:ring-slate-800 p-2 rounded-lg dark:bg-slate-800 bg-white  mx-2">
            <section className="flex items-center h-full gap-2 w-full"> 
                {/* search icon */}
                <IoSearch className="text-2xl text-blue-500" />
            <input
            placeholder="Search Github username..." 
            className="w-full h-[40px] rounded bg-inherit outline-none px-1 text-sm"
            type="text" />
           </section>
           <button className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:opacity-80 transition-all">Search</button>
        </form>

    )
}