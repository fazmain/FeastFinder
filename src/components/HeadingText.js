import { Heading, Center } from "@chakra-ui/react";

const HeadingText = () => {
  return (
    <>
      <Center pt={10} pb={10}>
        <Heading
          align="center"
          size="4xl"
          bgGradient="linear(to-tr, #f6767d, #ef1c26, #ab3b40)"
          bgClip="text"
          fontWeight="extrabold"
          maxW="70%"
        >
          Find great feasts matching your needs!
        </Heading>
      </Center>
    </>
  );
};

export default HeadingText;
