import styled from 'styled-components';
import React from 'react';

const RoundBox = styled.button`
  width: 36px !important;
  min-width: 32px !important;
  height: 36px !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 3px !important;
  border: none;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  background: white;

  &:hover {
    background: rgba(0, 0, 0, 0.07) !important;
  }
  & svg {
    fill: #646464;
  }
`;

export default function SmallButton({
  className,
  value,
  onClick,
  Icon,
}: {
  className?: string;
  value?: string;
  onClick?: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <RoundBox onClick={onClick} className={className} value={value}>
      <Icon />
    </RoundBox>
  );
}
