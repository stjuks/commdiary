import React, { useRef, useContext } from 'react';
import { Formik, FormikHelpers, FormikProps, useFormikContext } from 'formik';

import { EntryFormContainer, MainFormFields } from './styles';
import * as yup from 'yup';
import TextInput from '../TextInput';
import Button from '../Button';
import DiaryStoreContext from '@/stores/DiaryStore';
import { observer } from 'mobx-react-lite';
import SelectInput from '../SelectInput';
import RepForm from '../RepForm';
import { RepType } from '@/types';
import { useHotkeys } from '@/util/hooks';

interface EntryFormValues {
  from: string;
  to: string;
  content: string;
  rep?: any;
}

const initialValues: EntryFormValues = {
  from: '',
  to: '',
  content: '',
  rep: {
    type: undefined
  }
};

const validationSchema = yup.object({
  content: yup.string()
});

const repOptions: RepType[] = ['MIST', 'CONTACTREP', 'JAMREP', 'INTREP'];

const EntryForm: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);

  const handleSubmit = (entry, formikHelpers: FormikHelpers<any>) => {
    diaryStore.addEntry(entry);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      <EntryFormComponent />
    </Formik>
  );
});

const EntryFormComponent: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const { handleSubmit, values, setValues, resetForm } = useFormikContext<any>();
  const contentInputRef = useRef<HTMLInputElement>(null);

  const focusContentInput = () => {
    if (contentInputRef && contentInputRef.current) {
      contentInputRef.current.focus();
    }
  };

  const onSubmit = event => {
    handleSubmit(event);
    focusContentInput();
  };

  const displayMist = () => {
    if (values.rep?.type === 'MIST') setValues({ ...values, rep: { type: undefined } });
    else setValues({ ...values, rep: { type: repOptions[0] } });
  };

  const selectPreviousRecipients = (switchRecipients?: boolean) => {
    const diary = diaryStore.activeDiary;

    focusContentInput();

    if (diary) {
      const { entries } = diary;

      const lastEntry = entries[entries.length - 1];

      if (lastEntry) {
        const { from, to } = lastEntry;
        if (switchRecipients) setValues({ ...values, from: to, to: from });
        else setValues({ ...values, from, to });
      }
    }
  };

  useHotkeys(
    {
      'control+m,meta+m': displayMist,
      'control+arrowup,meta+arrowup': () => selectPreviousRecipients(true),
      arrowup: selectPreviousRecipients,
      arrowdown: resetForm
    },
    [values]
  );

  return (
    <>
      <EntryFormContainer onSubmit={onSubmit}>
        <MainFormFields>
          <div className="short-fields">
            <SelectInput
              label="REP"
              name="rep.type"
              options={repOptions}
              optionLabel={option => option}
              style={{ width: '5rem' }}
            />
            <TextInput name="to" label="Kellele" style={{ width: '5rem' }} />
            <TextInput name="from" label="Kellelt" style={{ width: '5rem' }} />
          </div>
          <div className="content-field">
            <TextInput name="content" ref={contentInputRef} label="Sisu" style={{ flex: 1 }} />
          </div>
        </MainFormFields>
        <RepForm type={values.rep?.type} />
        <Button type="submit" title="Loo sissekanne" />
      </EntryFormContainer>
    </>
  );
});

export default EntryForm;
