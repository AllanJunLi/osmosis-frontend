import { apiClient } from "@osmosis-labs/utils";

import { HISTORICAL_DATA_URL } from "../../env";

type PoolApr<T = number> = {
  pool_id: string;
  swap_fees: T;
  superfluid: T;
  osmosis: T;
  boost: T;
  total_apr: T;
};

/** Queries numia for a breakdown of APRs per pool. */
export function queryPoolAprs(): Promise<PoolApr[]> {
  const url = new URL("/pools_apr", HISTORICAL_DATA_URL);
  return apiClient(url.toString());
}

export type PoolDataRange<T = number> = {
  lower: T;
  upper: T;
};

/** Queries numia for a breakdown of APRs per pool with range. */
export function queryPoolAprsRange(): Promise<PoolApr<PoolDataRange>[]> {
  const url = new URL("/pools_apr_range", HISTORICAL_DATA_URL);
  return apiClient(url.toString());
}
