import React, { ChangeEvent } from 'react';
import { Field, FieldProps, FormikProps } from 'formik';
import { CheckboxContainer } from './styles';

export interface CheckboxValue {
  checked: boolean;
  value: any;
  name: string;
}

interface CheckboxProps {
  name: string;
  label: string;
  value: any;
  className?: string;
  onChange?: (value: CheckboxValue, form: FormikProps<any>) => any;
  checked?: (value: any) => any;
}

const CheckboxComponent: React.FC<CheckboxProps & FieldProps> = ({
  field,
  form,
  name,
  value,
  label,
  onChange,
  className,
  checked
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (onChange) onChange({ checked, value, name: field.name }, form);
    else {
      let newValues = Object.assign([], form.values[field.name]);

      if (checked) {
        newValues.push(value);
      } else {
        newValues = newValues.filter(val => val !== value);
      }

      form.setFieldValue(field.name, newValues);
    }
  };

  const stringValue = JSON.stringify(value);

  return (
    <CheckboxContainer className={`checkbox-container ${className || ''}`}>
      <input
        type="checkbox"
        id={stringValue}
        name={name}
        onChange={handleChange}
        checked={checked ? checked(value) : field.value.includes(value)}
      />
      <label htmlFor={stringValue} className="check-box" />
      <label htmlFor={stringValue} className="label">
        {label}
      </label>
    </CheckboxContainer>
  );
};

const Checkbox: React.FC<CheckboxProps> = props => (
  <Field {...props} component={CheckboxComponent} />
);

export default Checkbox;
