import { ChangeEvent, FC } from 'react';

import styles from './FormField.module.scss';

type FormFieldProps = {
  name: string;
  label: string;
  setValue: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormFieldProps> = ({ name, label, setValue, ...props }) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setValue(target);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} className={styles.input} onChange={handleChangeValue} {...props} />
    </div>
  );
};

export default FormField;
