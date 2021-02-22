import * as React from 'react';
import { Accordion as AccordionWrapper, AccordionIcon } from '@chakra-ui/react';
import {
  AccordionItem,
  AccordionButton,
  Question,
  Answer,
} from './accordion.styles';

export interface AccordionProps {
  data: QData[];
}

export type QData = {
  q: string;
  a: string;
};

const Accordion: React.FC<AccordionProps> = (props) => {
  const { data } = props;

  return (
    <AccordionWrapper allowToggle flexGrow={1}>
      {data?.map((entry) => (
        <AccordionItem>
          <AccordionButton>
            <Question as='h3'>{entry.q}</Question>
            <AccordionIcon />
          </AccordionButton>
          <Answer>{entry.a}</Answer>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
