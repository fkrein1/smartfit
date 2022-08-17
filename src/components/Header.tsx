import logo from '../assets/images/logo.svg';

export function Header() {
  return (
    <div className="h-24 bg-black flex justify-center items-center">
      <img src={logo} className="h-16" />
    </div>
  );
}
