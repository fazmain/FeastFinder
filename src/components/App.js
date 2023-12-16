import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../firebase";
import RestaurantSection from "./RestaurantSection";
import FilterForm from "./FilterForm";
import NavBar from "./NavBar";
import HeadingText from "./HeadingText";
import { Box, Heading } from "@chakra-ui/react";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    location: "Uttara",
    tags: [],
    nOfPeople: 0,
    famFriendly: null,
    coupFriendly: null,
    partyFriendly: null,
    occasion: null,
    meal: null,
    budget: 0,
    mainIngredient: "/",
  });

  const handleFormSubmit = (query) => {
    setIsLoading(true);
    fetch("https://feastfinder-server-c35562ccc017.herokuapp.com/generate-filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput: query }),
    })
      .then((response) => response.json())
      .then((data) => {
        // For testing purpose, logging data.
        console.log("DATA: ", data);

        setFilter(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

    useEffect(() => {
      const db = getDatabase(app);
      const restaurantsRef = ref(db, "restaurants");

      onValue(restaurantsRef, (snapshot) => {
        const data = snapshot.val();
        const restaurantsData = data ? Object.values(data) : [];

        const filteredRestaurants = restaurantsData.reduce((acc, restaurant) => {
          const {
            location,
            meal,
            seating,
            famFriendly,
            coupFriendly,
            partyFriendly,
            menu,
          } = restaurant;

          if (filter.nOfPeople && seating < filter.nOfPeople) {
            return acc;
          }

          if (
            filter.location &&
            location &&
            !location.includes(filter.location)
          ) {
            return acc;
          }

          if (filter.meal !== null && meal !== filter.meal) {
            return acc;
          }

          if (
            (filter.famFriendly && !famFriendly) ||
            (filter.coupFriendly && !coupFriendly) ||
            (filter.partyFriendly && !partyFriendly)
          ) {
            return acc;
          }

          if (filter.tags.length || filter.budget || filter.mainIngredient) {
            const filteredMenu = menu.filter((item) => {
              const { tags, price, mainIngredient } = item;

              if (
                Array.isArray(filter.tags) &&
                filter.tags.length &&
                Array.isArray(tags) &&
                !filter.tags.some((tag) => tags.includes(tag))
              ) {
                return false;
              }

              if (
                filter.mainIngredient &&
                mainIngredient !== filter.mainIngredient
              ) {
                return false;
              }

              if (filter.budget && price > filter.budget) {
                return false;
              }

              return true;
            });

            if (filteredMenu.length === 0) {
              return acc;
            }

            restaurant.menu = filteredMenu;
          }

          return acc.concat(restaurant);
        }, []);

        setRestaurants(filteredRestaurants);
      });
    }, [filter]);

    return (
      <Box>
        <div className="app">
          <NavBar />
          <HeadingText />
          <FilterForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          <Box>
            {restaurants.length === 0 ? (
              <Heading>No results found for the query.</Heading>
            ) : (
              restaurants.map((restaurant, index) => (
                <RestaurantSection key={index} {...restaurant} filter={filter} />
              ))
            )}
          </Box>
        </div>
      </Box>
    );
  };

export default App;


