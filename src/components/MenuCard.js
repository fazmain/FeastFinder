import React from "react";

import {
  Card,
  CardBody,
  Text,
  Heading,
  Tag,
  Box,
  Popover,
  PopoverTrigger,
  Button,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

const MenuCard = ({ menu }) => {
  return (
    <>
      {menu.map((item, index) => (
        <Card maxW="sm" key={index}>
          <CardBody>
            <Heading size="md" pb={2}>
              {item.item}
            </Heading>
            {item.tags ? (
              <Box>
                {item.tags.map((tag, index) =>
                  index < 3 ? (
                    <Tag ml={0} mr={2} my={1}>
                      {tag}
                    </Tag>
                  ) : null
                )}
              </Box>
            ) : null}
            <Text pt={1}>
              <b>Item Type: </b> {item.mainIngredient}
            </Text>
            <Text pt={1}>
              <b>Price:</b> {item.price}
            </Text>
            {item.description === "" || !item.description  ? (
              null
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Button variant='link' colorScheme="red" pt={1}>Item Description</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody bg="gray.100">{item.description}</PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default MenuCard;
