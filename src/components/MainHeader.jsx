import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react';
import { AiOutlineFile } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

function MainHeader({ sidebar, handleSidebar }) {
  return (
    <Box
      as="header"
      h={{ base: '56px', md: '72px' }}
      bg="neutral.800"
      color="neutral.100"
      fontFamily="app"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <IconButton
        onClick={() => handleSidebar(!sidebar)}
        aria-label="Toggle sidebar"
        variant="unstyled"
        bg="neutral.700"
        icon={
          <HamburgerIcon
            w={{ base: '30px', md: '40px' }}
            h={{ base: '20px', md: '24px' }}
          />
        }
        w={{ base: '56px', md: '72px' }}
        h={{ base: '56px', md: '72px' }}
        mr="24px"
        _hover={{ bg: 'orange' }}
      />
      <Flex alignItems="center" gap="12px">
        <Icon as={AiOutlineFile} />
        <Text>welcome.md</Text>
      </Flex>
      <Flex position="absolute" right="8px" alignItems="center">
        <Icon as={FiTrash2} stroke="neutral.500" w="18px" h="20px" />
        <Image
          src="/icon-save.svg"
          alt="Save file"
          boxSize="40px"
          padding="12px"
          bg="orange"
          borderRadius="4px"
          ml="24px"
        />
      </Flex>
    </Box>
  );
}

export default MainHeader;
