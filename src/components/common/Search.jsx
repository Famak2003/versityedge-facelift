import { motion } from "framer-motion";

import { useRef, useState } from "react";
import SEARCH from "./../../assets/search.png";

import * as Hooks from "../../hooks/index";

import FILTER from "./../../assets/filter.png";
import { selectionVariant } from "../../effects";

const filterContent = [{ text: "Olevel" }, { text: "UTME" }, { text: "POST" }];

function Search({ addFilter, spaceFilterNButton = false }) {
  const [searchContent, setSearchContent] = useState("");
  const [filterOn, setFilterOn] = useState(false);

  // handle outsideClick for filter
  const filterRef = useRef();
  Hooks.useOutsideClick(filterRef, setFilterOn);

  function handleSearch(e) {
    e.preventDefault();
  }

  function handleFilter() {
    setFilterOn(!filterOn);
  }
  return (
    <div className="flex justify-between px-1">
      <form
        onSubmit={(e) => handleSearch(e)}
        className={` ${
          !addFilter ? "w-full" : spaceFilterNButton ? "w-[80%]" : ""
        } rounded-2xl w-[28rem] justify-between pl-[2rem] pr-[.5rem] h-[4.4rem] overflow-hidden flex ring-1 ring-[var(--lightgray)] `}
      >
        <input
          className=" float-left text-[1.6rem] w-full outline-none"
          type="search"
          value={searchContent}
          placeholder="Search"
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <figure className=" h-full cursor-pointer flex items-center px-4 float-right ">
          <img className=" object-cover " src={SEARCH} alt="search" />
        </figure>
      </form>

      {/* // Checks if there should be a filter included in the ui // */}
      {addFilter ? (
        <div ref={filterRef} className=" z-50 relative flex justify-center">
          <button onClick={() => handleFilter()}>
            <img src={FILTER} alt="filter" />
          </button>
          {/* // filter dropDown // */}
          <motion.ul
            variants={selectionVariant}
            whileInView={"visible"}
            className={` ${
              filterOn ? "absolute" : "hidden"
            } translate-x-[-60%] bg-[var(--white)] translate-y-[70%] rounded-r-3xl rounded-b-3xl overflow-hidden bottom-0 ring-[var(--lightgray)] flex flex-col w-[20rem] h-fit`}
          >
            {filterContent.map((obj, idx) => (
              <motion.li
                variants={selectionVariant}
                whileHover={"hoverEffect"}
                key={idx}
                className=" z-50 text-left pl-[3rem] text-[1.4rem] p-[1rem] border border-b-[var(--lightgray)]"
              >
                {obj.text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
