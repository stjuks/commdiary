import React, { CSSProperties, forwardRef, KeyboardEvent, useState } from 'react';
import { Field, FieldProps, FormikProps } from 'formik';
import { TextInputContainer } from './styles';

interface TextInputProps {
  name: string;
  label: string;
  style?: CSSProperties;
  onKeyPress?: (
    keysPressed: { [key: number]: boolean },
    form: FormikProps<any>,
    event: KeyboardEvent
  ) => any;
  onKeyDown?: (event: KeyboardEvent, form: FormikProps<any>) => any;
  ref?: React.RefObject<HTMLInputElement>;
}

const TextInputComponent: React.FC<TextInputProps & FieldProps> = forwardRef(
  ({ field, form, label, style, onKeyDown, onKeyPress }, ref) => {
    const errorMsg = form.errors[field.name];
    const [keysPressed, setKeysPressed] = useState<{ [key: string]: boolean }>({});

    const handleKeyDown = (event: KeyboardEvent) => {
      if (onKeyPress) {
        const newKeysPressed = { ...keysPressed, [event.keyCode]: true };
        setKeysPressed(newKeysPressed);
        onKeyPress(newKeysPressed, form, event);
      }
      if (onKeyDown) onKeyDown(event, form);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (onKeyPress) setKeysPressed({});
    };

    return (
      <TextInputContainer style={style} className="input-container">
        <label className="label" htmlFor={field.name}>
          {label}
        </label>
        <div className="input-field">
          <input
            {...field}
            value={field.value || ''}
            type="text"
            id={field.name}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            ref={ref}
          />
        </div>
        <div className="error-message">{errorMsg}</div>
      </TextInputContainer>
    );
  }
);

const TextInput: React.FC<TextInputProps> = React.forwardRef((props, ref) => (
  <Field name={props.name}>
    {fieldProps => <TextInputComponent {...fieldProps} {...props} ref={ref} />}
  </Field>
));

export default TextInput;
