import { BsBalloonFill } from "react-icons/bs";

const TitleDescription = ({ title, description }) => {
  return (
    <div>
      <div className="flex items-center gap-1 ">
        <BsBalloonFill className="text-4xl text-primaryColor"/>
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
      <p className="w-2/3 mt-2 text-[gray]">{description}</p>
    </div>
  );
};

export default TitleDescription;
