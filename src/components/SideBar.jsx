import {
  Box,
  Heading,
  Flex,
  Button,
  Circle,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import Document from './Document';

import documents from '../data.json';

function SideBar({ isOpen }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

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
      py="28px"
      px="24px"
    >
      <Heading
        fontSize="15px"
        letterSpacing="5px"
        fontFamily="app"
        color="neutral.100"
        mb="28px"
      >
        MARKDOWN
      </Heading>
      <Heading
        fontSize="14px"
        letterSpacing="2px"
        fontFamily="app"
        color="neutral.500"
        mb="28px"
      >
        MY DOCUMENTS
      </Heading>
      <Button
        leftIcon={<AddIcon />}
        variant="solid"
        fontSize="15px"
        fontFamily="app"
        bg="orange"
        color="neutral.100"
        w="202px"
        mb="24px"
        _hover={{ bg: 'orangeHover' }}
      >
        New Document
      </Button>

      {documents.map(d => (
        <Document key={d.id} createdAt={d.createdAt} fileName={d.name} />
      ))}

      <Flex alignItems="center" gap="10px">
        <Image
          src={`/icon-dark-mode${isLightMode ? '' : '-active'}.svg`}
          alt="Dark mode icon"
          w="16px"
          h="16px"
        />
        <Box
          as="button"
          onClick={() => toggleColorMode()}
          w="48px"
          h="24px"
          bgColor="neutral.600"
          borderRadius="16px"
          display="flex"
          alignItems="center"
          px="6px"
          cursor="pointer"
        >
          <Circle
            size="12px"
            bgColor="neutral.100"
            transform={`translateX(${isLightMode ? '24' : '0'}px)`}
          />
        </Box>
        <Image
          src={`/icon-light-mode${isLightMode ? '-active' : ''}.svg`}
          alt="Light mode icon"
          w="18px"
          h="18px"
        />
      </Flex>
    </Box>
  );
}

export default SideBar;
