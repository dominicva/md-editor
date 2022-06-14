import { Box } from '@chakra-ui/react';

function Preview({ md }) {
  return (
    <Box
      p="16px"
      h={{ base: 'calc(100vh - 120px)' }}
      gridColumn="span 1"
      gridColumnStart="3"
      width={{ base: '100vw', md: '100%' }}
    >
      {md}
    </Box>
  );
}

export default Preview;
