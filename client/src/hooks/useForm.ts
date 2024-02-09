/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface IEvent {
  target: {
    name: string;
    value: string;
    type: string;
    checked: boolean;
  };
}

export const useForm = (initialFields: any) => {
  const [fields, setFields] = useState(initialFields);

  const handleChange = ({ target }: IEvent) => {
    const field: string = target.name;
    let value: boolean | number | string;
    switch (target.type) {
      case 'number':
        value = +target.value;
        break;
      case 'checkbox':
        value = target.checked;
        break;
      default:
        value = target.value;
        break;
    }
    setFields((prevFields: any) => ({ ...prevFields, [field]: value }));
  };

  return [fields, handleChange, setFields];
};
