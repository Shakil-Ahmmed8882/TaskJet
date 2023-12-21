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
  const { logOut } = UseAuth();
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
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          {/* To Do List
Ongoing Tasks
Completed Tasks */}
          <DropdownItem
            key="help_and_feedback"
            onClick={() => goTo("/dashboard/my_dashboard")}>
            My Dashboard
          </DropdownItem>
          <DropdownItem
            key="help_and_feedback"
            onClick={() => goTo("/dashboard/to_do_list")}>
            To Do List
          </DropdownItem>
          <DropdownItem
            key="help_and_feedback"
            onClick={() => goTo("/dashboard/ongoing_tasks")}>
            Ongoing Tasks
          </DropdownItem>
          <DropdownItem
            key="help_and_feedback"
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
