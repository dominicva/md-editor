import { Box, Flex, Image, Circle, useColorMode } from '@chakra-ui/react';

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Flex alignItems="center" gap="10px">
      <Image
        src={`/icon-dark-mode${isLightMode ? '' : '-active'}.svg`}
        alt="Dark mode icon"
        w="16px"
        h="16px"
      />
      <Box
        as="button"
        onClick={() => toggleColorMode()}
        w="48px"
        h="24px"
        bgColor="neutral.600"
        borderRadius="16px"
        display="flex"
        alignItems="center"
        px="6px"
        cursor="pointer"
      >
        <Circle
          size="12px"
          bgColor="neutral.100"
          transform={`translateX(${isLightMode ? '24' : '0'}px)`}
        />
      </Box>
      <Image
        src={`/icon-light-mode${isLightMode ? '-active' : ''}.svg`}
        alt="Light mode icon"
        w="18px"
        h="18px"
      />
    </Flex>
  );
}

export default ColorModeToggle;
