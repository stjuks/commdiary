import React, { useState, useEffect, useContext } from 'react';
import { ImportFormContainer } from './styles';
import Dropzone from '../Dropzone';
import Button from '../Button';
import DiaryStoreContext from '@/stores/DiaryStore';

const ImportForm: React.FC = () => {
  const diaryStore = useContext(DiaryStoreContext);
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleSubmit = () => {
    if (file) diaryStore.importDiaries(file, true);
  };

  return (
    <>
      <h1 className="modal-title">Impordi päevikud</h1>
      <ImportFormContainer className="modal-body">
        <Dropzone onChange={files => setFile(files[0])} dropzoneOptions={{ accept: '.json' }} />
        <Button type="button" title="Impordi" onClick={handleSubmit} />
      </ImportFormContainer>
    </>
  );
};

export default ImportForm;
