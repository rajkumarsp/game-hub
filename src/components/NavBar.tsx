import { Text, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} maxW="80px" padding="5px"></Image>
        <Text>Navbar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
