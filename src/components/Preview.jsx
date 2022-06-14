import { Box } from '@chakra-ui/react';

function Preview({ md }) {
  return (
    <Box
      paddingX="16px"
      h={{ base: 'calc(100vh - 120px)' }}
      gridColumn="span 1"
      gridColumnStart="3"
      width={{ base: '100vw' }}
    >
      {md}
    </Box>
  );
}

export default Preview;
