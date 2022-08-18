import { createContext, ReactNode, useEffect, useState } from 'react';

export interface APILocation {
  id: number;
  title: string;
  content?: string;
  street?: string;
  region?: string;
  city_name?: string;
  uf?: string;
  opened?: boolean;
  mask?: string;
  towel?: string;
  fountain?: string;
  locker_room?: string;
  schedules?: [{ weekdays: string; hour: string }];
}

type FormContextProviderProps = {
  children: ReactNode;
};

type FormContextType = {
  dayPeriod: string;
  setDayPeriod: (dayPeriod: string) => void;
  hideClosed: boolean;
  setHideClosed: (hideClosed: boolean) => void;
  search: string;
  setSearch: (search: string) => void;
  locations: APILocation[];
  setLocations: (locations: APILocation[]) => void;
};

export const FormContext = createContext({} as FormContextType);

export function FormContextProvider(props: FormContextProviderProps) {
  const [dayPeriod, setDayPeriod] = useState<string>('all');
  const [hideClosed, setHideClosed] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [locations, setLocations] = useState<APILocation[]>([]);

  useEffect(() => {
    const getLocations = async () => {
      const stores = await fetch(
        'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
      );
      const { locations } = await stores.json();
      setLocations(locations);
    };
    getLocations();
  }, []);

  return (
    <FormContext.Provider
      value={{
        dayPeriod,
        setDayPeriod,
        hideClosed,
        setHideClosed,
        search,
        setSearch,
        locations,
        setLocations,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
