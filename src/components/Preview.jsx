import { Box } from '@chakra-ui/react';

function Preview({ md }) {
  return (
    <Box
      className="view"
      h={{ base: 'calc(100vh - 94px)' }}
      overflowY="scroll"
      gridColumnStart="2"
      width={{ base: '100%' }}
    >
      <Box position="relative">{md}</Box>
    </Box>
  );
}

export default Preview;
