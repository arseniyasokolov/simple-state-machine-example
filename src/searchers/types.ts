// import { SearchState } from './Searcher.class';
// import { ArticleType } from '../types';

export type SearchStateType = 'inside' | 'outside';

export type SearcherType = (query: string, article: string) => string[];

// export interface ISearchContext {
//     switchStateTo(state: SearchState): void;
//     handleSymbol(symbol: string): void;
// }
