import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch('W72DQ6OUMO', '076c49f33b0aff64379215d7b75798ea');

const Hit = ({ hit }) => (
  <div>
    <strong>{hit.name}</strong>
    <p>{hit.description}</p>
  </div>
);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="california_sample">
    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

export default Search;
