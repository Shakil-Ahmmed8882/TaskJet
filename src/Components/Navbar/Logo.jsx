import { BsBookHalf } from "react-icons/bs";


const Logo = () => {
  return (
    <div className="flex ml-[23px] py-2 items-center gap-1">
      <BsBookHalf className="text-2xl text-primaryColor"/>
      <h1 className="font-bold text-2xl relative">Tasklet</h1>
    </div>
  );
};

export default Logo;
