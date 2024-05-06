import {
  ChangeEvent,
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  KeyboardEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Fuse from 'fuse.js';
import {useRequestSearchQuery} from './hooks/use-request-search-query';

export interface SearchBoxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  dataSource: Array<any>;
  searchKeys: Array<string>;
  resultSetter?: Dispatch<SetStateAction<Array<any>>>;
}

export function SearchBox({
  dataSource,
  searchKeys,
  resultSetter,
}: SearchBoxProps) {
  const [searchQuery, router] = useRequestSearchQuery();
  const [searchQueryState, searchQuerySetter] = useState<string>(searchQuery);

  useEffect(() => {
    if (resultSetter) {
      if (searchQuery.length) {
        const searchRes = new Fuse(dataSource, {
          threshold: 0.2,
          keys: searchKeys,
        })
          .search(searchQuery)
          .map((res) => res.item);
        if (searchRes.length !== dataSource.length) resultSetter(searchRes);
      } else {
        resultSetter(dataSource);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);
  useEffect(() => {
    if (router.isReady) searchQuerySetter(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, searchQuery]);

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === 'Enter') {
      const url = { query: {} };
      if (searchQueryState.length) {
        url.query = { q: searchQueryState };
      }
      await router.push(url);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchQuerySetter(event.target.value);
  };

  return (
    <input
      type="search"
      onKeyDown={handleKeyPress}
      onChange={handleChange}
      placeholder="search by name..."
      value={searchQueryState}
    />
  );
}
