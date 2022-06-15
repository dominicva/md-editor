import { Flex, Button, Image, useColorModeValue } from '@chakra-ui/react';
import ColorModeToggle from './ColorModeToggle';

function Header({ viewIndex, onViewChange }) {
  const nextViewIndex = viewIndex === 0 ? 0 : 1;
  const iconSpecifier = viewIndex === 0 ? 'hide' : 'show';

  return (
    <Flex
      h="60px"
      w="100vw"
      position="absolute"
      top="0"
      left="0"
      zIndex={10}
      bg={useColorModeValue('secondary', 'primary')}
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      p="24px"
    >
      <Button
        onClick={() => onViewChange(nextViewIndex)}
        display={{ md: 'none' }}
        bg="transparent"
        opacity="0.8"
        _hover={{ transform: 'scale(1.2)', opacity: 1 }}
      >
        <Image
          src={`/icon-${iconSpecifier}-preview-hover.svg`}
          alt={`${iconSpecifier} preview"`}
          w="20px"
          wh="20px"
        />
      </Button>
      <ColorModeToggle />
    </Flex>
  );
}

export default Header;
