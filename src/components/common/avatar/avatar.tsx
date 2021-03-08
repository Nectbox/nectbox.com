import React from 'react';
import { Avatar as ChackraAvatar, Flex, Text } from '@chakra-ui/react';
import { colors } from '../../../styles/theme';

export interface AvatarProps {
  name: string;
  title?: string;
}

export default function Avatar(props: AvatarProps) {
  const { name, title } = props;

  return (
    <Flex>
      <ChackraAvatar bg='gray.800' w='5rem' h='5rem' name={name} />
      <Flex ml='1.5rem' flexFlow='column' justifyContent='center'>
        <Text fontSize='1.7rem' fontWeight={500}>
          {name}
        </Text>
        {title && (
          <Text fontSize='1.4rem' color={colors.text.lightGray}>
            {title}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}
