import { useState, KeyboardEvent, FocusEvent } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

import styles from './PasswordInput.module.css';
import { convertUnicodeToChar } from '../../utils/helpers';

const enum keyName {
  control = 'Control',
  alt = 'Alt',
}

const enum passwordType {
  password = 'password',
  text = 'text',
}

interface Props {
  placeholder: string;
}

export default function PasswordInput<T extends FieldValues>(
  props: UseControllerProps<T> & Props
) {
  const { field } = useController(props);

  const [lastInput, setLastInput] = useState('');
  const [password, setPassword] = useState('');
  const [isModDown, setIsModDown] = useState(false);

  const addCharToInput = (char: string, input: HTMLInputElement) => {
    const newPassword = `${password}${char}`;

    field.onChange(newPassword);
    input.type = passwordType.password;

    setLastInput('');
    setPassword(newPassword);
  };

  const handleUnicodeUserInput = (
    character: string,
    input: HTMLInputElement
  ) => {
    const hexSymbol = character.codePointAt(0);

    if (
      hexSymbol &&
      ((hexSymbol >= 97 && hexSymbol <= 102) ||
        (hexSymbol >= 48 && hexSymbol <= 57))
    ) {
      const newLastInput = `${lastInput}${character}`;
      setLastInput(newLastInput);

      field.onChange(`${password}${newLastInput}`);
      input.type = passwordType.text;

      if (newLastInput.length === 4) {
        const char = convertUnicodeToChar(newLastInput);
        addCharToInput(char, input);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const passwordInput = e.target as HTMLInputElement;
    const keyValue = e.key;

    if (e.metaKey) return;
    if (keyValue === keyName.control) {
      setIsModDown(true);
    }

    if (e.ctrlKey) {
      e.preventDefault();
      handleUnicodeUserInput(keyValue, passwordInput);
    } else setPassword(field.value);

    if (keyValue === keyName.alt) {
      passwordInput.type = passwordType.text;
    }
  };

  const handleControlKeyUp = () => {
    field.onChange(password);
    setIsModDown(false);
    setLastInput('');
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const passwordInput = e.target as HTMLInputElement;

    if (e.key === keyName.control) {
      handleControlKeyUp();
    }

    passwordInput.type = passwordType.password;
  };

  const handleFocus = (e: FocusEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const handleBlur = (e: FocusEvent) => {
    const passwordInput = e.target as HTMLInputElement;
    setPassword('');
    passwordInput.type = passwordType.password;
  };

  return (
    <input
      type={passwordType.password}
      {...field}
      placeholder={props.placeholder}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={isModDown ? styles.modDown : undefined}
    />
  );
}
