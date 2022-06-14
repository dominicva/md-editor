/* eslint-disable react/jsx-no-bind */
import { useState, useRef } from 'react';

// md parsing pkgs
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

// chakra-ui
import { Box, Divider } from '@chakra-ui/react';
import 'reset-css';

// project components
import SideBar from './components/SideBar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import MainHeader from './components/MainHeader';
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
        <MainHeader sidebar={sidebar} handleSidebar={setSidebar} />

        <ViewHeader
          view={viewIndex === 0 ? 'preview' : 'markdown'}
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
