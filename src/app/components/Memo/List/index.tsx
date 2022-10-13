import React from 'react';
import { useSelector } from 'react-redux';
import { baseSelector, MemoListSelector } from 'store/memo/selectors';
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
  const memoList = useSelector(MemoListSelector);

  return (
    <List>
      {memoList &&
        memoList.map(memo => (
          <MemoItem
            key={memo.id}
            id={memo.id}
            create_at={memo.created_at}
            preview={memo.preview}
            selected={memo.selected}
          />
        ))}
    </List>
  );
}
