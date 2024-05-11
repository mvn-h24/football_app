import Link from 'next/link';
import Logo from './icons/logo.svg'
import Burger from './icons/burger.svg'

interface HeaderProps {
    linkList: Array<{
        url: string;
        title: string;
    }>;
}

export function Header({linkList}: HeaderProps) {
    return (
        <header className="grid grid-cols-8 grid-rows-1 p-6 ">
      <div className="flex items-center flex-no-shrink row-start-1 row-end-2 col-start-1 col-end-[-1]">
        <div className="flex items-center ml-4">
            <Logo className="h-[54px] w-[54px]"/>
          <span className="font-semibold text-xl tracking-tight whitespace-nowrap break-keep ml-2">
            Football info
          </span>
        </div>
      </div>
      <nav
          className="hidden lg:flex items-center justify-end flex-wrap bg-teal row-start-1 row-end-2 col-start-end-1 col-end-[-1]">
        <ul className="w-full hidden justify-end lg:flex lg:items-center lg:w-auto">
          {linkList.map((value, index) => (
              <li key={index} className="text-sm lg:flex-grow">
              <Link href={value.url}
                    className="transition block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-stone-500 mr-4">
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
          className="lg:hidden self-center w-9 justify-self-center flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white row-start-1 row-end-2 col-start-end-1 col-end-[-1]">
        <Burger className="h-3 w-3"/>
      </button>
    </header>
    );
}
