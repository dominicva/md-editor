import { Box, Textarea, useColorModeValue } from '@chakra-ui/react';

function Editor({ text, onTextChange }) {
  return (
    <Box p="16px" width={{ base: '100vw', md: '100%' }} gridColumn="span 1">
      <Textarea
        fontFamily="mono"
        px="0"
        h={{ base: 'calc(100vh - 120px)' }}
        value={text}
        onChange={e => onTextChange(e.target.value)}
        bg={useColorModeValue('neutral.100', 'neutral.1000')}
        outline="none"
        border="none"
        _focusVisible={{ border: 'none' }}
      />
    </Box>
  );
}

export default Editor;
