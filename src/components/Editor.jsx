import { Box, Textarea, useColorModeValue } from '@chakra-ui/react';

function Editor({ text, onTextChange }) {
  return (
    <Box>
      <Textarea
        fontFamily="mono"
        h={{ base: 'calc(100vh - 120px)' }}
        width={{ base: '100vw' }}
        paddingX="16px"
        value={text}
        onChange={e => onTextChange(e.target.value)}
        bg={useColorModeValue('neutral.100', 'neutral.1000')}
        outline="none"
        border="none"
        gridColumn="span 1"
        _focusVisible={{ border: 'none' }}
      />
    </Box>
  );
}

export default Editor;
