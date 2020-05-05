
export type ResultQuery<T extends string> = { [K in T]: string};

function getQuery<TQuery extends string>(stringQuery: string, queryNames: TQuery[]): ResultQuery<TQuery> {
  const listQuery = stringQuery.substring(1).split('&');
  const queries = listQuery.reduce((result, query) => {
    const pair = query.split('=');
    if(queryNames.includes(pair[0] as TQuery)) {
      return {
        ...result,
        [pair[0]]: pair[1],
      };
    }
    return {
      ...result
    };
  }, {});
  return queries as ResultQuery<TQuery>;
}

export default getQuery;
