
import { BsSearch } from "react-icons/bs";


const TopSearchBar = () => {
      return (
            <div className="w-full flex items-center bg-[white] shadow-md  m-2 p-3 mb-6 pl-3 my-4 rounded-lg">
                <input placeholder="Search here.. " type="text"  className=" bg-[transparent]  placeholder:text-[#757474] focus-within:outline-none w-full " />  
      <BsSearch/>          
            </div>
      );
};

export default TopSearchBar;
