"use client";
import {
  ChangeEventHandler,
  HTMLProps,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { clsx } from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash/debounce";
import MagnifyIcon from "../icons/magnify.svg";
import { useIsFirstRender } from "@uidotdev/usehooks";

interface SearchBoxProps extends HTMLProps<HTMLDivElement> {
  targetText?: string;
  searchParamName?: string;
}

export function SearchBox<Input extends HTMLInputElement>({
  className,
  placeholder = "search by name...",
  targetText = "Найти",
  searchParamName = "q",
}: SearchBoxProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const paramsSrc = useSearchParams();

  const [seachQuery, setSearchQuery] = useState(
    paramsSrc?.get(searchParamName) ?? "",
  );
  const setUrlQueryCb = (query: string) => {
    const params = new URLSearchParams(paramsSrc?.toString());
    if (query.length) {
      params.set(searchParamName, query);
    } else {
      params.delete(searchParamName);
    }
    router.replace(pathname + "?" + params.toString());
  };
  const setUrlQuery = useCallback(debounce(setUrlQueryCb, 500), [
    searchParamName,
  ]);

  const isFirstRender = useIsFirstRender();
  useEffect(() => {
    if (!isFirstRender) {
      setUrlQuery(seachQuery);
    }
  }, [isFirstRender, seachQuery, setUrlQuery]);

  const keydownAction: KeyboardEventHandler<Input> = async (e) => {
    if (e.key === "Enter") {
      setUrlQuery.cancel();
      setUrlQueryCb(seachQuery);
    }
  };
  const inputAction: ChangeEventHandler<Input> = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={clsx("grid grid-cols-[auto_1fr_auto]", className)}>
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg ring-gray-200 bg-white p-5 ring-1 ring-inset">
        <MagnifyIcon className="pointer-events-none absolute w-5 fill-gray-500 transition" />
      </div>
      <input
        className="bg-white px-2 text-base font-semibold outline-0 ring-gray-200 ring-1 ring-inset translate-x-[-1px] w-[calc(100%+1px)]"
        type="search"
        onKeyDown={keydownAction}
        onInput={inputAction}
        placeholder={placeholder}
        value={seachQuery}
      />
      <button
        type="button"
        className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors translate-x-[-1px]"
      >
        {targetText}
      </button>
    </div>
  );
}
