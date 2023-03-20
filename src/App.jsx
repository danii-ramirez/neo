import { Spinner, Stack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Stack>
    </>
  );
}

export default App;
