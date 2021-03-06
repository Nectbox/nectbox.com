import * as React from 'react';
import Link from '../link';
import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import {
  CloseButton,
  Body,
  AccordtionTitle,
  AccordionButton,
  Title,
  Panel,
  PanelItem,
} from './header.styles';
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
          <Body>
            <Accordion allowToggle>
              <AccordionItem my={5} position='relative'>
                <AccordionButton>
                  <AccordtionTitle>01.</AccordtionTitle>
                </AccordionButton>
                <Link to='/'>
                  <Title>Home</Title>
                </Link>
              </AccordionItem>
              {data.map((menu, idx) => (
                <AccordionItem key={menu.id} my={5} position='relative'>
                  <AccordionButton>
                    <AccordtionTitle>0{idx + 2}.</AccordtionTitle>
                    {menu.megaMenu && <AccordionIcon h={12} w={12} />}
                  </AccordionButton>
                  <Link to={`/${menu.slug}`}>
                    <Title>{menu.title}</Title>
                  </Link>

                  {menu.megaMenu && (
                    <Panel>
                      {menu.megaMenu.menuItems.map((item) => (
                        <Link to={`/${item.slug}`} key={item.id}>
                          <PanelItem>{item.heading}</PanelItem>
                        </Link>
                      ))}
                    </Panel>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Body>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MobileNavigation;
