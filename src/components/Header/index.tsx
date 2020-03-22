import React, { useContext } from 'react';

import { HeaderContainer } from './styles';
import { FiPlusCircle, FiList } from 'react-icons/fi';
import DiaryForm from '../DiaryForm';
import DiaryList from '../DiaryList';
import UIStoreContext from '@/stores/UIStore';
import DiaryStoreContext from '@/stores/DiaryStore';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const uiStore = useContext(UIStoreContext);
  const diaryStore = useContext(DiaryStoreContext);

  return (
    <HeaderContainer>
      <div className="title">
        <h4 className="sub-title">{diaryStore.activeDiary?.name}</h4>
        <h2>{title}</h2>
      </div>
      <div className="action-bar">
        <button className="btn list-btn" onClick={() => uiStore.openModal(<DiaryList />)}>
          <FiList />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
