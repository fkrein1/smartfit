import { useContext, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { Label } from './components/Label';
import { Location } from './components/Location';
import { FormContext } from './contexts/FormContext';

interface APILocation {
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

function App() {
  const [locations, setLocations] = useState<APILocation[]>([]);
  const { dayPeriod, setFilteredLocations, hideClosed } =
    useContext(FormContext);

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

  const filterOpenLocations = () => {
    if (hideClosed) {
      const open = locations.filter((location) => location.opened);
      setFilteredLocations(open.length);
      return open;
    }
    setFilteredLocations(locations.length);
    return locations;
  };

  return (
    <main>
      <Header />
      <div className="max-w-screen-lg m-auto">
        <Heading />
        <Form />
        <Label />
        <div className='md:flex md:flex-wrap md:gap-4 mx-8 md:mb-8'>
          {filterOpenLocations().map((location) => (
            <Location
              key={`${location.id}_${location.title}`}
              title={location.title}
              content={location.content}
              street={location.street}
              region={location.region}
              city_name={location.city_name}
              uf={location.uf}
              opened={location.opened}
              mask={location.mask}
              towel={location.towel}
              fountain={location.fountain}
              locker_room={location.locker_room}
              schedules={location.schedules}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
