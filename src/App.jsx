import { useState } from 'react';

// md parsing pkgs
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

// chakra-ui
import {
  Box,
  Text,
  Flex,
  Textarea,
  Image,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import 'reset-css';

import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineFile } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

// project components
import SideBar from './components/SideBar';

const md = '# Marked in Node.js\n\nRendered by **marked**.';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const [text, setText] = useState(md);

  const mdComponent = (
    <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
      {text}
    </ReactMarkdown>
  );

  return (
    <div>
      <SideBar isOpen={sidebar} />

      <Box
        as="main"
        height="100vh"
        width="100vw"
        overflowY="scroll"
        ml={sidebar ? '250px' : 0}
        transition="all 0.5s ease"
      >
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
            onClick={() => setSidebar(!sidebar)}
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
              bg="orange"
              borderRadius="4px"
              ml="24px"
            />
          </Flex>
        </Box>
        <Flex
          h={{ base: '42px', md: '42px' }}
          bg="neutral.200"
          px="16px"
          mb="16px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            color="neutral.500"
            fontSize={{ base: '14px' }}
            letterSpacing="2px"
            fontFamily="app"
          >
            MARKDOWN
          </Text>
          <Image src="/icon-show-preview.svg" alt="Show preview" />
        </Flex>
        <Box>
          <Textarea
            minH={{ base: '100vh' }}
            value={text}
            onChange={e => setText(e.target.value)}
            outline="none"
            border="none"
            _focusVisible={{ border: 'none' }}
          />
        </Box>

        <Box minH={{ base: '100vh' }}>{mdComponent}</Box>
      </Box>
    </div>
  );
}

export default App;
