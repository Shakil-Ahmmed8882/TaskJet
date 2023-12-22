
import { BsQuote } from "react-icons/bs";

const Quotes = ({quote,details,by}) => {
  return (
    <div className="relative mx-3 overflow-hidden shadow-lg quote_font">
      <div className="bg-[#ffffff] bg-blend-multiply p-3 rounded-lg relative z-10">
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
      
    </div>
  );
};

export default Quotes;
