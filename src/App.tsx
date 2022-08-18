import { useContext } from 'react';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { Label } from './components/Label';
import { Location } from './components/Location';
import { APILocation, FormContext } from './contexts/FormContext';

function App() {
  const { dayPeriod, setFilteredLocations, hideClosed, search, locations } =
    useContext(FormContext);

  const filterOpenLocations = (locations: APILocation[]) => {
    if (hideClosed) {
      const open = locations.filter((location) => location.opened);
      return open;
    }
    return locations;
  };

  const filterByTimeOfDay = (locations: APILocation[]) => {
    if (dayPeriod === 'all') {
      return locations;
    }
    if (dayPeriod === 'morning') {
      return locations.filter((location) => {
        if (location.schedules) {
          if (!location.schedules[0].hour.includes(' às ')) return;
          const time = location.schedules[0].hour.split(' às ');
          const open = Number(time[0].substring(0, 2));
          const close = Number(time[1].substring(0, 2));
          if (open <= 6 && close >= 12) return true;
        }
      });
    }
    if (dayPeriod === 'afternoon') {
      return locations.filter((location) => {
        if (location.schedules) {
          if (!location.schedules[0].hour.includes(' às ')) return;
          const time = location.schedules[0].hour.split(' às ');
          const open = Number(time[0].substring(0, 2));
          const close = Number(time[1].substring(0, 2));
          if (open <= 12 && close >= 18) return true;
        }
      });
    }
    if (dayPeriod === 'night') {
      return locations.filter((location) => {
        if (location.schedules) {
          if (!location.schedules[0].hour.includes(' às ')) return;
          const time = location.schedules[0].hour.split(' às ');
          const open = Number(time[0].substring(0, 2));
          const close = Number(time[1].substring(0, 2));
          if (open <= 18 && close >= 22) return true;
        }
      });
    }
    return locations;
  };

  const filterBySearch = (locations: APILocation[]) => {
    return locations.filter(
      (location) =>
        location.city_name?.toLowerCase().includes(search.toLowerCase()) ||
        location.content?.toLowerCase().includes(search.toLowerCase()) ||
        location.region?.toLowerCase().includes(search.toLowerCase()) ||
        location.street?.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredOpen = filterOpenLocations(locations);
  const filteredByTime = filterByTimeOfDay(filteredOpen);
  const filteredBySearch = filterBySearch(filteredByTime);

  setFilteredLocations(filteredBySearch.length);

  return (
    <main>
      <Header />
      <div className="max-w-screen-lg m-auto">
        <Heading />
        <Form />
        <Label />
        <div className="md:flex md:flex-wrap md:gap-4 mx-8 md:mb-8">
          {filteredBySearch.map((location) => (
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
