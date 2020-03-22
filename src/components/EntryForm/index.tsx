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
  content: yup.string().required('Sisesta sõnumi sisu.')
});

const SHIFT = 16;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

const repOptions = [
  {
    label: 'MIST',
    value: {
      name: 'MIST',
      mechanism: '',
      injuries: '',
      signs: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: ''
      }
    }
  },
  {
    label: 'CONTACTREP',
    value: {
      name: 'CONTACTREP'
    }
  },
  {
    label: 'JAMREP',
    value: {
      name: 'JAMREP'
    }
  },
  {
    label: 'INTREP',
    value: {
      name: 'INTREP'
    }
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
    form: FormikProps<any>
  ) => {
    const diary = diaryStore.activeDiary;

    if (diary) {
      const { entries } = diary;

      const hasEntries = entries.length > 0;
      if (keyMap[DOWN_ARROW]) {
        form.setValues(initialValues);
      } else if (hasEntries && keyMap[UP_ARROW] && keyMap[SHIFT]) {
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
              <SelectInput label="REP" name="rep" options={repOptions} style={{ width: '5rem' }} />
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
          {formikProps.values.rep && <RepForm type={formikProps.values.rep.name} />}
          <Button type="submit" title="Loo sissekanne" />
        </EntryFormContainer>
      )}
    </Formik>
  );
});

export default EntryForm;
