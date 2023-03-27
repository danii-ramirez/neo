import React from "react";
import { Link } from "react-router-dom";
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

function ItemList({ id, title, image, category, count }) {
  return (
    <>
      <Center w={"500px"}>
        <Card w={"100%"}>
          <CardBody>
            <Image src={image} alt={title} borderRadius="lg" boxSize="100px" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text>{category}</Text>
              <Text color="blue.600" fontSize="2xl">
                Stock: {count}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/item/${id}`}>
                <Button variant="solid" colorScheme="blue">
                  Detalle
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Center>
    </>
  );
}

export default ItemList;
