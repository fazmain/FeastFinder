import React from "react";
import MenuCard from "./MenuCard";
import { FiMapPin } from "react-icons/fi";

import {
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  Divider,
  CardBody,
  Tag,
  TagLabel,
  TagLeftIcon,
  HStack,
} from "@chakra-ui/react";

const RestaurantSection = ({ name, location, seating, menu }) => {
  // return (
  //   <>
  //     <div className="restaurant-card">
  //       <h2>Name: {name}</h2>
  //       <p>Location: {location}</p>
  //       <p>Seating: {seating}</p>
  //       <MenuCard menu={menu} />
  //     </div>
  //   </>
  // );

  return (
    <Card mx="4%" my="3%" variant={"outline"}>
      <CardHeader>
        <HStack>
          <Heading size="xl">{name}</Heading>
          <Box>
            {
              location.map((name, index) => (
              <Tag size="lg" variant="solid" p={2} bgColor="red.500" m={1}>
                <TagLeftIcon boxSize="12px" as={FiMapPin} />
                <TagLabel>{name}</TagLabel>
              </Tag>
              ))
            }
          </Box>
        </HStack>
        <Heading size="sm" mt={1}> Seating: {seating} </Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Box>
          <SimpleGrid columns={[2, 2, 4]} spacing={3}>
            <MenuCard menu={menu}/>
          </SimpleGrid>
        </Box>
      </CardBody>
    </Card>
  );
};

export default RestaurantSection;
