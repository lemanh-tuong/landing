import React, { ChangeEvent, FC } from 'react';
import styles from './Input.module.scss';

export interface InputProps {
  value: string;
  type: 'text' | 'checkbox' | 'radio';
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputName}>{label}</label>
      <input type={type} className={styles.input} defaultValue={value} onChange={onChange} />
    </div>
  );
};

// class Input extends PureComponent<InputProps> {
//   componentDidMount() {
//     const { ref } = this.props;
//     console.log(ref);
//   }

//   render() {
//     const { value, ref } = this.props;

//     return (
//       <div className={styles.inputBox}>
//         <label className={styles.inputName}>MainTitle</label>
//         <input className={styles.input} value={value} type="text" ref={ref} />
//       </div>
//     );
//   }
// }

export default Input;
