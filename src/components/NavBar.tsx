import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} maxW="80px" padding="5px"></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
