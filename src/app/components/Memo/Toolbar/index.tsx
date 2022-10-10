import SmallButton from 'app/components/Button/SmallButton';
import { TitleText } from 'app/components/Text';
import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as PostDeleteIcon } from './assets/delete_outline_black_24dp.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add_black_24dp.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold_black_24dp.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields_black_24dp.svg';
import { ReactComponent as MakeTodoIcon } from './assets/check_circle_outline_black_24dp.svg';
import { ReactComponent as MakeImageIcon } from './assets/collections_black_24dp.svg';
import Block from 'app/components/Block';
import SearchInput from '../Input/SearchInput';

import ReactQuill from 'react-quill';

let icons = ReactQuill.Quill.import('ui/icons');

icons['header'] = <MakeSizeIcon />;
icons['bold'] = <MakeBoldIcon />;
icons['list'] = <MakeTodoIcon />;
icons['image'] = <MakeImageIcon />;

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid #e9e9e9 !important;
  padding: 0 !important;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolbar() {
  return (
    <Box id="toolbar">
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>MEMO</TitleText>
        <SmallButton Icon={() => <PostDeleteIcon />} onClick={() => {}} />
      </LeftMenu>
      <RightMenu>
        <SmallButton Icon={() => <PostAddIcon />} onClick={() => {}} />
        <div>
          <SmallButton
            className="ql-bold"
            Icon={() => <MakeBoldIcon />}
            onClick={() => {}}
          />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-header"
            value="1"
            Icon={() => <MakeSizeIcon />}
            onClick={() => {}}
          />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-list"
            value="check"
            Icon={() => <MakeTodoIcon />}
            onClick={() => {}}
          />
        </div>
        <div>
          <SmallButton
            className="ql-image"
            Icon={() => <MakeImageIcon />}
            onClick={() => {}}
          />
          <Block marginRight="5px" />
          <SearchInput />
        </div>
      </RightMenu>
    </Box>
  );
}
