import { Box, Textarea, useColorModeValue } from '@chakra-ui/react';

function Editor({ text, onTextChange }) {
  return (
    <Box
      className="view"
      width={{ base: '100vw', md: '90%' }}
      h={{ base: 'calc(100vh - 94px)' }}
      gridColumn="span 1"
    >
      <Textarea
        fontFamily="mono"
        mt="16px"
        px={{ base: '20px', md: '8px' }}
        h={{ base: 'calc(100vh - 94px)' }}
        value={text}
        onChange={e => onTextChange(e.target.value)}
        bg={useColorModeValue('neutral.100', 'primary')}
        outline="none"
        border="none"
        _focusVisible={{ border: 'none' }}
      />
    </Box>
  );
}

export default Editor;
