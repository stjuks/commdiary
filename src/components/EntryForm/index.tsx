import React, { useRef, useContext, useState, useEffect } from 'react';
import { Formik, FormikHelpers, FormikProps, useFormikContext } from 'formik';

import { EntryFormContainer, MainFormFields } from './styles';
import * as yup from 'yup';
import TextInput from '../TextInput';
import Button from '../Button';
import DiaryStoreContext from '@/stores/DiaryStore';
import { observer } from 'mobx-react-lite';
import SelectInput from '../SelectInput';
import RepForm from '../RepForm';
import { RepType, Rep } from '@/types';
import { useHotkeys } from '@/util/hooks';
import reps from '@/util/reps';

interface EntryFormValues {
  from: string;
  to: string;
  content: string;
  rep?: Rep;
}

const initialValues: EntryFormValues = {
  from: '',
  to: '',
  content: '',
  rep: undefined,
};

const validationSchema = yup.object({
  content: yup.string(),
});

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
  const [repType, setRepType] = useState<undefined | RepType>(undefined);
  const { handleSubmit, values, setValues, resetForm } = useFormikContext<EntryFormValues>();
  const contentInputRef = useRef<HTMLInputElement>(null);

  const focusContentInput = () => {
    if (contentInputRef && contentInputRef.current) {
      contentInputRef.current.focus();
    }
  };

  const handleRepChange = (type: RepType) => {
    if (!type || (values.rep && values.rep.type === type)) {
      setValues({ ...values, rep: undefined });
      setRepType(undefined);
    } else if (type) {
      setValues({ ...values, rep: { type } });
      setRepType(type);
    }
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

  const onSubmit = (event) => {
    handleSubmit(event);
    setRepType(undefined);
    focusContentInput();
  };

  const handleClear = () => {
    resetForm();
    setRepType(undefined);
  };

  useHotkeys(
    {
      'control+shit+c, meta+shift+c': () => handleRepChange('CONTACTREP'),
      'control+shift+m, meta+shift+m': () => handleRepChange('MIST'),
      'control+shift+j, meta+shift+j': () => handleRepChange('JAMREP'),
      'control+shift+s, meta+shift+s': () => handleRepChange('SITREP'),
      'control+shift+i, meta+shift+i': () => handleRepChange('INTREP'),
      'control+shift+a, meta+shift+a': () => handleRepChange('AAREP'),
      'control+shift+9, meta+shift+9': () => handleRepChange('NINELINER'),
      'control+shift+b, meta+shift+b': () => handleRepChange('BOMBREP'),
      'control+shift+r, meta+shift+r': () => handleRepChange('RECOVERYREQ'),
      'shift+arrowup, shift+arrowup': () => selectPreviousRecipients(true),
      arrowup: selectPreviousRecipients,
      arrowdown: handleClear,
    },
    [values]
  );

  return (
    <EntryFormContainer onSubmit={onSubmit}>
      <MainFormFields>
        <div className="short-fields">
          <SelectInput
            label="REP"
            value={repType}
            onChange={handleRepChange}
            options={Object.keys(reps).map((key) => key)}
            optionLabel={(option) => option}
          />
          <TextInput name="to" label="Kellele" />
          <TextInput name="from" label="Kellelt" />
        </div>
        <div className="content-field">
          <TextInput name="content" ref={contentInputRef} label="Sisu" style={{ flex: 1 }} />
        </div>
      </MainFormFields>
      <RepForm structure={repType ? reps[repType] : undefined} />
      <Button type="submit" title="Loo sissekanne" />
    </EntryFormContainer>
  );
});

export default EntryForm;
