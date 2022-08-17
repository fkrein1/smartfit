import logo from '../assets/images/logo.svg';

export function Footer() {
  return (
    <footer className="h-40 bg-gray-800 flex flex-col justify-center items-center gap-6">
      <img src={logo} className="h-12" />
      <p className='text-white text-xs'>Todos os direitos reservados - 2022</p>
    </footer>
  );
}
