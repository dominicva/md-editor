/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import { useState } from 'react';

// chakra-ui
import {
  Box,
  Text,
  Textarea,
  Icon,
  IconButton,
  Flex,
  Image,
} from '@chakra-ui/react';
import 'reset-css';

// icons
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineFile } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

// md parser pkg
import { marked } from 'marked';

const md = '# Marked in Node.js\n\nRendered by **marked**.';

function App() {
  const [text, setText] = useState(md);
  const __html = marked.parse(text);

  return (
    <div>
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
          aria-label="Toggle side menu"
          variant="unstyled"
          bg="neutral.700"
          icon={
            <HamburgerIcon
              w={{ base: '30px', md: '30px' }}
              h={{ base: '20px', md: '18px' }}
            />
          }
          w={{ base: '56px', md: '72px' }}
          h={{ base: '56px', md: '72px' }}
          mr="24px"
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
            bg="orange.normal"
            borderRadius="4px"
            ml="24px"
          />
        </Flex>
      </Box>
      <Box as="main" height="100vh" width="100vw" overflowY="scroll">
        <Box>
          <Textarea
            minH={{ base: '100vh' }}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Box>
        <Box minH={{ base: '100vh' }} dangerouslySetInnerHTML={{ __html }} />
      </Box>
    </div>
  );
}

export default App;
