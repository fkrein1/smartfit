import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Label } from './components/Label';
import { Location } from './components/Location';

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
    <main>
      <Header />
      <Label />
      {locations.map((location) => (
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
      <Footer />
    </main>
  );
}

export default App;
