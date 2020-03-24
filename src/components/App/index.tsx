import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/util/styled';

import { AppContainer } from './styles';
import EntryForm from '../EntryForm';
import EntryList from '../EntryList';
import Header from '../Header';
import { observer } from 'mobx-react-lite';
import DiaryStoreContext from '@/stores/DiaryStore';
import Button from '../Button';
import Modal from '../Modal';
import UIStoreContext from '@/stores/UIStore';
import DiaryList from '../DiaryList';
import DiaryForm from '../DiaryForm';

const App: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  const hasDiaries = diaryStore.diaries.length > 0;

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header title="Sidepäevik" />
        {diaryStore.activeDiary ? (
          <>
            <EntryForm />
            <EntryList />
          </>
        ) : (
          <div className="placeholder-text">
            <div className="description">
              Ühtegi päevikut pole {hasDiaries ? 'valitud' : 'lisatud'}.
            </div>
            {hasDiaries ? (
              <Button
                type="button"
                title="Vali päevik"
                onClick={() => uiStore.openModal(<DiaryList />)}
              />
            ) : (
              <Button
                type="button"
                title="Lisa päevik"
                onClick={() => uiStore.openModal(<DiaryForm />)}
              />
            )}
          </div>
        )}
      </AppContainer>
      <Modal />
    </ThemeProvider>
  );
});

export default App;
