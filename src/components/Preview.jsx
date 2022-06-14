import { Box } from '@chakra-ui/react';

function Preview({ md }) {
  return (
    <Box paddingX="16px" minH={{ base: '100vh' }} gridColumnStart="3">
      {md}
    </Box>
  );
}

export default Preview;
