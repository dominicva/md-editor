/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';

function SiderBar({ isOpen }) {
  return (
    <Box
      w="250px"
      h="100vh"
      bg="neutral.900"
      position="absolute"
      top={0}
      left={isOpen ? 0 : '-250px'}
      zIndex={10}
      transition="all 0.5s ease"
    >
      <h1>Sidebar</h1>
    </Box>
  );
}

export default SiderBar;
