
import {User} from "@nextui-org/react";
import { usersData } from "./User";
export default function Users() {
  return (<div className="grid grid-cols-2 gap-3">
      {
            usersData?.map(user =>    <User key={user.id}   
                  name={user.name}
                  description={user.designation}
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                  }}
                />)
      }
  </div>
  );
}
