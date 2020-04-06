import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import DiaryStoreContext from '@/stores/DiaryStore';
import UIStoreContext from '@/stores/UIStore';
import { Diary } from '@/types';
import { DiaryListContainer, ListContainer, DiaryItemContainer } from './styles';
import Button from '../Button';
import DiaryForm from '../DiaryForm';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import AlertDialog from '../AlertDialog';
import EditDiaryForm from '../EditDiaryForm';

const DiaryList: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  return (
    <>
      <h1 className="modal-title">Päevikud</h1>
      <DiaryListContainer className="modal-body">
        <ListContainer>
          {diaryStore.diaries.map((diary) => (
            <DiaryItem
              diary={diary}
              setActive={diaryStore.setActiveDiary}
              onDelete={() =>
                uiStore.openModal(
                  <AlertDialog
                    title={`Kas oled kindel, et soovid päeviku kustutada?`}
                    description="
                      Päevik kustutatakse jäädavalt. 
                      Kui soovid päeviku säilitada, aga nimekirjast kustutada, siis kasuta eksportimise funktsiooni.
                    "
                    buttons={[
                      {
                        type: 'danger',
                        title: 'Kustuta',
                        onClick: () => diaryStore.deleteDiary(diary.id),
                      },
                    ]}
                  />
                )
              }
              onEdit={() => uiStore.openModal(<EditDiaryForm diary={diary} />)}
              key={diary.id}
            />
          ))}
        </ListContainer>
        <Button
          className="add-diary-btn"
          title="+ Lisa päevik"
          onClick={() => uiStore.openModal(<DiaryForm />)}
        />
      </DiaryListContainer>
    </>
  );
});

interface DiaryItemProps {
  diary: Diary;
  setActive: (diaryId: number) => any;
  onDelete: () => any;
  onEdit: () => any;
}

const DiaryItem: React.FC<DiaryItemProps> = ({ diary, setActive, onDelete, onEdit }) => {
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete();
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation();
    onEdit();
  };

  return (
    <DiaryItemContainer>
      <button className="diary-item" onClick={() => setActive(diary.id)}>
        <div className="diary-name">{diary.name}</div>
        <div className="entry-count">({diary.entries.length})</div>
      </button>
      <div className="action-buttons">
        <button className="btn edit-btn" onClick={handleEdit}>
          <FiEdit />
        </button>
        <button className="btn del-btn" onClick={handleDelete}>
          <FiTrash2 />
        </button>
      </div>
    </DiaryItemContainer>
  );
};

export default DiaryList;
