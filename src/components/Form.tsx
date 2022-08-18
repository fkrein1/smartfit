import { useContext } from 'react';
import icon_hour from '../assets/images/icon-hour.png';
import { FormContext } from '../contexts/FormContext';

export function Form() {
  const {
    dayPeriod,
    setDayPeriod,
    filteredLocations,
    hideClosed,
    setHideClosed,
    search,
    setSearch,
  } = useContext(FormContext);

  const resetForm = () => {
    setDayPeriod('all');
    setHideClosed(true);
    setSearch('')
  };

  return (
    <form className="flex flex-col p-6 my-16 gap-2 mx-8 border-2 rounded-md shadow">
      
      <div className="flex gap-4 items-center mb-4">
        <img src={icon_hour} className="w-8 h-8" />
        <p className="text-gray-500 font-gotham_light">Horário</p>
      </div>
      <p className="text-gray-500 text-2xl font-gotham_light">
        Qual período quer treinar?
      </p>
      <hr />
      <label className="flex text-gray-500 font-gotham_light justify-between my-1  cursor-pointer">
        <div className="flex gap-4 items-center">
          <input
            className="h-4 w-4"
            type="radio"
            name="time"
            value="morning"
            checked={dayPeriod === 'morning'}
            onChange={(e) => setDayPeriod(e.target.value)}
          />
          <p>Manhã</p>
        </div>
        <p>06:00 às 12:00</p>
      </label>
      <hr />
      <label className="flex text-gray-500 font-gotham_light justify-between my-1 cursor-pointer">
        <div className="flex gap-4 items-center">
          <input
            className="h-4 w-4"
            type="radio"
            name="time"
            value="afternoon"
            checked={dayPeriod === 'afternoon'}
            onChange={(e) => setDayPeriod(e.target.value)}
          />
          <p>Tarde</p>
        </div>
        <p>12:01 às 18:00</p>
      </label>
      <hr />
      <label className="flex text-gray-500 font-gotham_light justify-between my-1 cursor-pointer">
        <div className="flex gap-4 items-center">
          <input
            className="h-4 w-4"
            type="radio"
            name="time"
            value="night"
            checked={dayPeriod === 'night'}
            onChange={(e) => setDayPeriod(e.target.value)}
          />
          <p>Noite</p>
        </div>
        <p>18:01 às 22:00</p>
      </label>
      <hr />
      <input
        className='border-2 rounded p-2 outline-yellow-500'
        type="text"
        placeholder="Digite aqui a rua, bairro ou cidade"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="md:flex md:justify-between md:items-center">
        <label className="flex gap-4 items-center mt-4 cursor-pointer md:mt-0">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={!hideClosed}
            onChange={(e) => setHideClosed(!hideClosed)}
          />
          <p className="font-gotham_light">Exibir unidades fechadas</p>
        </label>
        <div className="flex gap-2 my-4 justify-center">
          <p className="font-gotham_light">Resultados encontrados:</p>
          <span className="font-gotham_bold">{filteredLocations}</span>
        </div>
      </div>
      <button
        type="button"
        className="uppercase font-gotham_bold border-2 rounded-md py-4 hover:bg-yellow-500 hover:border-yellow-500  transition"
        onClick={resetForm}
      >
        Limpar
      </button>
    </form>
  );
}
