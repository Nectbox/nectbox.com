import styled from '@emotion/styled';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
