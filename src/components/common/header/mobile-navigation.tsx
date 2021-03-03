import * as React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { CloseButton } from './header.styles';
import { NavigationMenu } from '../../../types';

interface MobileNavigationProps {
  onClose(): void;
  isOpen: boolean;
  data: NavigationMenu[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  return (
    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='full'>
      <DrawerOverlay>
        <DrawerContent>
          <CloseButton />
          <DrawerBody>
            <Accordion allowToggle>
              {data.map((menu) => (
                <AccordionItem key={menu.id}>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {menu.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>hello</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileNavigation;
