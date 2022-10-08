import React from 'react';
import styled from 'styled-components';
import MemoItem from '../Item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;
    &:hover {
      margin-left: 0;
    }
  }
`;
export default function MemoList() {
  return (
    <List>
      <MemoItem
        id="1"
        create_at={new Date().toString()}
        preview="나는 메모앱입니다."
        selected={true}
      />
      <MemoItem
        id="1"
        create_at={new Date().toString()}
        preview="나는 메모앱입니dspepsk dsjeopsdk sdioe  "
        selected={false}
      />
      <MemoItem
        id="1"
        create_at={new Date().toString()}
        preview="나는 메모앱입니다."
        selected={false}
      />
    </List>
  );
}
