import { Box } from '@chakra-ui/react';

function Preview({ md }) {
  return (
    <Box
      className="view"
      h={{ base: 'calc(100vh - 94px)' }}
      overflowY="scroll"
      gridColumnStart="2"
      width={{ base: '100vw', md: '90%' }}
      px={{ base: '20px', md: '8px' }}
    >
      <Box position="relative">{md}</Box>
    </Box>
  );
}

export default Preview;
