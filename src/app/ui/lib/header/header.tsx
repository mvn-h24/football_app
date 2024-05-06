import Link from 'next/link';

export interface HeaderProps {
  linkList: Array<{
    url: string;
    title: string;
  }>;
}
export function Header({ linkList }: HeaderProps) {
  return (
    <header className="grid grid-cols-8 grid-rows-1 p-6 ">
      <div className="flex items-center flex-no-shrink col-start-1 col-span-2">
        <div className="flex items-start ml-4">
          <svg
            className="h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Football info
          </span>
        </div>
      </div>
      <nav className="hidden lg:flex items-center justify-end flex-wrap bg-teal col-end-9 col-span-3">
        <ul className="w-full hidden justify-end lg:flex lg:items-center lg:w-auto">
          {linkList.map((value, index) => (
            <li key={index} className="text-sm lg:flex-grow">
              <Link href={value.url} className="transition block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-stone-500 mr-4">
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="lg:hidden self-center col-end-9 w-9 justify-self-center flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg
          className="h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </header>
  );
}
