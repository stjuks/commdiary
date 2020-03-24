import React, { ChangeEvent, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { SelectInputContainer } from './styles';
import { FieldProps, Field } from 'formik';
import { isJson } from '@/util/helpers';

interface SelectInputProps {
  name: string;
  label: string;
  options: any[];
  optionLabel: (option: any) => string;
  optionValue?: (option: any) => any;
  style?: React.CSSProperties;
}

const SelectInputComponent: React.FC<SelectInputProps & FieldProps> = ({
  label,
  form,
  field,
  options,
  optionLabel,
  optionValue,
  style
}) => {
  const [value, setValue] = useState<any>(undefined);
  const errorMsg = form.errors[field.name];

  const parseValue = (value: any) => {
    if (isJson(value)) {
      return JSON.parse(value);
    }

    return value;
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setValue(value);
    form.setFieldValue(field.name, parseValue(value));
  };

  return (
    <SelectInputContainer className="input-container" style={style}>
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <div className="input-field">
        <select onChange={handleChange} defaultValue={undefined} id={field.name} value={!field.value || value}>
          <option value=""></option>
          {options.map(option => (
            <option
              value={optionValue ? JSON.stringify(optionValue(option)) : JSON.stringify(option)}
              key={optionLabel(option)}
            >
              {optionLabel(option)}
            </option>
          ))}
        </select>
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
