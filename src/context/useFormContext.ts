import { useContext } from 'react';

import { FormContext } from './formProvider';

export const useFormContext = () => useContext(FormContext);
