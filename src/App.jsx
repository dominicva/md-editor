/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import { useState } from 'react';

// chakra-ui
import { Box, Text, Flex, Textarea, Image } from '@chakra-ui/react';
import 'reset-css';

// md parser pkg
import { marked } from 'marked';

// project components
import Header from './components/Header';

const md = '# Marked in Node.js\n\nRendered by **marked**.';

function App() {
  const [text, setText] = useState(md);
  const __html = marked.parse(text);

  return (
    <div>
      <Header />

      <Box as="main" height="100vh" width="100vw" overflowY="scroll">
        <Flex
          h={{ base: '38px', md: '42px' }}
          px="16px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            color="neutral.500"
            fontSize={{ base: '14px' }}
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
          />
        </Box>

        <Box minH={{ base: '100vh' }} dangerouslySetInnerHTML={{ __html }} />
      </Box>
    </div>
  );
}

export default App;
