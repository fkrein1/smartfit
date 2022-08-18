import fob_fountain from '../assets/forbidden-fountain.png';
import fob_locker from '../assets/forbidden-lockerroom.png';
import par_fountain from '../assets/partial-fountain.png';
import par_locker from '../assets/partial-lockerroom.png';
import rec_mask from '../assets/recommended-mask.png';
import rec_toalha from '../assets/recommended-towel.png';
import req_locker from '../assets/required-lockerroom.png';
import req_mask from '../assets/required-mask.png';
import req_toalha from '../assets/required-towel.png';

export function Label() {
  return (
    <section className="flex flex-col bg-gray-100 py-8 my-16 gap-6 mx-8 md:flex-row md:flex-wrap md:justify-center rounded shadow">
      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Máscara</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={req_mask} className="h-14 w-14" />
            <span>Obrigatório</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={rec_mask} className="h-14 w-14" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Toalha</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={req_toalha} className="h-14 w-14" />
            <span>Obrigatório</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={rec_toalha} className="h-14 w-14" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Bebedouro</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={par_fountain} className="h-14 w-14" />
            <span>Parcial</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={fob_fountain} className="h-14 w-14" />
            <span>Proibido</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Vestiário</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={req_locker} className="h-14 w-14" />
            <span>Liberado</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={par_locker} className="h-14 w-14" />
            <span>Parcial</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={fob_locker} className="h-14 w-14" />
            <span>Fechado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
