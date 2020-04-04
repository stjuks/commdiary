import React, { useContext } from 'react';

import { HeaderContainer } from './styles';
import { FiList, FiDownload, FiUpload, FiInfo } from 'react-icons/fi';
import ExportForm from '../ExportForm';
import DiaryList from '../DiaryList';
import UIStoreContext from '@/stores/UIStore';
import DiaryStoreContext from '@/stores/DiaryStore';
import ImportForm from '../ImportForm';
import Info from '../Info';

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
        <button
          className="btn info-btn tooltip"
          data-tooltip="Hotkeyd"
          onClick={() => uiStore.openModal(<Info />)}
        >
          <FiInfo />
        </button>
        <button
          className="btn import-btn tooltip"
          data-tooltip="Impordi"
          onClick={() => uiStore.openModal(<ImportForm />)}
        >
          <FiDownload />
        </button>
        {diaryStore.diaries.length > 0 && (
          <>
            <button
              className="btn export-btn tooltip"
              data-tooltip="Ekspordi"
              onClick={() => uiStore.openModal(<ExportForm />)}
            >
              <FiUpload />
            </button>
            <button
              className="btn list-btn tooltip"
              data-tooltip="Päevikud"
              onClick={() => uiStore.openModal(<DiaryList />)}
            >
              <FiList />
            </button>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
