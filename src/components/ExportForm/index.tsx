import React, { useContext, useState } from 'react';
import { ExportFormContainer } from './styles';
import * as yup from 'yup';
import Button from '../Button';
import Checkbox, { CheckboxValue } from '../Checkbox';
import DiaryStoreContext from '@/stores/DiaryStore';
import { observer } from 'mobx-react-lite';
import { Formik, FormikProps } from 'formik';

const initialValues = {
  diaries: []
};

const ExportForm: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);

  const handleSubmit = ({ diaries }) => {
    diaryStore.exportDiaries(diaries);
  };

  const handleSelectAll = ({ checked, value, name }: CheckboxValue, form: FormikProps<any>) => {
    if (checked) form.setFieldValue(name, value);
    else form.setFieldValue(name, []);
  };

  const validationSchema = yup.object({
    diaries: yup.array().required('Vali vähemalt üks päevik.')
  });

  return (
    <>
      <h1 className="modal-title">Ekspordi päevikud</h1>
      <ExportFormContainer className="modal-body">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={false}
        >
          {formikProps => (
            <form onSubmit={formikProps.handleSubmit}>
              <Checkbox
                className="select-all"
                label="Kõik"
                value={diaryStore.diaries.map(diary => diary.id)}
                name="diaries"
                checked={value => value.length === formikProps.values.diaries.length}
                onChange={handleSelectAll}
              />
              <div className="checkboxes">
                {diaryStore.diaries.map(diary => (
                  <Checkbox name="diaries" value={diary.id} label={diary.name} key={diary.id} />
                ))}
              </div>
              <div className="error-message">{formikProps.errors.diaries}</div>
              <Button title="Ekspordi" type="submit" />
            </form>
          )}
        </Formik>
      </ExportFormContainer>
    </>
  );
});

export default ExportForm;
