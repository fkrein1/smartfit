import rec_mask from '../assets/images/recommended-mask.png';
import req_mask from '../assets/images/required-mask.png';
import req_toalha from '../assets/images/required-towel.png';
import rec_toalha from '../assets/images/recommended-towel.png';
import par_fountain from '../assets/images/partial-fountain.png';
import fob_fountain from '../assets/images/forbidden-fountain.png';
import fob_locker from '../assets/images/forbidden-lockerroom.png';
import req_locker from '../assets/images/required-lockerroom.png';
import part_locker from '../assets/images/partial-lockerroom.png';



export function Label() {
  return (
    <section className="flex flex-col bg-gray-100 py-8 my-16 gap-6 mx-8">
      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Máscara</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={req_mask} className="h-20 w-20" />
            <span>Obrigatório</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={rec_mask} className="h-20 w-20" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Toalha</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={req_toalha} className="h-20 w-20" />
            <span>Obrigatório</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={rec_toalha} className="h-20 w-20" />
            <span>Recomendado</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Bebedouro</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={par_fountain} className="h-20 w-20" />
            <span>Parcial</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={fob_fountain} className="h-20 w-20" />
            <span>Proibido</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham_bold text-lg">Vestiário</p>
        <div className="flex align-middle items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <img src={req_locker} className="h-20 w-20" />
            <span>Liberado</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={part_locker} className="h-20 w-20" />
            <span>Parcial</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={fob_locker} className="h-20 w-20" />
            <span>Fechado</span>
          </div>
        </div>
      </div>

      
    </section>
  );
}
