import logo from '../assets/images/logo.svg';

export function Header() {
  return (
    <header className="h-24 bg-black flex justify-center items-center">
      <img src={logo} className="h-16" />
    </header>
  );
}
