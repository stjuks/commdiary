import React, { ChangeEvent, useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { SelectInputContainer } from './styles';
import { FieldProps, Field, FormikProps } from 'formik';
import { isJson } from '@/util/helpers';

interface SelectInputProps {
  name?: string;
  label: string;
  options: any[];
  value?: any;
  optionLabel: (option: any) => string;
  optionValue?: (option: any) => any;
  onChange?: (value: any, form: FormikProps<any>) => any;
  style?: React.CSSProperties;
}

const SelectInputComponent: React.FC<SelectInputProps & FieldProps> = ({
  label,
  form,
  field,
  options,
  optionLabel,
  optionValue,
  value,
  style,
  onChange
}) => {
  const errorMsg = form.errors[field.name];

  const parseValue = (value: any) => {
    if (isJson(value)) {
      return JSON.parse(value);
    }

    return value;
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (onChange) onChange(value, form);
    else form.setFieldValue(field.name, parseValue(value));
  };

  return (
    <SelectInputContainer className="input-container" style={style}>
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <div className="input-field">
        <select onChange={handleChange} id={field.name} value={value || field.value || ''}>
          <option value=""></option>
          {options.map(option => (
            <option
              value={optionValue ? JSON.stringify(optionValue(option)) : option}
              key={optionLabel(option)}
            >
              {optionLabel(option)}
            </option>
          ))}
        </select>
        <span className="focus-line" />
        <div className="indicator">
          <FiChevronDown />
        </div>
      </div>
      <div className="error-message">{errorMsg}</div>
    </SelectInputContainer>
  );
};

const SelectInput: React.FC<SelectInputProps> = props => (
  <Field {...props} component={SelectInputComponent} />
);

export default SelectInput;
