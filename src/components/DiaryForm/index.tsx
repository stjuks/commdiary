import React, { useContext } from 'react';
import * as yup from 'yup';
import { observer } from 'mobx-react-lite';
import { Formik } from 'formik';
import TextInput from '../TextInput';
import Button from '../Button';
import { DiaryFormContainer } from './styles';
import DiaryStoreContext from '@/stores/DiaryStore';

const initialValues = {
  name: '',
  entries: []
};

const validationSchema = yup.object({
  name: yup.string().required('Sisesta päeviku nimi.')
});

const DiaryForm: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);

  const handleSubmit = diary => {
    diaryStore.addDiary(diary);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <DiaryFormContainer onSubmit={formikProps.handleSubmit}>
          <TextInput name="name" label="Päeviku nimi" />
          <Button type="submit" title="Lisa päevik" />
        </DiaryFormContainer>
      )}
    </Formik>
  );
});

export default DiaryForm;
