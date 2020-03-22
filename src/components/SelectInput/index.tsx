import React, { ChangeEvent } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { SelectInputContainer } from './styles';
import { FieldProps, Field } from 'formik';
import { isJson } from '@/util/helpers';

interface SelectOption {
  label: string;
  value: any;
}

interface SelectInputProps {
  name: string;
  label: string;
  options: SelectOption[];
  style?: React.CSSProperties;
}

const SelectInputComponent: React.FC<SelectInputProps & FieldProps> = ({
  label,
  form,
  field,
  options,
  style
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

    form.setFieldValue(field.name, parseValue(value));
  };

  return (
    <SelectInputContainer className="input-container" style={style}>
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <div className="input-field">
        <select onChange={handleChange} defaultValue={undefined} id={field.name}>
          <option value={undefined} selected={field.value === undefined}></option>
          {options.map(option => (
            <option value={JSON.stringify(option.value)} key={option.label}>
              {option.label}
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
