import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import InputHints from "react-input-hints";
import { useBoolean } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
const FilterForm = ({ onSubmit, isLoading }) => {
  const [input, setInput] = useState("");
  const [flag, setFlag] = useBoolean();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh

    onSubmit(input);
  };

  const styles = {
    input: {
      borderTop: "1px solid gray",
      borderLeft: "1px solid gray",
      borderBottom: "1px solid gray",
      padding: "10px",
      paddingLeft: "23px",
      borderTopLeftRadius: "25px",
      borderBottomLeftRadius: "25px",
      width: "100%",
      boxSizing: "border-box",
      ":focus": {
        border: "1px solid red",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <Center>
        <Box w={[400, 500, 800]} my="5%">
          <HStack spacing="0px">
            <InputHints
              style={styles.input}
              placeholders={[
                "Find me a place in uttara for 2 people.",
                "I want to eat chicken in gulshan within 300 taka",
              ]}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Submitting"
              onMouseEnter={setFlag.on}
              onMouseLeave={setFlag.off}
              p={"23px"}
              px={10}
              border={2}
              borderColor={"red.600"}
              colorScheme="red"
              bgColor="red.600"
              textColor={"white"}
              borderLeftRadius="0px"
              borderEndRadius="full"
              rightIcon={<FaSearch />}
            >
              {flag ? "Let's Go" : "Search"}
            </Button>
          </HStack>
        </Box>
      </Center>
    </form>
  );
};

export default FilterForm;
