import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import {
  Flex,
  Center,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return await response.json();
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Flex>
        <Center h="80px" w="100px">
          <Link to={"/"}>
            <img src="./mono.svg" alt="icon" height={"50px"} width={"50px"} />
          </Link>
        </Center>
        <Spacer />
        <Center h="80px" w="200px">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorías
            </MenuButton>
            <MenuList>
              {categories.map((cat) => {
                return (
                  <Link key={cat} to={`/category/${cat}`}>
                    <MenuItem>{cat}</MenuItem>
                  </Link>
                );
              })}
            </MenuList>
          </Menu>
        </Center>
        <Spacer />
        <Center h="80px" w="200px">
          <CartWidget />
        </Center>
      </Flex>
    </>
  );
};

export default NavBar;
