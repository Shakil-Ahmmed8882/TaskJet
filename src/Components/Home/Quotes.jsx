
import { BsQuote } from "react-icons/bs";

const Quotes = ({quote,details,img,by}) => {
  return (
    <div className="relative overflow-hidden shadow-lg quote_font">
      <div className="bg-[#fffffff2] bg-blend-multiply p-3 rounded-lg relative z-10">
        <div className="flex mt-3">
          <BsQuote className="text-5xl md:text-7xl -mt-3 md:-mt-6 text-[#82e0ff]" />
          <strong className="text-[20px]">
            {quote}
          </strong>
        </div>
        <div>
          <p className="pl-11 py-2">
            {details}
            </p>
          <span className="text-primaryColor pt-[60px] pl-11"> {by}</span>
        </div>
      </div>
      <img
        className="mx-auto  rounded-lg w-full h-full  absolute object-none object-top -z-1 top-0 bottom-[-50%]" // Adjust bottom value as needed
        size="lg"
        src={img}
      />
    </div>
  );
};

export default Quotes;
