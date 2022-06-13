/* eslint-disable react/prop-types */
import { AddIcon } from '@chakra-ui/icons';
import {
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { MenuContext } from 'react-flexible-sliding-menu';

function Menu({ isOpen } = {}) {
  const { closeMenu } = useContext(MenuContext);
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={closeMenu}
      preserveScrollBarGap
    >
      <DrawerOverlay />
      <DrawerContent bgColor="neutral.900">
        <DrawerHeader my={{ base: '8px' }}>
          <Text
            fontFamily="app"
            letterSpacing="5px"
            fontSize="15px"
            color="neutral.100"
            fontWeight="bold"
            mb={{ base: '28px' }}
          >
            MARKDOWN
          </Text>
          <Text
            fontFamily="app"
            letterSpacing="2px"
            fontSize="14px"
            color="neutral.500"
          >
            MY DOCUMENTS
          </Text>
        </DrawerHeader>
        <DrawerBody paddingTop={1}>
          <Button
            leftIcon={<AddIcon />}
            bg="orange"
            color="neutral.100"
            borderRadius="4px"
            w="202px"
            h="40px"
            fontFamily="app"
            fontSize="15px"
            _hover={{ bg: 'orangeHover' }}
          >
            New Document
          </Button>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={closeMenu}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>

        <button type="button" onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="#000" />
          </svg>
        </button>
      </DrawerContent>
    </Drawer>
  );
}

export default Menu;
