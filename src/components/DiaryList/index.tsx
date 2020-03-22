import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import DiaryStoreContext from '@/stores/DiaryStore';
import UIStoreContext from '@/stores/UIStore';
import { Diary } from '@/types';
import { DiaryListContainer, ListContainer, DiaryItemContainer } from './styles';
import Button from '../Button';
import DiaryForm from '../DiaryForm';
import { FiTrash2 } from 'react-icons/fi';

const DiaryList: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  return (
    <DiaryListContainer>
      <ListContainer>
        {diaryStore.diaries.map(diary => (
          <DiaryItem
            diary={diary}
            setActive={diaryStore.setActiveDiary}
            onDelete={diaryStore.deleteDiary}
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
  );
});

interface DiaryItemProps {
  diary: Diary;
  setActive: (diaryId: number) => any;
  onDelete: (diaryId: number) => any;
}

const DiaryItem: React.FC<DiaryItemProps> = ({ diary, setActive, onDelete }) => {
  const [isHovering, setHovering] = useState(false);

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete(diary.id);
  };

  return (
    <DiaryItemContainer
      tabIndex={0}
      onClick={() => setActive(diary.id)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="diary-name">{diary.name}</div>
      <div className="entry-count">({diary.entries.length})</div>
      {isHovering && (
        <button className="btn del-btn" onClick={handleDelete}>
          <FiTrash2 />
        </button>
      )}
    </DiaryItemContainer>
  );
};

export default DiaryList;
