import { createContext, ReactNode, useState } from 'react';

type FormContextProviderProps = {
  children: ReactNode;
};

type FormContextType = {
  dayPeriod: string;
  setDayPeriod: (dayPeriod: string) => void;
  filteredLocations: number;
  setFilteredLocations: (filteredLocations: number) => void;
  hideClosed: boolean;
  setHideClosed: (hideClosed: boolean) => void;
};

export const FormContext = createContext({} as FormContextType);

export function FormContextProvider(props: FormContextProviderProps) {
  const [dayPeriod, setDayPeriod] = useState<string>('all');
  const [filteredLocations, setFilteredLocations] = useState<number>(0);
  const [hideClosed, setHideClosed] = useState<boolean>(true);

  return (
    <FormContext.Provider
      value={{
        dayPeriod,
        setDayPeriod,
        filteredLocations,
        setFilteredLocations,
        hideClosed,
        setHideClosed,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
