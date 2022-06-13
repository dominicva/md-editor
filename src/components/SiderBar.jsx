/* eslint-disable react/prop-types */
import { AddIcon } from '@chakra-ui/icons';
import { AiOutlineFile } from 'react-icons/ai';
import { Box, Heading, Button, Flex, Icon, Text } from '@chakra-ui/react';

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

      <Flex alignItems="center" gap="14px" mb="24px">
        <Icon as={AiOutlineFile} w="16px" h="20px" color="neutral.100" />
        <Box>
          <Text
            fontSize="13px"
            fontWeight="light"
            color="neutral.500"
            fontFamily="app"
            mb="3px"
          >
            01 April 2022
          </Text>
          <Text fontSize="15px" color="neutral.100" fontFamily="app">
            untitled-document.md
          </Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap="14px">
        <Icon as={AiOutlineFile} w="16px" h="20px" color="neutral.100" />
        <Box>
          <Text
            fontSize="13px"
            fontWeight="light"
            color="neutral.500"
            fontFamily="app"
            mb="3px"
          >
            01 April 2022
          </Text>
          <Text fontSize="15px" color="neutral.100" fontFamily="app">
            welcome.md
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default SiderBar;
