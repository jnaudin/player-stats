import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  picture: Picture;
};

export type Picture = {
  __typename?: 'Picture';
  url: Scalars['String'];
};

export type Player = {
  __typename?: 'Player';
  country: Country;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  picture: Picture;
  sex: Sex;
  shortname: Scalars['String'];
  stats: Stats;
};

export type Query = {
  __typename?: 'Query';
  headToHead?: Maybe<Array<Maybe<Player>>>;
};

export enum Sex {
  Man = 'MAN',
  Woman = 'WOMAN'
}

export type Stats = {
  __typename?: 'Stats';
  age: Scalars['Int'];
  height: Scalars['Int'];
  last: Array<Maybe<Scalars['Boolean']>>;
  points: Scalars['Int'];
  rank: Scalars['Int'];
  weight: Scalars['Int'];
};

export type HeadToHeadQueryVariables = Exact<{ [key: string]: never; }>;


export type HeadToHeadQuery = { __typename?: 'Query', headToHead?: Array<{ __typename?: 'Player', firstname: string, lastname: string, shortname: string, sex: Sex, picture: { __typename?: 'Picture', url: string }, country: { __typename?: 'Country', code: string, picture: { __typename?: 'Picture', url: string } }, stats: { __typename?: 'Stats', rank: number, points: number, weight: number, height: number, age: number, last: Array<boolean | null | undefined> } } | null | undefined> | null | undefined };


export const HeadToHeadDocument = gql`
    query headToHead {
  headToHead {
    firstname
    lastname
    shortname
    sex
    picture {
      url
    }
    country {
      picture {
        url
      }
      code
    }
    stats {
      rank
      points
      weight
      height
      age
      last
    }
  }
}
    `;

/**
 * __useHeadToHeadQuery__
 *
 * To run a query within a React component, call `useHeadToHeadQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeadToHeadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeadToHeadQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeadToHeadQuery(baseOptions?: Apollo.QueryHookOptions<HeadToHeadQuery, HeadToHeadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeadToHeadQuery, HeadToHeadQueryVariables>(HeadToHeadDocument, options);
      }
export function useHeadToHeadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeadToHeadQuery, HeadToHeadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeadToHeadQuery, HeadToHeadQueryVariables>(HeadToHeadDocument, options);
        }
export type HeadToHeadQueryHookResult = ReturnType<typeof useHeadToHeadQuery>;
export type HeadToHeadLazyQueryHookResult = ReturnType<typeof useHeadToHeadLazyQuery>;
export type HeadToHeadQueryResult = Apollo.QueryResult<HeadToHeadQuery, HeadToHeadQueryVariables>;