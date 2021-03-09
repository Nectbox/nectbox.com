import * as React from 'react';
import styled from '@emotion/styled';
import TwitterSvg from '../../../images/twitter-share.svg';
import LinkedinSvg from '../../../images/linkedin-share.svg';
import { Text } from '@chakra-ui/react';
import { colors } from '../../../styles/theme';

export const ShareBarWrapper = styled.div`
  display: flex;
`;

export const ShareLink = styled.a`
  width: 2.5rem;
  margin-right: 1.15rem;

  :last-of-type {
    margin-right: 0;
  }
`;

export const Icon = styled.img`
  object-fit: contain;
`;

export interface ShareBarProps {
  path: string;
  title: string;
}

const ShareBar: React.FC<ShareBarProps> = (props) => {
  const { path, title } = props;

  return (
    <ShareBarWrapper>
      <Text mr='1.5rem' color={colors.text.darkGray}>
        Share
      </Text>
      <ShareLink
        href={`https://twitter.com/share?text=${title} by @nectbox_&url=${path}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Share on Twitter'>
        <Icon src={TwitterSvg} alt='Twitter share button' />
      </ShareLink>
      <ShareLink
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${path}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Share on LinkedIn'>
        <Icon src={LinkedinSvg} alt='LinkedIn share button' />
      </ShareLink>
    </ShareBarWrapper>
  );
};

export default ShareBar;
