import { BsBookHalf } from "react-icons/bs";


const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <BsBookHalf className="text-2xl text-primaryColor"/>
      <h1 className="font-bold text-2xl">Tasklet</h1>
    </div>
  );
};

export default Logo;
