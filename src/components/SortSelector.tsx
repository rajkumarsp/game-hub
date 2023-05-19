import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  orderBy: string;
  onChangeOrderBy: (orderBy: string) => void;
}

const SortSelector = ({ orderBy, onChangeOrderBy }: Props) => {
  const sortOptions = [
    { filter: "", label: "Relevance" },
    { filter: "name", label: "Name" },
    { filter: "-released", label: "Released" },
    { filter: "-added", label: "Added" },
    { filter: "-created", label: "Created" },
    { filter: "-rating", label: "Rating" },
    { filter: "-metacritic", label: "Metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOptions.find((x) => x.filter === orderBy)?.label}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.filter}
            onClick={() => onChangeOrderBy(option.filter)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
