import React, { useContext } from 'react';
import { ExportFormContainer } from './styles';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../Button';
import Checkbox, { CheckboxValue } from '../Checkbox';
import DiaryStoreContext from '@/stores/DiaryStore';
import UIStoreContext from '@/stores/UIStore';
import { observer } from 'mobx-react-lite';
import { Formik, FormikProps } from 'formik';

const initialValues = {
  diaries: [],
};

const ExportForm: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const uiStore = useContext(UIStoreContext);

  const history = useHistory();

  const handleSubmit = (formikProps: FormikProps<any>, mode: 'print' | 'json') => {
    const { diaries } = formikProps.values;

    if (formikProps.isValid) {
      if (mode === 'json') {
        diaryStore.exportDiaries(diaries);
      } else if (mode === 'print') {
        uiStore.closeModal();
        history.push({ pathname: '/print', state: { diaries } });
      }
    }
  };

  const handleSelectAll = ({ checked, value, name }: CheckboxValue, form: FormikProps<any>) => {
    if (checked) form.setFieldValue(name, value);
    else form.setFieldValue(name, []);
  };

  const validationSchema = yup.object({
    diaries: yup.array().required('Vali vähemalt üks päevik.'),
  });

  return (
    <>
      <h1 className="modal-title">Ekspordi päevikud</h1>
      <ExportFormContainer className="modal-body">
        <Formik
          initialValues={initialValues}
          onSubmit={() => void 0}
          validationSchema={validationSchema}
          isInitialValid={false}
          validateOnBlur={false}
        >
          {(formikProps) => (
            <form onSubmit={formikProps.handleSubmit}>
              <Checkbox
                className="select-all"
                label="Kõik"
                value={diaryStore.diaries.map((diary) => diary.id)}
                name="diaries"
                checked={(value) => value.length === formikProps.values.diaries.length}
                onChange={handleSelectAll}
              />
              <div className="checkboxes">
                {diaryStore.diaries.map((diary) => (
                  <Checkbox name="diaries" value={diary.id} label={diary.name} key={diary.id} />
                ))}
              </div>
              <div className="error-message">{formikProps.errors.diaries}</div>
              <Button
                id="jsonBtn"
                title="Ekspordi JSON"
                type="submit"
                onClick={() => handleSubmit(formikProps, 'json')}
              />
              <Button
                id="printBtn"
                title="Prindi"
                type="submit"
                onClick={() => handleSubmit(formikProps, 'print')}
              />
            </form>
          )}
        </Formik>
      </ExportFormContainer>
    </>
  );
});

export default ExportForm;
