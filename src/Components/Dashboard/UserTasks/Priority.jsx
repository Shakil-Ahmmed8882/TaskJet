
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Priority({handlePrioritySelect,selectedPriority}) {

  const items = [
    {
      key: "high",
      label: "High",
    },
    {
      key: "moderate",
      label: "Moderate",
    },
    {
      key: "low",
      label: "Low",
    }
  ];

 

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className=" text-accentColor">
          {selectedPriority}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Priority Options" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            onClick={() => handlePrioritySelect(item)}
            color="default"
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}