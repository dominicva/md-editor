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
      src={`/icon-${iconVariant}-preview-hover.svg`}
      alt={`${iconVariant} preview`}
    />
  );

  return (
    <Flex
      h={{ base: '44px', md: '48px' }}
      bg={useColorModeValue('neutral.200', 'neutral.900')}
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

      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={{ md: '48%' }}
        paddingRight="8px"
      >
        <Text
          color={useColorModeValue('neutral.500', 'neutral.400')}
          fontSize={{ base: '14px' }}
          marginTop="2px"
          letterSpacing="2px"
          fontFamily="app"
          display={{ base: 'none', md: 'block' }}
        >
          PREVIEW
        </Text>

        <IconButton onClick={() => scroll(view === 'markdown' ? 1 : 0)}>
          {image}
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default ViewHeader;
