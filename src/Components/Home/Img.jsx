
import {Image} from "@nextui-org/react";

export default function Img({img}) {
  return (
      <div className="">
            <div className="w-full bg-[#00000044]  h-[6000px]  absolute z-30"></div>
           
            <Image
              className="cursor-pointer h-full -z-10 object-top"
              alt="NextUI hero Image"
              src={img}
            />

      </div>
  );
}
