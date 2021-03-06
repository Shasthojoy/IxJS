import { AsyncIterableX } from '../../asynciterable/asynciterablex';
import { distinct } from '../../asynciterable/distinct';

/**
 * @ignore
 */
export function distinctProto<TSource, TKey>(
  this: AsyncIterableX<TSource>,
  keySelector?: (value: TSource) => TKey | Promise<TKey>,
  comparer?: (x: TKey, y: TKey) => boolean | Promise<boolean>
): AsyncIterableX<TSource> {
  return distinct(this, keySelector, comparer);
}

AsyncIterableX.prototype.distinct = distinctProto;

declare module '../../asynciterable/asynciterablex' {
  interface AsyncIterableX<T> {
    distinct: typeof distinctProto;
  }
}
