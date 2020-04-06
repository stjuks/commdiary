import React, { useContext } from 'react';
import { Diary } from '@/types';
import * as yup from 'yup';
import { EditDiaryFormContainer } from './styles';
import { Formik } from 'formik';
import DiaryStoreContext from '@/stores/DiaryStore';
import TextInput from '../TextInput';
import Button from '../Button';
import UIStoreContext from '@/stores/UIStore';

interface EditDiaryFormProps {
  diary: Diary;
}

const validationSchema = yup.object({
  name: yup.string().required('Sisesta päeviku nimi.'),
});

const EditDiaryForm: React.FC<EditDiaryFormProps> = ({ diary }) => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  const handleSubmit = (values) => {
    diaryStore.editDiary(diary.id, values);
    uiStore.closeModal();
  };

  const initialValues = {
    name: diary.name,
  };

  return (
    <>
      <h2 className="modal-title">Muuda päevikut</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit} className="modal-body">
            <TextInput name="name" label="Päeviku nimi" />
            <Button
              type="submit"
              title="Muuda päevik"
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default EditDiaryForm;
