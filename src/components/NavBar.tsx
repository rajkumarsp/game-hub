import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} maxW="80px" padding="5px"></Image>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
