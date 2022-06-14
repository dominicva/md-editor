import {
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function ViewHeader({ view, scroll }) {
  const iconVariant = view === 'markdown' ? 'show' : 'hide';
  const image = (
    <Image
      src={`/icon-${iconVariant}-preview.svg`}
      alt={`${iconVariant} preview`}
    />
  );

  return (
    <Flex
      h={{ base: '44px', md: '48px' }}
      bg={useColorModeValue('neutral.200', 'neutral.900')}
      px="16px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        color={useColorModeValue('neutral.500', 'neutral.400')}
        fontSize={{ base: '14px' }}
        marginTop="2px"
        letterSpacing="2px"
        fontFamily="app"
      >
        {view.toUpperCase()}
      </Text>

      <IconButton onClick={() => scroll(view === 'markdown' ? 1 : 0)}>
        {image}
      </IconButton>
    </Flex>
  );
}

export default ViewHeader;
