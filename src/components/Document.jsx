import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlineFile } from 'react-icons/ai';

function Document({ createdAt, fileName }) {
  return (
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
          {createdAt}
        </Text>
        <Text fontSize="15px" color="neutral.100" fontFamily="app">
          {fileName}
        </Text>
      </Box>
    </Flex>
  );
}

export default Document;
