import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Button,
  ButtonGroup,
  Text,
  Stack,
  Image,
  Divider,
  Center,
} from "@chakra-ui/react";

const ItemDetail = ({ title, price, description, image, count }) => {
  return (
    <>
      <Center>
        <Card maxW="sm">
          <CardBody>
            <Image src={image} alt={title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text>{description}</Text>
              <Text color="blue.600" fontSize="2xl">
                Precio: {price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Center>
    </>
  );
};

export default ItemDetail;
