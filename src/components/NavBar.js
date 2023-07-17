import { Flex, Spacer, Image, Button } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { FaFacebook } from "react-icons/fa"; // eslint-disable-line

const NavBar = () => {
  return (
    <Flex w="100%" p={5}>
      <Image boxSize="80px" src={logo} alt="FeastFinder Logo" />
      <Spacer />
      <Button
        mt={3}
        size="md"
        as="a"
        href="https://github.com/fazmain/FeastFinder"
        colorScheme="red"
        variant="outline"
      >
        Github Repo
      </Button>
      <Button
        isDisabled
        mt={3}
        ml={3}
        size="md"
        as="a"
        href="https://github.com/your-github-repo"
        colorScheme="purple"
        variant="outline"
      >
        Contribute
      </Button>
    </Flex>
  );
};

export default NavBar;
