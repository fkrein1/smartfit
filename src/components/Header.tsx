import logo from '../assets/images/logo.svg';

export function Header() {
  return (
    <>
      <header className="h-24 bg-black flex justify-center items-center">
        <img src={logo} className="h-16" />
      </header>

      <section className="pt-14 px-8">
        <h1 className="uppercase font-gotham_bold text-4xl">
          Reabertura<br></br>Smart fit
        </h1>
        <div className="w-28 border-8  border-black mt-6" />
        <p className="mt-10">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </section>
    </>
  );
}
