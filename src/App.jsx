/* eslint-disable react/jsx-no-bind */
import { useState, useRef } from 'react';

// md parsing pkgs
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

// chakra-ui
import {
  Box,
  Text,
  Flex,
  Image,
  Divider,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import 'reset-css';

import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineFile } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

// project components
import SideBar from './components/SideBar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import ViewHeader from './components/ViewHeader';

const initial = `# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).
`;

function App() {
  const viewRef = useRef(null);
  const [viewIndex, setViewIndex] = useState(1);
  const [sidebar, setSidebar] = useState(false);
  const [text, setText] = useState(initial);

  const mdComponent = (
    <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
      {text}
    </ReactMarkdown>
  );

  function scrollToView(index) {
    const viewsNode = viewRef.current;
    const viewNode = viewsNode.querySelectorAll('div')[index];

    viewNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setViewIndex(viewIndex === 0 ? 1 : 0);
  }

  return (
    <Box>
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
        <ViewHeader
          view={viewIndex === 0 ? 'markdown' : 'preview'}
          scroll={scrollToView}
        />

        <Box
          ref={viewRef}
          display="grid"
          gridTemplateColumns="1fr 1px 1fr"
          overflowX="hidden"
        >
          <Editor text={text} onTextChange={setText} />
          <Divider
            orientation="vertical"
            height="calc(100vh - 88px)"
            position="relative"
            top="0px"
            left="50%"
            display={{ base: 'none', md: 'block' }}
          />
          <Preview md={mdComponent} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
