import { BsBalloonFill } from "react-icons/bs";

const TitleDescription = ({ title, description }) => {
  return (
    <div>
      <div className="flex z-20 relative items-center pt-16 lg:justify-center gap-1 ">
        <BsBalloonFill className="text-4xl text-primaryColor"/>
        <h1 className="text-3xl md:text-4xl  font-bold">{title}</h1>
      </div>
      <p className="lg:w-2/3 lg:mx-auto mt-2 z-20 relative text-[14px] md:text-[14px] lg:text-[16px] text-[#838383] lg:text-center">{description}</p>
    </div>
  );
};

export default TitleDescription;
