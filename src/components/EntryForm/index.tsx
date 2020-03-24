import React, { useRef, useContext } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';

import { EntryFormContainer, MainFormFields } from './styles';
import * as yup from 'yup';
import TextInput from '../TextInput';
import Button from '../Button';
import DiaryStoreContext from '@/stores/DiaryStore';
import { observer } from 'mobx-react-lite';
import SelectInput from '../SelectInput';
import RepForm from '../RepForm';
import { Rep } from '@/types';

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
  rep: undefined
};

const validationSchema = yup.object({
  content: yup.string()
});

const UP_ARROW = 38;
const CTRL = 18;
const CMD = 91;
const DOWN_ARROW = 40;
const M_KEY = 77;

const repOptions = [
  {
    type: 'MIST',
    mechanism: '',
    injuries: '',
    signs: {
      a: '',
      b: '',
      c: '',
      d: '',
      e: ''
    },
    treatment: ''
  },
  {
    type: 'CONTACTREP'
  },
  {
    type: 'JAMREP'
  },
  {
    type: 'INTREP'
  }
];

const EntryForm: React.FC = observer(() => {
  const diaryStore = useContext(DiaryStoreContext);
  const toInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (entry, formikHelpers: FormikHelpers<any>) => {
    diaryStore.addEntry(entry);
    formikHelpers.resetForm();
  };

  const selectRecipientsWithArrows = (
    keyMap: { [key: number]: boolean },
    form: FormikProps<any>,
    event: React.KeyboardEvent
  ) => {
    const diary = diaryStore.activeDiary;

    if (diary) {
      const { entries } = diary;

      const hasEntries = entries.length > 0;
      if (keyMap[DOWN_ARROW]) {
        form.setValues(initialValues);
      } else if (keyMap[M_KEY] && (keyMap[CMD] || keyMap[CTRL])) {
        event.preventDefault();
        form.setValues({ ...form.values, rep: repOptions[0] });
      } else if (hasEntries && keyMap[UP_ARROW] && (keyMap[CMD] || keyMap[CTRL])) {
        const { from, to } = entries[entries.length - 1];
        form.setValues({ ...form.values, from: to, to: from });
      } else if (hasEntries && keyMap[UP_ARROW]) {
        const { from, to } = entries[entries.length - 1];
        form.setValues({ ...form.values, from, to });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <EntryFormContainer onSubmit={formikProps.handleSubmit}>
          <MainFormFields>
            <div className="short-fields">
              <SelectInput
                label="REP"
                name="rep"
                options={repOptions}
                optionLabel={option => option.type}
                style={{ width: '5rem' }}
              />
              <TextInput
                name="to"
                label="Kellele"
                style={{ width: '5rem' }}
                ref={toInputRef}
                onKeyPress={selectRecipientsWithArrows}
              />
              <TextInput
                name="from"
                label="Kellelt"
                style={{ width: '5rem' }}
                onKeyPress={selectRecipientsWithArrows}
              />
            </div>
            <div className="content-field">
              <TextInput
                name="content"
                label="Sisu"
                style={{ flex: 1 }}
                onKeyPress={selectRecipientsWithArrows}
              />
            </div>
          </MainFormFields>
          <RepForm type={formikProps.values.rep?.type} />
          <Button type="submit" title="Loo sissekanne" />
        </EntryFormContainer>
      )}
    </Formik>
  );
});

export default EntryForm;
