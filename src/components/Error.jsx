import React from "react";
import { Link } from "react-router-dom";
import { Center, Button } from "@chakra-ui/react";

const Error = () => {
  return (
    <>
      <Center>
        <h1>URL invalida</h1>
      </Center>
      <Center>
        <Link to={".."}>
          <Button variant="solid" colorScheme="blue">
            Volver al inicio
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default Error;
