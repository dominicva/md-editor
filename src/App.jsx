/* eslint-disable react/jsx-no-bind */
import { useState, useRef } from 'react';

// md parsing pkgs
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

// chakra-ui
import { Box } from '@chakra-ui/react';
import 'reset-css';

// project components
import Editor from './components/Editor';
import Preview from './components/Preview';
import Header from './components/Header';

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
  const [text, setText] = useState(initial);

  const mdComponent = (
    <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
      {text}
    </ReactMarkdown>
  );

  function scrollToView(index) {
    const viewsNode = viewRef.current;
    const viewNode = viewsNode.querySelectorAll('.view')[index];

    viewNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setViewIndex(viewIndex === 0 ? 1 : 0);
  }

  return (
    <Box width="100vw" maxW="1440px" margin="auto">
      <Box
        as="main"
        width="100%"
        height="100vh"
        overflowY="scroll"
        transition="all 0.5s ease"
      >
        <Header viewIndex={viewIndex} onViewChange={scrollToView} />

        <Box
          ref={viewRef}
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gap="32px"
          marginTop={{ base: '84px', xl: '114px' }}
          paddingX={{ base: '16px', md: '32px', xl: '8px' }}
          overflowX="hidden"
        >
          <Editor
            text={text}
            onTextChange={setText}
            onViewChange={scrollToView}
          />

          <Preview md={mdComponent} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
