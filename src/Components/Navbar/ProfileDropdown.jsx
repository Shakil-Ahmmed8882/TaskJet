import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { UseAuth } from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../utils/SuccessToast";

const ProfileDropdown = () => {
  const { logOut, user } = UseAuth();
  const goTo = useNavigate();

  const handleLogOut = () => {
    goTo("/");
    logOut()
      .then(() => successToast("Signed out"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
            }`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">
              {user.email ? user.email : "user@gamil.com"}
            </p>
          </DropdownItem>
          {/* To Do List
Ongoing Tasks
Completed Tasks */}
          <DropdownItem
            key="create_task"
            onClick={() => goTo("/dashboard/create_to_do")}>
            Create task
          </DropdownItem>
          <DropdownItem
            key="to_do"
            onClick={() => goTo("/dashboard/to-do-list")}>
            To-Do list
          </DropdownItem>
          <DropdownItem
            key="ongoing_task"
            onClick={() => goTo("/dashboard/ongoing_tasks")}>
            Ongoing Tasks
          </DropdownItem>
          <DropdownItem
            key="completed_task"
            onClick={() => goTo("/dashboard/completed_tasks")}>
            completed Tasks
          </DropdownItem>

          <DropdownItem
            onClick={() => handleLogOut()}
            key="logout"
            color="danger">
            Logout/Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
