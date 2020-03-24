import React, { useState, useContext, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { formatDateToDTG } from '@/util/helpers';
import { FiArrowRight, FiTrash2 } from 'react-icons/fi';
import { DiaryEntry } from '@/types';
import { EntryListContainer, EntryItemContainer } from './styles';
import { observer } from 'mobx-react-lite';
import DiaryStoreContext from '@/stores/DiaryStore';
import { usePrevious } from '@/util/hooks';

const EntryList: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);

  const listLength = diaryStore.activeDiary?.entries.length || 0;

  const prevLength = usePrevious(listLength) || 0;

  useEffect(() => {
    if (listLength > prevLength) {
      animateScroll.scrollToBottom({
        containerId: 'entry-list-container',
        duration: 200
      });
    }
  }, [listLength]);

  return (
    <EntryListContainer id="entry-list-container">
      {diaryStore.activeDiary?.entries.map((entry, index) => (
        <EntryItem
          entry={entry}
          key={entry.id}
          onDelete={diaryStore.deleteEntry}
          onEdit={diaryStore.editEntry}
        />
      ))}
    </EntryListContainer>
  );
});

interface EntryItemProps {
  entry: DiaryEntry;
  onDelete: (id: number) => any;
  onEdit: (entry: DiaryEntry) => any;
}

const EntryItem: React.FC<EntryItemProps> = observer(({ entry, onDelete, onEdit }) => {
  const handleEdit = (event: React.FocusEvent<HTMLDivElement>) => {
    const { id, textContent } = event.currentTarget;

    onEdit({
      ...entry,
      [id]: textContent
    });
  };

  return (
    <EntryItemContainer>
      <button className="del-btn" onClick={() => onDelete(entry.id)}>
        <FiTrash2 />
      </button>
      <div className="row row-1">
        <div className="recipients">
          <span
            className="from"
            contentEditable={true}
            id="from"
            suppressContentEditableWarning
            onBlur={handleEdit}
          >
            {entry.from || '-'}
          </span>
          <FiArrowRight />
          <span
            className="to"
            contentEditable={true}
            id="to"
            suppressContentEditableWarning
            onBlur={handleEdit}
          >
            {entry.to || '-'}
          </span>
        </div>
        <div className="timestamp">{formatDateToDTG(entry.time)}</div>
      </div>
      <div className="row row-2">
        <div
          id="content"
          className="content"
          contentEditable={true}
          suppressContentEditableWarning
          onBlur={handleEdit}
        >
          {entry.content || '-'}
        </div>
        {entry.rep && <button className="rep-name">{entry.rep.type}</button>}
      </div>
    </EntryItemContainer>
  );
});

export default EntryList;
