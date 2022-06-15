import { Flex, Button, Image } from '@chakra-ui/react';
import ColorModeToggle from './ColorModeToggle';

function Header({ viewIndex, onViewChange }) {
  const nextViewIndex = viewIndex === 0 ? 0 : 1;
  const iconSpecifier = viewIndex === 0 ? 'hide' : 'show';

  return (
    <Flex
      as="header"
      h="60px"
      bg="neutral.1000"
      color="neutral.100"
      fontFamily="app"
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      paddingX="24px"
    >
      <Button
        onClick={() => onViewChange(nextViewIndex)}
        display={{ md: 'none' }}
      >
        <Image
          src={`/icon-${iconSpecifier}-preview-hover.svg`}
          alt={`${iconSpecifier} preview"`}
        />
      </Button>
      <ColorModeToggle />
    </Flex>
  );
}

export default Header;
