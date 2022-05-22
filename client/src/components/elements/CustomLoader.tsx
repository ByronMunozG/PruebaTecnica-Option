import { Center, Loader } from '@mantine/core';

const CustomLoader = () => (
  <Center mt="xl">
    <Loader data-testid="custom-loader" />
  </Center>
);

export default CustomLoader;
