import React from "react";

import {
  Card,
  CardBody,
  Text,
  Heading,
  Tag,
  Box,
} from "@chakra-ui/react";

const MenuCard = ({ menu }) => {
  
  return (
    <>
      {menu.map((item, index) => (
        <Card maxW="sm" key={index}>
          <CardBody>
            <Heading size="md" pt={3}>
              {item.item}
            </Heading>
            <Box>
              {item.tags.map((tag, index) =>
                index < 3 ? (
                  <Tag ml={0} mr={2} my={1}>
                    {tag}
                  </Tag>
                ) : null
              )}
            </Box>
            <Text pt={3}>
              <b>Main Ingredient:</b> {item.mainIngredient}
            </Text>
            <Text pt={2}>
              <b>Price:</b> {item.price}
            </Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default MenuCard;
