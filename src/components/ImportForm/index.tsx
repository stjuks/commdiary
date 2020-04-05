import React, { useState, useEffect, useContext } from 'react';
import { ImportFormContainer } from './styles';
import Dropzone from '../Dropzone';
import Button from '../Button';
import DiaryStoreContext from '@/stores/DiaryStore';
import UIStoreContext from '@/stores/UIStore';
import { Diary } from '@/types';
import AlertDialog from '../AlertDialog';

const ImportForm: React.FC = () => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  const [file, setFile] = useState<File | undefined>(undefined);

  const handleSubmit = async () => {
    if (file) {
      const loadedDiaries: any = JSON.parse(await new Response(file).text());

      const { duplicates } = diaryStore.findDuplicateDiaries(loadedDiaries);

      uiStore.closeModal();

      if (duplicates.length > 0) {
        const duplicateList = duplicates.map((diary) => diary.name).join(', ');

        return uiStore.openModal(
          <AlertDialog
            title={
              duplicates.length > 1
                ? `Päevikud ${duplicateList} juba eksisteerivad.`
                : `Päevik ${duplicateList} juba eksisteerib.`
            }
            description="Kas kirjutada olemasolevad üle või jätta alles?"
            buttons={[
              {
                title: 'Kirjuta üle',
                type: 'danger',
                onClick: () => diaryStore.importDiaries(loadedDiaries, 'OVERWRITE_EXISTING'),
              },
              {
                title: 'Jäta alles',
                type: 'neutral',
                onClick: () => diaryStore.importDiaries(loadedDiaries, 'LEAVE_EXISTING'),
              },
            ]}
          />
        );
      }

      diaryStore.importDiaries(loadedDiaries, 'LEAVE_EXISTING');
    }
  };

  return (
    <>
      <h1 className="modal-title">Impordi päevikud</h1>
      <ImportFormContainer className="modal-body">
        <Dropzone onChange={(files) => setFile(files[0])} dropzoneOptions={{ accept: '.json' }} />
        <Button type="button" title="Impordi" onClick={handleSubmit} />
      </ImportFormContainer>
    </>
  );
};

export default ImportForm;
