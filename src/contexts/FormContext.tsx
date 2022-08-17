import { createContext, ReactNode, useState } from 'react';

type FormContextProviderProps = {
  children: ReactNode;
};

type FormContextType = {
  dayPeriod: string;
  setDayPeriod: (dayPeriod: string) => void;
  search: string;
  setSearch: (search: string) => void;
  hideClosed: boolean;
  setHideClosed: (hideClosed: boolean) => void;
};

export const FormContext = createContext({} as FormContextType);

export function FormContextProvider(props: FormContextProviderProps) {
  const [dayPeriod, setDayPeriod] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [hideClosed, setHideClosed] = useState<boolean>(true);

  return (
    <FormContext.Provider
      value={{
        dayPeriod,
        setDayPeriod,
        search,
        setSearch,
        hideClosed,
        setHideClosed,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
