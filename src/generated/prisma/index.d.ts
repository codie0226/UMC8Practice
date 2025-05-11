
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserFoodCategory
 * 
 */
export type UserFoodCategory = $Result.DefaultSelection<Prisma.$UserFoodCategoryPayload>
/**
 * Model FoodCategory
 * 
 */
export type FoodCategory = $Result.DefaultSelection<Prisma.$FoodCategoryPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model ShopCategory
 * 
 */
export type ShopCategory = $Result.DefaultSelection<Prisma.$ShopCategoryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionLog
 * 
 */
export type MissionLog = $Result.DefaultSelection<Prisma.$MissionLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFoodCategory`: Exposes CRUD operations for the **UserFoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFoodCategories
    * const userFoodCategories = await prisma.userFoodCategory.findMany()
    * ```
    */
  get userFoodCategory(): Prisma.UserFoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodCategory`: Exposes CRUD operations for the **FoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCategories
    * const foodCategories = await prisma.foodCategory.findMany()
    * ```
    */
  get foodCategory(): Prisma.FoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopCategory`: Exposes CRUD operations for the **ShopCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopCategories
    * const shopCategories = await prisma.shopCategory.findMany()
    * ```
    */
  get shopCategory(): Prisma.ShopCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionLog`: Exposes CRUD operations for the **MissionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionLogs
    * const missionLogs = await prisma.missionLog.findMany()
    * ```
    */
  get missionLog(): Prisma.MissionLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserFoodCategory: 'UserFoodCategory',
    FoodCategory: 'FoodCategory',
    Shop: 'Shop',
    Area: 'Area',
    ShopCategory: 'ShopCategory',
    Review: 'Review',
    Mission: 'Mission',
    MissionLog: 'MissionLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userFoodCategory" | "foodCategory" | "shop" | "area" | "shopCategory" | "review" | "mission" | "missionLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserFoodCategory: {
        payload: Prisma.$UserFoodCategoryPayload<ExtArgs>
        fields: Prisma.UserFoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserFoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          findMany: {
            args: Prisma.UserFoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>[]
          }
          create: {
            args: Prisma.UserFoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          createMany: {
            args: Prisma.UserFoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          update: {
            args: Prisma.UserFoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserFoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserFoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFoodCategory>
          }
          groupBy: {
            args: Prisma.UserFoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserFoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      FoodCategory: {
        payload: Prisma.$FoodCategoryPayload<ExtArgs>
        fields: Prisma.FoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findMany: {
            args: Prisma.FoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          create: {
            args: Prisma.FoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          createMany: {
            args: Prisma.FoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          update: {
            args: Prisma.FoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodCategory>
          }
          groupBy: {
            args: Prisma.FoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      ShopCategory: {
        payload: Prisma.$ShopCategoryPayload<ExtArgs>
        fields: Prisma.ShopCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          findFirst: {
            args: Prisma.ShopCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          findMany: {
            args: Prisma.ShopCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>[]
          }
          create: {
            args: Prisma.ShopCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          createMany: {
            args: Prisma.ShopCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          update: {
            args: Prisma.ShopCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ShopCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopCategoryPayload>
          }
          aggregate: {
            args: Prisma.ShopCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopCategory>
          }
          groupBy: {
            args: Prisma.ShopCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCategoryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionLog: {
        payload: Prisma.$MissionLogPayload<ExtArgs>
        fields: Prisma.MissionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          findFirst: {
            args: Prisma.MissionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          findMany: {
            args: Prisma.MissionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>[]
          }
          create: {
            args: Prisma.MissionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          createMany: {
            args: Prisma.MissionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          update: {
            args: Prisma.MissionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          deleteMany: {
            args: Prisma.MissionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          aggregate: {
            args: Prisma.MissionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionLog>
          }
          groupBy: {
            args: Prisma.MissionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionLogCountArgs<ExtArgs>
            result: $Utils.Optional<MissionLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userFoodCategory?: UserFoodCategoryOmit
    foodCategory?: FoodCategoryOmit
    shop?: ShopOmit
    area?: AreaOmit
    shopCategory?: ShopCategoryOmit
    review?: ReviewOmit
    mission?: MissionOmit
    missionLog?: MissionLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserFoodCategory: number
    Review: number
    MissionLog: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserFoodCategory?: boolean | UserCountOutputTypeCountUserFoodCategoryArgs
    Review?: boolean | UserCountOutputTypeCountReviewArgs
    MissionLog?: boolean | UserCountOutputTypeCountMissionLogArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFoodCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMissionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionLogWhereInput
  }


  /**
   * Count Type FoodCategoryCountOutputType
   */

  export type FoodCategoryCountOutputType = {
    UserFoodCategory: number
  }

  export type FoodCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserFoodCategory?: boolean | FoodCategoryCountOutputTypeCountUserFoodCategoryArgs
  }

  // Custom InputTypes
  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategoryCountOutputType
     */
    select?: FoodCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeCountUserFoodCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodCategoryWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    Review: number
    Mission: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Review?: boolean | ShopCountOutputTypeCountReviewArgs
    Mission?: boolean | ShopCountOutputTypeCountMissionArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountMissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    shop: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | AreaCountOutputTypeCountShopArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }


  /**
   * Count Type ShopCategoryCountOutputType
   */

  export type ShopCategoryCountOutputType = {
    shop: number
  }

  export type ShopCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopCategoryCountOutputTypeCountShopArgs
  }

  // Custom InputTypes
  /**
   * ShopCategoryCountOutputType without action
   */
  export type ShopCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategoryCountOutputType
     */
    select?: ShopCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCategoryCountOutputType without action
   */
  export type ShopCategoryCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    MissionLog: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MissionLog?: boolean | MissionCountOutputTypeCountMissionLogArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountMissionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    gender: number | null
    point: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    gender: number | null
    point: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    gender: number | null
    phoneNumber: string | null
    point: number | null
    birth: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    gender: number | null
    phoneNumber: string | null
    point: number | null
    birth: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    gender: number
    phoneNumber: number
    point: number
    birth: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    gender?: true
    point?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    gender?: true
    point?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    gender?: true
    phoneNumber?: true
    point?: true
    birth?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    gender?: true
    phoneNumber?: true
    point?: true
    birth?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    gender?: true
    phoneNumber?: true
    point?: true
    birth?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    gender?: boolean
    phoneNumber?: boolean
    point?: boolean
    birth?: boolean
    UserFoodCategory?: boolean | User$UserFoodCategoryArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    MissionLog?: boolean | User$MissionLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    gender?: boolean
    phoneNumber?: boolean
    point?: boolean
    birth?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "gender" | "phoneNumber" | "point" | "birth", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserFoodCategory?: boolean | User$UserFoodCategoryArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    MissionLog?: boolean | User$MissionLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserFoodCategory: Prisma.$UserFoodCategoryPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      MissionLog: Prisma.$MissionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      gender: number
      phoneNumber: string
      point: number
      birth: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserFoodCategory<T extends User$UserFoodCategoryArgs<ExtArgs> = {}>(args?: Subset<T, User$UserFoodCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MissionLog<T extends User$MissionLogArgs<ExtArgs> = {}>(args?: Subset<T, User$MissionLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Int'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly point: FieldRef<"User", 'Int'>
    readonly birth: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserFoodCategory
   */
  export type User$UserFoodCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    where?: UserFoodCategoryWhereInput
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    cursor?: UserFoodCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.MissionLog
   */
  export type User$MissionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    where?: MissionLogWhereInput
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    cursor?: MissionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserFoodCategory
   */

  export type AggregateUserFoodCategory = {
    _count: UserFoodCategoryCountAggregateOutputType | null
    _avg: UserFoodCategoryAvgAggregateOutputType | null
    _sum: UserFoodCategorySumAggregateOutputType | null
    _min: UserFoodCategoryMinAggregateOutputType | null
    _max: UserFoodCategoryMaxAggregateOutputType | null
  }

  export type UserFoodCategoryAvgAggregateOutputType = {
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFoodCategorySumAggregateOutputType = {
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFoodCategoryMinAggregateOutputType = {
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFoodCategoryMaxAggregateOutputType = {
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFoodCategoryCountAggregateOutputType = {
    userId: number
    foodCategoryId: number
    _all: number
  }


  export type UserFoodCategoryAvgAggregateInputType = {
    userId?: true
    foodCategoryId?: true
  }

  export type UserFoodCategorySumAggregateInputType = {
    userId?: true
    foodCategoryId?: true
  }

  export type UserFoodCategoryMinAggregateInputType = {
    userId?: true
    foodCategoryId?: true
  }

  export type UserFoodCategoryMaxAggregateInputType = {
    userId?: true
    foodCategoryId?: true
  }

  export type UserFoodCategoryCountAggregateInputType = {
    userId?: true
    foodCategoryId?: true
    _all?: true
  }

  export type UserFoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFoodCategory to aggregate.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFoodCategories
    **/
    _count?: true | UserFoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFoodCategoryMaxAggregateInputType
  }

  export type GetUserFoodCategoryAggregateType<T extends UserFoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFoodCategory[P]>
      : GetScalarType<T[P], AggregateUserFoodCategory[P]>
  }




  export type UserFoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodCategoryWhereInput
    orderBy?: UserFoodCategoryOrderByWithAggregationInput | UserFoodCategoryOrderByWithAggregationInput[]
    by: UserFoodCategoryScalarFieldEnum[] | UserFoodCategoryScalarFieldEnum
    having?: UserFoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFoodCategoryCountAggregateInputType | true
    _avg?: UserFoodCategoryAvgAggregateInputType
    _sum?: UserFoodCategorySumAggregateInputType
    _min?: UserFoodCategoryMinAggregateInputType
    _max?: UserFoodCategoryMaxAggregateInputType
  }

  export type UserFoodCategoryGroupByOutputType = {
    userId: number
    foodCategoryId: number
    _count: UserFoodCategoryCountAggregateOutputType | null
    _avg: UserFoodCategoryAvgAggregateOutputType | null
    _sum: UserFoodCategorySumAggregateOutputType | null
    _min: UserFoodCategoryMinAggregateOutputType | null
    _max: UserFoodCategoryMaxAggregateOutputType | null
  }

  type GetUserFoodCategoryGroupByPayload<T extends UserFoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserFoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserFoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    foodCategoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodCategory?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFoodCategory"]>



  export type UserFoodCategorySelectScalar = {
    userId?: boolean
    foodCategoryId?: boolean
  }

  export type UserFoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "foodCategoryId", ExtArgs["result"]["userFoodCategory"]>
  export type UserFoodCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodCategory?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }

  export type $UserFoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFoodCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foodCategory: Prisma.$FoodCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      foodCategoryId: number
    }, ExtArgs["result"]["userFoodCategory"]>
    composites: {}
  }

  type UserFoodCategoryGetPayload<S extends boolean | null | undefined | UserFoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserFoodCategoryPayload, S>

  type UserFoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFoodCategoryCountAggregateInputType | true
    }

  export interface UserFoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFoodCategory'], meta: { name: 'UserFoodCategory' } }
    /**
     * Find zero or one UserFoodCategory that matches the filter.
     * @param {UserFoodCategoryFindUniqueArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFoodCategoryFindUniqueArgs>(args: SelectSubset<T, UserFoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryFindFirstArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFoodCategoryFindFirstArgs>(args?: SelectSubset<T, UserFoodCategoryFindFirstArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryFindFirstOrThrowArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFoodCategories
     * const userFoodCategories = await prisma.userFoodCategory.findMany()
     * 
     * // Get first 10 UserFoodCategories
     * const userFoodCategories = await prisma.userFoodCategory.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userFoodCategoryWithUserIdOnly = await prisma.userFoodCategory.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFoodCategoryFindManyArgs>(args?: SelectSubset<T, UserFoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFoodCategory.
     * @param {UserFoodCategoryCreateArgs} args - Arguments to create a UserFoodCategory.
     * @example
     * // Create one UserFoodCategory
     * const UserFoodCategory = await prisma.userFoodCategory.create({
     *   data: {
     *     // ... data to create a UserFoodCategory
     *   }
     * })
     * 
     */
    create<T extends UserFoodCategoryCreateArgs>(args: SelectSubset<T, UserFoodCategoryCreateArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFoodCategories.
     * @param {UserFoodCategoryCreateManyArgs} args - Arguments to create many UserFoodCategories.
     * @example
     * // Create many UserFoodCategories
     * const userFoodCategory = await prisma.userFoodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFoodCategoryCreateManyArgs>(args?: SelectSubset<T, UserFoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFoodCategory.
     * @param {UserFoodCategoryDeleteArgs} args - Arguments to delete one UserFoodCategory.
     * @example
     * // Delete one UserFoodCategory
     * const UserFoodCategory = await prisma.userFoodCategory.delete({
     *   where: {
     *     // ... filter to delete one UserFoodCategory
     *   }
     * })
     * 
     */
    delete<T extends UserFoodCategoryDeleteArgs>(args: SelectSubset<T, UserFoodCategoryDeleteArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFoodCategory.
     * @param {UserFoodCategoryUpdateArgs} args - Arguments to update one UserFoodCategory.
     * @example
     * // Update one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFoodCategoryUpdateArgs>(args: SelectSubset<T, UserFoodCategoryUpdateArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFoodCategories.
     * @param {UserFoodCategoryDeleteManyArgs} args - Arguments to filter UserFoodCategories to delete.
     * @example
     * // Delete a few UserFoodCategories
     * const { count } = await prisma.userFoodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFoodCategoryDeleteManyArgs>(args?: SelectSubset<T, UserFoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFoodCategories
     * const userFoodCategory = await prisma.userFoodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFoodCategoryUpdateManyArgs>(args: SelectSubset<T, UserFoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFoodCategory.
     * @param {UserFoodCategoryUpsertArgs} args - Arguments to update or create a UserFoodCategory.
     * @example
     * // Update or create a UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.upsert({
     *   create: {
     *     // ... data to create a UserFoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserFoodCategoryUpsertArgs>(args: SelectSubset<T, UserFoodCategoryUpsertArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryCountArgs} args - Arguments to filter UserFoodCategories to count.
     * @example
     * // Count the number of UserFoodCategories
     * const count = await prisma.userFoodCategory.count({
     *   where: {
     *     // ... the filter for the UserFoodCategories we want to count
     *   }
     * })
    **/
    count<T extends UserFoodCategoryCountArgs>(
      args?: Subset<T, UserFoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFoodCategoryAggregateArgs>(args: Subset<T, UserFoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserFoodCategoryAggregateType<T>>

    /**
     * Group by UserFoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserFoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFoodCategory model
   */
  readonly fields: UserFoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodCategory<T extends FoodCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategoryDefaultArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFoodCategory model
   */
  interface UserFoodCategoryFieldRefs {
    readonly userId: FieldRef<"UserFoodCategory", 'Int'>
    readonly foodCategoryId: FieldRef<"UserFoodCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserFoodCategory findUnique
   */
  export type UserFoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory findUniqueOrThrow
   */
  export type UserFoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory findFirst
   */
  export type UserFoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFoodCategories.
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodCategories.
     */
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * UserFoodCategory findFirstOrThrow
   */
  export type UserFoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFoodCategories.
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodCategories.
     */
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * UserFoodCategory findMany
   */
  export type UserFoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodCategories to fetch.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFoodCategories.
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * UserFoodCategory create
   */
  export type UserFoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFoodCategory.
     */
    data: XOR<UserFoodCategoryCreateInput, UserFoodCategoryUncheckedCreateInput>
  }

  /**
   * UserFoodCategory createMany
   */
  export type UserFoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFoodCategories.
     */
    data: UserFoodCategoryCreateManyInput | UserFoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFoodCategory update
   */
  export type UserFoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFoodCategory.
     */
    data: XOR<UserFoodCategoryUpdateInput, UserFoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserFoodCategory to update.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory updateMany
   */
  export type UserFoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFoodCategories.
     */
    data: XOR<UserFoodCategoryUpdateManyMutationInput, UserFoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserFoodCategories to update
     */
    where?: UserFoodCategoryWhereInput
    /**
     * Limit how many UserFoodCategories to update.
     */
    limit?: number
  }

  /**
   * UserFoodCategory upsert
   */
  export type UserFoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFoodCategory to update in case it exists.
     */
    where: UserFoodCategoryWhereUniqueInput
    /**
     * In case the UserFoodCategory found by the `where` argument doesn't exist, create a new UserFoodCategory with this data.
     */
    create: XOR<UserFoodCategoryCreateInput, UserFoodCategoryUncheckedCreateInput>
    /**
     * In case the UserFoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFoodCategoryUpdateInput, UserFoodCategoryUncheckedUpdateInput>
  }

  /**
   * UserFoodCategory delete
   */
  export type UserFoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    /**
     * Filter which UserFoodCategory to delete.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory deleteMany
   */
  export type UserFoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFoodCategories to delete
     */
    where?: UserFoodCategoryWhereInput
    /**
     * Limit how many UserFoodCategories to delete.
     */
    limit?: number
  }

  /**
   * UserFoodCategory without action
   */
  export type UserFoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
  }


  /**
   * Model FoodCategory
   */

  export type AggregateFoodCategory = {
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  export type FoodCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodCategorySumAggregateOutputType = {
    id: number | null
  }

  export type FoodCategoryMinAggregateOutputType = {
    id: number | null
    food: string | null
  }

  export type FoodCategoryMaxAggregateOutputType = {
    id: number | null
    food: string | null
  }

  export type FoodCategoryCountAggregateOutputType = {
    id: number
    food: number
    _all: number
  }


  export type FoodCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FoodCategorySumAggregateInputType = {
    id?: true
  }

  export type FoodCategoryMinAggregateInputType = {
    id?: true
    food?: true
  }

  export type FoodCategoryMaxAggregateInputType = {
    id?: true
    food?: true
  }

  export type FoodCategoryCountAggregateInputType = {
    id?: true
    food?: true
    _all?: true
  }

  export type FoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategory to aggregate.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCategories
    **/
    _count?: true | FoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type GetFoodCategoryAggregateType<T extends FoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCategory[P]>
      : GetScalarType<T[P], AggregateFoodCategory[P]>
  }




  export type FoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
    orderBy?: FoodCategoryOrderByWithAggregationInput | FoodCategoryOrderByWithAggregationInput[]
    by: FoodCategoryScalarFieldEnum[] | FoodCategoryScalarFieldEnum
    having?: FoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCategoryCountAggregateInputType | true
    _avg?: FoodCategoryAvgAggregateInputType
    _sum?: FoodCategorySumAggregateInputType
    _min?: FoodCategoryMinAggregateInputType
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type FoodCategoryGroupByOutputType = {
    id: number
    food: string
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  type GetFoodCategoryGroupByPayload<T extends FoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    food?: boolean
    UserFoodCategory?: boolean | FoodCategory$UserFoodCategoryArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodCategory"]>



  export type FoodCategorySelectScalar = {
    id?: boolean
    food?: boolean
  }

  export type FoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "food", ExtArgs["result"]["foodCategory"]>
  export type FoodCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserFoodCategory?: boolean | FoodCategory$UserFoodCategoryArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodCategory"
    objects: {
      UserFoodCategory: Prisma.$UserFoodCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      food: string
    }, ExtArgs["result"]["foodCategory"]>
    composites: {}
  }

  type FoodCategoryGetPayload<S extends boolean | null | undefined | FoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$FoodCategoryPayload, S>

  type FoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCategoryCountAggregateInputType | true
    }

  export interface FoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCategory'], meta: { name: 'FoodCategory' } }
    /**
     * Find zero or one FoodCategory that matches the filter.
     * @param {FoodCategoryFindUniqueArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodCategoryFindUniqueArgs>(args: SelectSubset<T, FoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodCategoryFindFirstArgs>(args?: SelectSubset<T, FoodCategoryFindFirstArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany()
     * 
     * // Get first 10 FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodCategoryFindManyArgs>(args?: SelectSubset<T, FoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodCategory.
     * @param {FoodCategoryCreateArgs} args - Arguments to create a FoodCategory.
     * @example
     * // Create one FoodCategory
     * const FoodCategory = await prisma.foodCategory.create({
     *   data: {
     *     // ... data to create a FoodCategory
     *   }
     * })
     * 
     */
    create<T extends FoodCategoryCreateArgs>(args: SelectSubset<T, FoodCategoryCreateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodCategories.
     * @param {FoodCategoryCreateManyArgs} args - Arguments to create many FoodCategories.
     * @example
     * // Create many FoodCategories
     * const foodCategory = await prisma.foodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCategoryCreateManyArgs>(args?: SelectSubset<T, FoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodCategory.
     * @param {FoodCategoryDeleteArgs} args - Arguments to delete one FoodCategory.
     * @example
     * // Delete one FoodCategory
     * const FoodCategory = await prisma.foodCategory.delete({
     *   where: {
     *     // ... filter to delete one FoodCategory
     *   }
     * })
     * 
     */
    delete<T extends FoodCategoryDeleteArgs>(args: SelectSubset<T, FoodCategoryDeleteArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodCategory.
     * @param {FoodCategoryUpdateArgs} args - Arguments to update one FoodCategory.
     * @example
     * // Update one FoodCategory
     * const foodCategory = await prisma.foodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodCategoryUpdateArgs>(args: SelectSubset<T, FoodCategoryUpdateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodCategories.
     * @param {FoodCategoryDeleteManyArgs} args - Arguments to filter FoodCategories to delete.
     * @example
     * // Delete a few FoodCategories
     * const { count } = await prisma.foodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodCategoryDeleteManyArgs>(args?: SelectSubset<T, FoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodCategoryUpdateManyArgs>(args: SelectSubset<T, FoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodCategory.
     * @param {FoodCategoryUpsertArgs} args - Arguments to update or create a FoodCategory.
     * @example
     * // Update or create a FoodCategory
     * const foodCategory = await prisma.foodCategory.upsert({
     *   create: {
     *     // ... data to create a FoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends FoodCategoryUpsertArgs>(args: SelectSubset<T, FoodCategoryUpsertArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryCountArgs} args - Arguments to filter FoodCategories to count.
     * @example
     * // Count the number of FoodCategories
     * const count = await prisma.foodCategory.count({
     *   where: {
     *     // ... the filter for the FoodCategories we want to count
     *   }
     * })
    **/
    count<T extends FoodCategoryCountArgs>(
      args?: Subset<T, FoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodCategoryAggregateArgs>(args: Subset<T, FoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoodCategoryAggregateType<T>>

    /**
     * Group by FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodCategory model
   */
  readonly fields: FoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserFoodCategory<T extends FoodCategory$UserFoodCategoryArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategory$UserFoodCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodCategory model
   */
  interface FoodCategoryFieldRefs {
    readonly id: FieldRef<"FoodCategory", 'Int'>
    readonly food: FieldRef<"FoodCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodCategory findUnique
   */
  export type FoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findUniqueOrThrow
   */
  export type FoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findFirst
   */
  export type FoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findFirstOrThrow
   */
  export type FoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findMany
   */
  export type FoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategories to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory create
   */
  export type FoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodCategory.
     */
    data: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
  }

  /**
   * FoodCategory createMany
   */
  export type FoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCategories.
     */
    data: FoodCategoryCreateManyInput | FoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCategory update
   */
  export type FoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodCategory.
     */
    data: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoodCategory to update.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory updateMany
   */
  export type FoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to update.
     */
    limit?: number
  }

  /**
   * FoodCategory upsert
   */
  export type FoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodCategory to update in case it exists.
     */
    where: FoodCategoryWhereUniqueInput
    /**
     * In case the FoodCategory found by the `where` argument doesn't exist, create a new FoodCategory with this data.
     */
    create: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
    /**
     * In case the FoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
  }

  /**
   * FoodCategory delete
   */
  export type FoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter which FoodCategory to delete.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory deleteMany
   */
  export type FoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategories to delete
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to delete.
     */
    limit?: number
  }

  /**
   * FoodCategory.UserFoodCategory
   */
  export type FoodCategory$UserFoodCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodCategoryInclude<ExtArgs> | null
    where?: UserFoodCategoryWhereInput
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    cursor?: UserFoodCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory without action
   */
  export type FoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
    shopCategory: number | null
    areaId: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
    shopCategory: number | null
    areaId: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    shopName: string | null
    shopAddress: string | null
    shopCategory: number | null
    areaId: number | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    shopName: string | null
    shopAddress: string | null
    shopCategory: number | null
    areaId: number | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    shopName: number
    shopAddress: number
    shopCategory: number
    areaId: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
    shopCategory?: true
    areaId?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
    shopCategory?: true
    areaId?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    shopName?: true
    shopAddress?: true
    shopCategory?: true
    areaId?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    shopName?: true
    shopAddress?: true
    shopCategory?: true
    areaId?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    shopName?: true
    shopAddress?: true
    shopCategory?: true
    areaId?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    shopName: string
    shopAddress: string
    shopCategory: number
    areaId: number
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopName?: boolean
    shopAddress?: boolean
    shopCategory?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    shopCat?: boolean | ShopCategoryDefaultArgs<ExtArgs>
    Review?: boolean | Shop$ReviewArgs<ExtArgs>
    Mission?: boolean | Shop$MissionArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>



  export type ShopSelectScalar = {
    id?: boolean
    shopName?: boolean
    shopAddress?: boolean
    shopCategory?: boolean
    areaId?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopName" | "shopAddress" | "shopCategory" | "areaId", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    shopCat?: boolean | ShopCategoryDefaultArgs<ExtArgs>
    Review?: boolean | Shop$ReviewArgs<ExtArgs>
    Mission?: boolean | Shop$MissionArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      shopCat: Prisma.$ShopCategoryPayload<ExtArgs>
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      Mission: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopName: string
      shopAddress: string
      shopCategory: number
      areaId: number
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shopCat<T extends ShopCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopCategoryDefaultArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Review<T extends Shop$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Mission<T extends Shop$MissionArgs<ExtArgs> = {}>(args?: Subset<T, Shop$MissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly shopName: FieldRef<"Shop", 'String'>
    readonly shopAddress: FieldRef<"Shop", 'String'>
    readonly shopCategory: FieldRef<"Shop", 'Int'>
    readonly areaId: FieldRef<"Shop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.Review
   */
  export type Shop$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Shop.Mission
   */
  export type Shop$MissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    areaName: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    areaName: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    areaName: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    areaName?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    areaName?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    areaName?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    areaName: string
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaName?: boolean
    shop?: boolean | Area$shopArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>



  export type AreaSelectScalar = {
    id?: boolean
    areaName?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "areaName", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | Area$shopArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      areaName: string
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends Area$shopArgs<ExtArgs> = {}>(args?: Subset<T, Area$shopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly areaName: FieldRef<"Area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.shop
   */
  export type Area$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model ShopCategory
   */

  export type AggregateShopCategory = {
    _count: ShopCategoryCountAggregateOutputType | null
    _avg: ShopCategoryAvgAggregateOutputType | null
    _sum: ShopCategorySumAggregateOutputType | null
    _min: ShopCategoryMinAggregateOutputType | null
    _max: ShopCategoryMaxAggregateOutputType | null
  }

  export type ShopCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ShopCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ShopCategoryMinAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type ShopCategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type ShopCategoryCountAggregateOutputType = {
    id: number
    category: number
    _all: number
  }


  export type ShopCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ShopCategorySumAggregateInputType = {
    id?: true
  }

  export type ShopCategoryMinAggregateInputType = {
    id?: true
    category?: true
  }

  export type ShopCategoryMaxAggregateInputType = {
    id?: true
    category?: true
  }

  export type ShopCategoryCountAggregateInputType = {
    id?: true
    category?: true
    _all?: true
  }

  export type ShopCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopCategory to aggregate.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopCategories
    **/
    _count?: true | ShopCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopCategoryMaxAggregateInputType
  }

  export type GetShopCategoryAggregateType<T extends ShopCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateShopCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopCategory[P]>
      : GetScalarType<T[P], AggregateShopCategory[P]>
  }




  export type ShopCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopCategoryWhereInput
    orderBy?: ShopCategoryOrderByWithAggregationInput | ShopCategoryOrderByWithAggregationInput[]
    by: ShopCategoryScalarFieldEnum[] | ShopCategoryScalarFieldEnum
    having?: ShopCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCategoryCountAggregateInputType | true
    _avg?: ShopCategoryAvgAggregateInputType
    _sum?: ShopCategorySumAggregateInputType
    _min?: ShopCategoryMinAggregateInputType
    _max?: ShopCategoryMaxAggregateInputType
  }

  export type ShopCategoryGroupByOutputType = {
    id: number
    category: string
    _count: ShopCategoryCountAggregateOutputType | null
    _avg: ShopCategoryAvgAggregateOutputType | null
    _sum: ShopCategorySumAggregateOutputType | null
    _min: ShopCategoryMinAggregateOutputType | null
    _max: ShopCategoryMaxAggregateOutputType | null
  }

  type GetShopCategoryGroupByPayload<T extends ShopCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ShopCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ShopCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    shop?: boolean | ShopCategory$shopArgs<ExtArgs>
    _count?: boolean | ShopCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopCategory"]>



  export type ShopCategorySelectScalar = {
    id?: boolean
    category?: boolean
  }

  export type ShopCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category", ExtArgs["result"]["shopCategory"]>
  export type ShopCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopCategory$shopArgs<ExtArgs>
    _count?: boolean | ShopCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopCategory"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
    }, ExtArgs["result"]["shopCategory"]>
    composites: {}
  }

  type ShopCategoryGetPayload<S extends boolean | null | undefined | ShopCategoryDefaultArgs> = $Result.GetResult<Prisma.$ShopCategoryPayload, S>

  type ShopCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCategoryCountAggregateInputType | true
    }

  export interface ShopCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopCategory'], meta: { name: 'ShopCategory' } }
    /**
     * Find zero or one ShopCategory that matches the filter.
     * @param {ShopCategoryFindUniqueArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopCategoryFindUniqueArgs>(args: SelectSubset<T, ShopCategoryFindUniqueArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopCategoryFindUniqueOrThrowArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryFindFirstArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopCategoryFindFirstArgs>(args?: SelectSubset<T, ShopCategoryFindFirstArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryFindFirstOrThrowArgs} args - Arguments to find a ShopCategory
     * @example
     * // Get one ShopCategory
     * const shopCategory = await prisma.shopCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopCategories
     * const shopCategories = await prisma.shopCategory.findMany()
     * 
     * // Get first 10 ShopCategories
     * const shopCategories = await prisma.shopCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopCategoryWithIdOnly = await prisma.shopCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopCategoryFindManyArgs>(args?: SelectSubset<T, ShopCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopCategory.
     * @param {ShopCategoryCreateArgs} args - Arguments to create a ShopCategory.
     * @example
     * // Create one ShopCategory
     * const ShopCategory = await prisma.shopCategory.create({
     *   data: {
     *     // ... data to create a ShopCategory
     *   }
     * })
     * 
     */
    create<T extends ShopCategoryCreateArgs>(args: SelectSubset<T, ShopCategoryCreateArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopCategories.
     * @param {ShopCategoryCreateManyArgs} args - Arguments to create many ShopCategories.
     * @example
     * // Create many ShopCategories
     * const shopCategory = await prisma.shopCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCategoryCreateManyArgs>(args?: SelectSubset<T, ShopCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopCategory.
     * @param {ShopCategoryDeleteArgs} args - Arguments to delete one ShopCategory.
     * @example
     * // Delete one ShopCategory
     * const ShopCategory = await prisma.shopCategory.delete({
     *   where: {
     *     // ... filter to delete one ShopCategory
     *   }
     * })
     * 
     */
    delete<T extends ShopCategoryDeleteArgs>(args: SelectSubset<T, ShopCategoryDeleteArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopCategory.
     * @param {ShopCategoryUpdateArgs} args - Arguments to update one ShopCategory.
     * @example
     * // Update one ShopCategory
     * const shopCategory = await prisma.shopCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopCategoryUpdateArgs>(args: SelectSubset<T, ShopCategoryUpdateArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopCategories.
     * @param {ShopCategoryDeleteManyArgs} args - Arguments to filter ShopCategories to delete.
     * @example
     * // Delete a few ShopCategories
     * const { count } = await prisma.shopCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopCategoryDeleteManyArgs>(args?: SelectSubset<T, ShopCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopCategories
     * const shopCategory = await prisma.shopCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopCategoryUpdateManyArgs>(args: SelectSubset<T, ShopCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopCategory.
     * @param {ShopCategoryUpsertArgs} args - Arguments to update or create a ShopCategory.
     * @example
     * // Update or create a ShopCategory
     * const shopCategory = await prisma.shopCategory.upsert({
     *   create: {
     *     // ... data to create a ShopCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopCategory we want to update
     *   }
     * })
     */
    upsert<T extends ShopCategoryUpsertArgs>(args: SelectSubset<T, ShopCategoryUpsertArgs<ExtArgs>>): Prisma__ShopCategoryClient<$Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryCountArgs} args - Arguments to filter ShopCategories to count.
     * @example
     * // Count the number of ShopCategories
     * const count = await prisma.shopCategory.count({
     *   where: {
     *     // ... the filter for the ShopCategories we want to count
     *   }
     * })
    **/
    count<T extends ShopCategoryCountArgs>(
      args?: Subset<T, ShopCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopCategoryAggregateArgs>(args: Subset<T, ShopCategoryAggregateArgs>): Prisma.PrismaPromise<GetShopCategoryAggregateType<T>>

    /**
     * Group by ShopCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ShopCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopCategory model
   */
  readonly fields: ShopCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopCategory$shopArgs<ExtArgs> = {}>(args?: Subset<T, ShopCategory$shopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopCategory model
   */
  interface ShopCategoryFieldRefs {
    readonly id: FieldRef<"ShopCategory", 'Int'>
    readonly category: FieldRef<"ShopCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShopCategory findUnique
   */
  export type ShopCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory findUniqueOrThrow
   */
  export type ShopCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory findFirst
   */
  export type ShopCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopCategories.
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopCategories.
     */
    distinct?: ShopCategoryScalarFieldEnum | ShopCategoryScalarFieldEnum[]
  }

  /**
   * ShopCategory findFirstOrThrow
   */
  export type ShopCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopCategory to fetch.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopCategories.
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopCategories.
     */
    distinct?: ShopCategoryScalarFieldEnum | ShopCategoryScalarFieldEnum[]
  }

  /**
   * ShopCategory findMany
   */
  export type ShopCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ShopCategories to fetch.
     */
    where?: ShopCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopCategories to fetch.
     */
    orderBy?: ShopCategoryOrderByWithRelationInput | ShopCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopCategories.
     */
    cursor?: ShopCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopCategories.
     */
    skip?: number
    distinct?: ShopCategoryScalarFieldEnum | ShopCategoryScalarFieldEnum[]
  }

  /**
   * ShopCategory create
   */
  export type ShopCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopCategory.
     */
    data: XOR<ShopCategoryCreateInput, ShopCategoryUncheckedCreateInput>
  }

  /**
   * ShopCategory createMany
   */
  export type ShopCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopCategories.
     */
    data: ShopCategoryCreateManyInput | ShopCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopCategory update
   */
  export type ShopCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopCategory.
     */
    data: XOR<ShopCategoryUpdateInput, ShopCategoryUncheckedUpdateInput>
    /**
     * Choose, which ShopCategory to update.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory updateMany
   */
  export type ShopCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopCategories.
     */
    data: XOR<ShopCategoryUpdateManyMutationInput, ShopCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ShopCategories to update
     */
    where?: ShopCategoryWhereInput
    /**
     * Limit how many ShopCategories to update.
     */
    limit?: number
  }

  /**
   * ShopCategory upsert
   */
  export type ShopCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopCategory to update in case it exists.
     */
    where: ShopCategoryWhereUniqueInput
    /**
     * In case the ShopCategory found by the `where` argument doesn't exist, create a new ShopCategory with this data.
     */
    create: XOR<ShopCategoryCreateInput, ShopCategoryUncheckedCreateInput>
    /**
     * In case the ShopCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopCategoryUpdateInput, ShopCategoryUncheckedUpdateInput>
  }

  /**
   * ShopCategory delete
   */
  export type ShopCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
    /**
     * Filter which ShopCategory to delete.
     */
    where: ShopCategoryWhereUniqueInput
  }

  /**
   * ShopCategory deleteMany
   */
  export type ShopCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopCategories to delete
     */
    where?: ShopCategoryWhereInput
    /**
     * Limit how many ShopCategories to delete.
     */
    limit?: number
  }

  /**
   * ShopCategory.shop
   */
  export type ShopCategory$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * ShopCategory without action
   */
  export type ShopCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCategory
     */
    select?: ShopCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopCategory
     */
    omit?: ShopCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    reviewStars: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    reviewStars: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    reviewTitle: string | null
    reviewContent: string | null
    reviewStars: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shopId: number | null
    reviewTitle: string | null
    reviewContent: string | null
    reviewStars: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    shopId: number
    reviewTitle: number
    reviewContent: number
    reviewStars: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    reviewStars?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    reviewStars?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    reviewTitle?: true
    reviewContent?: true
    reviewStars?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    reviewTitle?: true
    reviewContent?: true
    reviewStars?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    reviewTitle?: true
    reviewContent?: true
    reviewStars?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    shopId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    reviewTitle?: boolean
    reviewContent?: boolean
    reviewStars?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    shopId?: boolean
    reviewTitle?: boolean
    reviewContent?: boolean
    reviewStars?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shopId" | "reviewTitle" | "reviewContent" | "reviewStars", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      shopId: number
      reviewTitle: string
      reviewContent: string
      reviewStars: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly shopId: FieldRef<"Review", 'Int'>
    readonly reviewTitle: FieldRef<"Review", 'String'>
    readonly reviewContent: FieldRef<"Review", 'String'>
    readonly reviewStars: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
    point: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
    shopId: number | null
    point: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    content: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    content: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    shopId: number
    content: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
    shopId?: true
    point?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
    shopId?: true
    point?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    shopId?: true
    content?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    shopId?: true
    content?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    shopId?: true
    content?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    shopId: number
    content: string
    point: number
    createdAt: Date
    updatedAt: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    content?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    MissionLog?: boolean | Mission$MissionLogArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    shopId?: boolean
    content?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "content" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    MissionLog?: boolean | Mission$MissionLogArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      MissionLog: Prisma.$MissionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      content: string
      point: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MissionLog<T extends Mission$MissionLogArgs<ExtArgs> = {}>(args?: Subset<T, Mission$MissionLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly shopId: FieldRef<"Mission", 'Int'>
    readonly content: FieldRef<"Mission", 'String'>
    readonly point: FieldRef<"Mission", 'Int'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.MissionLog
   */
  export type Mission$MissionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    where?: MissionLogWhereInput
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    cursor?: MissionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionLog
   */

  export type AggregateMissionLog = {
    _count: MissionLogCountAggregateOutputType | null
    _avg: MissionLogAvgAggregateOutputType | null
    _sum: MissionLogSumAggregateOutputType | null
    _min: MissionLogMinAggregateOutputType | null
    _max: MissionLogMaxAggregateOutputType | null
  }

  export type MissionLogAvgAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type MissionLogSumAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type MissionLogMinAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type MissionLogMaxAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type MissionLogCountAggregateOutputType = {
    id: number
    missionId: number
    userId: number
    _all: number
  }


  export type MissionLogAvgAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type MissionLogSumAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type MissionLogMinAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type MissionLogMaxAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type MissionLogCountAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    _all?: true
  }

  export type MissionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionLog to aggregate.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionLogs
    **/
    _count?: true | MissionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionLogMaxAggregateInputType
  }

  export type GetMissionLogAggregateType<T extends MissionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionLog[P]>
      : GetScalarType<T[P], AggregateMissionLog[P]>
  }




  export type MissionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionLogWhereInput
    orderBy?: MissionLogOrderByWithAggregationInput | MissionLogOrderByWithAggregationInput[]
    by: MissionLogScalarFieldEnum[] | MissionLogScalarFieldEnum
    having?: MissionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionLogCountAggregateInputType | true
    _avg?: MissionLogAvgAggregateInputType
    _sum?: MissionLogSumAggregateInputType
    _min?: MissionLogMinAggregateInputType
    _max?: MissionLogMaxAggregateInputType
  }

  export type MissionLogGroupByOutputType = {
    id: number
    missionId: number
    userId: number
    _count: MissionLogCountAggregateOutputType | null
    _avg: MissionLogAvgAggregateOutputType | null
    _sum: MissionLogSumAggregateOutputType | null
    _min: MissionLogMinAggregateOutputType | null
    _max: MissionLogMaxAggregateOutputType | null
  }

  type GetMissionLogGroupByPayload<T extends MissionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionLogGroupByOutputType[P]>
            : GetScalarType<T[P], MissionLogGroupByOutputType[P]>
        }
      >
    >


  export type MissionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionLog"]>



  export type MissionLogSelectScalar = {
    id?: boolean
    missionId?: boolean
    userId?: boolean
  }

  export type MissionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "userId", ExtArgs["result"]["missionLog"]>
  export type MissionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missionId: number
      userId: number
    }, ExtArgs["result"]["missionLog"]>
    composites: {}
  }

  type MissionLogGetPayload<S extends boolean | null | undefined | MissionLogDefaultArgs> = $Result.GetResult<Prisma.$MissionLogPayload, S>

  type MissionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionLogCountAggregateInputType | true
    }

  export interface MissionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionLog'], meta: { name: 'MissionLog' } }
    /**
     * Find zero or one MissionLog that matches the filter.
     * @param {MissionLogFindUniqueArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionLogFindUniqueArgs>(args: SelectSubset<T, MissionLogFindUniqueArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionLogFindUniqueOrThrowArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogFindFirstArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionLogFindFirstArgs>(args?: SelectSubset<T, MissionLogFindFirstArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogFindFirstOrThrowArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionLogs
     * const missionLogs = await prisma.missionLog.findMany()
     * 
     * // Get first 10 MissionLogs
     * const missionLogs = await prisma.missionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionLogWithIdOnly = await prisma.missionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionLogFindManyArgs>(args?: SelectSubset<T, MissionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionLog.
     * @param {MissionLogCreateArgs} args - Arguments to create a MissionLog.
     * @example
     * // Create one MissionLog
     * const MissionLog = await prisma.missionLog.create({
     *   data: {
     *     // ... data to create a MissionLog
     *   }
     * })
     * 
     */
    create<T extends MissionLogCreateArgs>(args: SelectSubset<T, MissionLogCreateArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionLogs.
     * @param {MissionLogCreateManyArgs} args - Arguments to create many MissionLogs.
     * @example
     * // Create many MissionLogs
     * const missionLog = await prisma.missionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionLogCreateManyArgs>(args?: SelectSubset<T, MissionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissionLog.
     * @param {MissionLogDeleteArgs} args - Arguments to delete one MissionLog.
     * @example
     * // Delete one MissionLog
     * const MissionLog = await prisma.missionLog.delete({
     *   where: {
     *     // ... filter to delete one MissionLog
     *   }
     * })
     * 
     */
    delete<T extends MissionLogDeleteArgs>(args: SelectSubset<T, MissionLogDeleteArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionLog.
     * @param {MissionLogUpdateArgs} args - Arguments to update one MissionLog.
     * @example
     * // Update one MissionLog
     * const missionLog = await prisma.missionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionLogUpdateArgs>(args: SelectSubset<T, MissionLogUpdateArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionLogs.
     * @param {MissionLogDeleteManyArgs} args - Arguments to filter MissionLogs to delete.
     * @example
     * // Delete a few MissionLogs
     * const { count } = await prisma.missionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionLogDeleteManyArgs>(args?: SelectSubset<T, MissionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionLogs
     * const missionLog = await prisma.missionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionLogUpdateManyArgs>(args: SelectSubset<T, MissionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissionLog.
     * @param {MissionLogUpsertArgs} args - Arguments to update or create a MissionLog.
     * @example
     * // Update or create a MissionLog
     * const missionLog = await prisma.missionLog.upsert({
     *   create: {
     *     // ... data to create a MissionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionLog we want to update
     *   }
     * })
     */
    upsert<T extends MissionLogUpsertArgs>(args: SelectSubset<T, MissionLogUpsertArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogCountArgs} args - Arguments to filter MissionLogs to count.
     * @example
     * // Count the number of MissionLogs
     * const count = await prisma.missionLog.count({
     *   where: {
     *     // ... the filter for the MissionLogs we want to count
     *   }
     * })
    **/
    count<T extends MissionLogCountArgs>(
      args?: Subset<T, MissionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionLogAggregateArgs>(args: Subset<T, MissionLogAggregateArgs>): Prisma.PrismaPromise<GetMissionLogAggregateType<T>>

    /**
     * Group by MissionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionLogGroupByArgs['orderBy'] }
        : { orderBy?: MissionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionLog model
   */
  readonly fields: MissionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MissionLog model
   */
  interface MissionLogFieldRefs {
    readonly id: FieldRef<"MissionLog", 'Int'>
    readonly missionId: FieldRef<"MissionLog", 'Int'>
    readonly userId: FieldRef<"MissionLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MissionLog findUnique
   */
  export type MissionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog findUniqueOrThrow
   */
  export type MissionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog findFirst
   */
  export type MissionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionLogs.
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionLogs.
     */
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * MissionLog findFirstOrThrow
   */
  export type MissionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionLogs.
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionLogs.
     */
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * MissionLog findMany
   */
  export type MissionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLogs to fetch.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionLogs.
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * MissionLog create
   */
  export type MissionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionLog.
     */
    data: XOR<MissionLogCreateInput, MissionLogUncheckedCreateInput>
  }

  /**
   * MissionLog createMany
   */
  export type MissionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionLogs.
     */
    data: MissionLogCreateManyInput | MissionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionLog update
   */
  export type MissionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionLog.
     */
    data: XOR<MissionLogUpdateInput, MissionLogUncheckedUpdateInput>
    /**
     * Choose, which MissionLog to update.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog updateMany
   */
  export type MissionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionLogs.
     */
    data: XOR<MissionLogUpdateManyMutationInput, MissionLogUncheckedUpdateManyInput>
    /**
     * Filter which MissionLogs to update
     */
    where?: MissionLogWhereInput
    /**
     * Limit how many MissionLogs to update.
     */
    limit?: number
  }

  /**
   * MissionLog upsert
   */
  export type MissionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionLog to update in case it exists.
     */
    where: MissionLogWhereUniqueInput
    /**
     * In case the MissionLog found by the `where` argument doesn't exist, create a new MissionLog with this data.
     */
    create: XOR<MissionLogCreateInput, MissionLogUncheckedCreateInput>
    /**
     * In case the MissionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionLogUpdateInput, MissionLogUncheckedUpdateInput>
  }

  /**
   * MissionLog delete
   */
  export type MissionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter which MissionLog to delete.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog deleteMany
   */
  export type MissionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionLogs to delete
     */
    where?: MissionLogWhereInput
    /**
     * Limit how many MissionLogs to delete.
     */
    limit?: number
  }

  /**
   * MissionLog without action
   */
  export type MissionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    point: 'point',
    birth: 'birth'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserFoodCategoryScalarFieldEnum: {
    userId: 'userId',
    foodCategoryId: 'foodCategoryId'
  };

  export type UserFoodCategoryScalarFieldEnum = (typeof UserFoodCategoryScalarFieldEnum)[keyof typeof UserFoodCategoryScalarFieldEnum]


  export const FoodCategoryScalarFieldEnum: {
    id: 'id',
    food: 'food'
  };

  export type FoodCategoryScalarFieldEnum = (typeof FoodCategoryScalarFieldEnum)[keyof typeof FoodCategoryScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    shopName: 'shopName',
    shopAddress: 'shopAddress',
    shopCategory: 'shopCategory',
    areaId: 'areaId'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    areaName: 'areaName'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const ShopCategoryScalarFieldEnum: {
    id: 'id',
    category: 'category'
  };

  export type ShopCategoryScalarFieldEnum = (typeof ShopCategoryScalarFieldEnum)[keyof typeof ShopCategoryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shopId: 'shopId',
    reviewTitle: 'reviewTitle',
    reviewContent: 'reviewContent',
    reviewStars: 'reviewStars'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    content: 'content',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionLogScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    userId: 'userId'
  };

  export type MissionLogScalarFieldEnum = (typeof MissionLogScalarFieldEnum)[keyof typeof MissionLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    username: 'username',
    phoneNumber: 'phoneNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const FoodCategoryOrderByRelevanceFieldEnum: {
    food: 'food'
  };

  export type FoodCategoryOrderByRelevanceFieldEnum = (typeof FoodCategoryOrderByRelevanceFieldEnum)[keyof typeof FoodCategoryOrderByRelevanceFieldEnum]


  export const ShopOrderByRelevanceFieldEnum: {
    shopName: 'shopName',
    shopAddress: 'shopAddress'
  };

  export type ShopOrderByRelevanceFieldEnum = (typeof ShopOrderByRelevanceFieldEnum)[keyof typeof ShopOrderByRelevanceFieldEnum]


  export const AreaOrderByRelevanceFieldEnum: {
    areaName: 'areaName'
  };

  export type AreaOrderByRelevanceFieldEnum = (typeof AreaOrderByRelevanceFieldEnum)[keyof typeof AreaOrderByRelevanceFieldEnum]


  export const ShopCategoryOrderByRelevanceFieldEnum: {
    category: 'category'
  };

  export type ShopCategoryOrderByRelevanceFieldEnum = (typeof ShopCategoryOrderByRelevanceFieldEnum)[keyof typeof ShopCategoryOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    reviewTitle: 'reviewTitle',
    reviewContent: 'reviewContent'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    gender?: IntFilter<"User"> | number
    phoneNumber?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    birth?: DateTimeFilter<"User"> | Date | string
    UserFoodCategory?: UserFoodCategoryListRelationFilter
    Review?: ReviewListRelationFilter
    MissionLog?: MissionLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    birth?: SortOrder
    UserFoodCategory?: UserFoodCategoryOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    MissionLog?: MissionLogOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    gender?: IntFilter<"User"> | number
    point?: IntFilter<"User"> | number
    birth?: DateTimeFilter<"User"> | Date | string
    UserFoodCategory?: UserFoodCategoryListRelationFilter
    Review?: ReviewListRelationFilter
    MissionLog?: MissionLogListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    birth?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    gender?: IntWithAggregatesFilter<"User"> | number
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    point?: IntWithAggregatesFilter<"User"> | number
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserFoodCategoryWhereInput = {
    AND?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    OR?: UserFoodCategoryWhereInput[]
    NOT?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    userId?: IntFilter<"UserFoodCategory"> | number
    foodCategoryId?: IntFilter<"UserFoodCategory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodCategory?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
  }

  export type UserFoodCategoryOrderByWithRelationInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    foodCategory?: FoodCategoryOrderByWithRelationInput
  }

  export type UserFoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    userId_foodCategoryId?: UserFoodCategoryUserIdFoodCategoryIdCompoundUniqueInput
    AND?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    OR?: UserFoodCategoryWhereInput[]
    NOT?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    userId?: IntFilter<"UserFoodCategory"> | number
    foodCategoryId?: IntFilter<"UserFoodCategory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodCategory?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
  }, "userId_foodCategoryId">

  export type UserFoodCategoryOrderByWithAggregationInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
    _count?: UserFoodCategoryCountOrderByAggregateInput
    _avg?: UserFoodCategoryAvgOrderByAggregateInput
    _max?: UserFoodCategoryMaxOrderByAggregateInput
    _min?: UserFoodCategoryMinOrderByAggregateInput
    _sum?: UserFoodCategorySumOrderByAggregateInput
  }

  export type UserFoodCategoryScalarWhereWithAggregatesInput = {
    AND?: UserFoodCategoryScalarWhereWithAggregatesInput | UserFoodCategoryScalarWhereWithAggregatesInput[]
    OR?: UserFoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserFoodCategoryScalarWhereWithAggregatesInput | UserFoodCategoryScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserFoodCategory"> | number
    foodCategoryId?: IntWithAggregatesFilter<"UserFoodCategory"> | number
  }

  export type FoodCategoryWhereInput = {
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    id?: IntFilter<"FoodCategory"> | number
    food?: StringFilter<"FoodCategory"> | string
    UserFoodCategory?: UserFoodCategoryListRelationFilter
  }

  export type FoodCategoryOrderByWithRelationInput = {
    id?: SortOrder
    food?: SortOrder
    UserFoodCategory?: UserFoodCategoryOrderByRelationAggregateInput
    _relevance?: FoodCategoryOrderByRelevanceInput
  }

  export type FoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    food?: StringFilter<"FoodCategory"> | string
    UserFoodCategory?: UserFoodCategoryListRelationFilter
  }, "id">

  export type FoodCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    food?: SortOrder
    _count?: FoodCategoryCountOrderByAggregateInput
    _avg?: FoodCategoryAvgOrderByAggregateInput
    _max?: FoodCategoryMaxOrderByAggregateInput
    _min?: FoodCategoryMinOrderByAggregateInput
    _sum?: FoodCategorySumOrderByAggregateInput
  }

  export type FoodCategoryScalarWhereWithAggregatesInput = {
    AND?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    OR?: FoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodCategory"> | number
    food?: StringWithAggregatesFilter<"FoodCategory"> | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    shopName?: StringFilter<"Shop"> | string
    shopAddress?: StringFilter<"Shop"> | string
    shopCategory?: IntFilter<"Shop"> | number
    areaId?: IntFilter<"Shop"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    shopCat?: XOR<ShopCategoryScalarRelationFilter, ShopCategoryWhereInput>
    Review?: ReviewListRelationFilter
    Mission?: MissionListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    shopName?: SortOrder
    shopAddress?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
    area?: AreaOrderByWithRelationInput
    shopCat?: ShopCategoryOrderByWithRelationInput
    Review?: ReviewOrderByRelationAggregateInput
    Mission?: MissionOrderByRelationAggregateInput
    _relevance?: ShopOrderByRelevanceInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    shopName?: StringFilter<"Shop"> | string
    shopAddress?: StringFilter<"Shop"> | string
    shopCategory?: IntFilter<"Shop"> | number
    areaId?: IntFilter<"Shop"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    shopCat?: XOR<ShopCategoryScalarRelationFilter, ShopCategoryWhereInput>
    Review?: ReviewListRelationFilter
    Mission?: MissionListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    shopName?: SortOrder
    shopAddress?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    shopName?: StringWithAggregatesFilter<"Shop"> | string
    shopAddress?: StringWithAggregatesFilter<"Shop"> | string
    shopCategory?: IntWithAggregatesFilter<"Shop"> | number
    areaId?: IntWithAggregatesFilter<"Shop"> | number
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    areaName?: StringFilter<"Area"> | string
    shop?: ShopListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    areaName?: SortOrder
    shop?: ShopOrderByRelationAggregateInput
    _relevance?: AreaOrderByRelevanceInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    areaName?: StringFilter<"Area"> | string
    shop?: ShopListRelationFilter
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    areaName?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    areaName?: StringWithAggregatesFilter<"Area"> | string
  }

  export type ShopCategoryWhereInput = {
    AND?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    OR?: ShopCategoryWhereInput[]
    NOT?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    id?: IntFilter<"ShopCategory"> | number
    category?: StringFilter<"ShopCategory"> | string
    shop?: ShopListRelationFilter
  }

  export type ShopCategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    shop?: ShopOrderByRelationAggregateInput
    _relevance?: ShopCategoryOrderByRelevanceInput
  }

  export type ShopCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    OR?: ShopCategoryWhereInput[]
    NOT?: ShopCategoryWhereInput | ShopCategoryWhereInput[]
    category?: StringFilter<"ShopCategory"> | string
    shop?: ShopListRelationFilter
  }, "id">

  export type ShopCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    _count?: ShopCategoryCountOrderByAggregateInput
    _avg?: ShopCategoryAvgOrderByAggregateInput
    _max?: ShopCategoryMaxOrderByAggregateInput
    _min?: ShopCategoryMinOrderByAggregateInput
    _sum?: ShopCategorySumOrderByAggregateInput
  }

  export type ShopCategoryScalarWhereWithAggregatesInput = {
    AND?: ShopCategoryScalarWhereWithAggregatesInput | ShopCategoryScalarWhereWithAggregatesInput[]
    OR?: ShopCategoryScalarWhereWithAggregatesInput[]
    NOT?: ShopCategoryScalarWhereWithAggregatesInput | ShopCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShopCategory"> | number
    category?: StringWithAggregatesFilter<"ShopCategory"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    shopId?: IntFilter<"Review"> | number
    reviewTitle?: StringFilter<"Review"> | string
    reviewContent?: StringFilter<"Review"> | string
    reviewStars?: IntFilter<"Review"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewTitle?: SortOrder
    reviewContent?: SortOrder
    reviewStars?: SortOrder
    user?: UserOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    shopId?: IntFilter<"Review"> | number
    reviewTitle?: StringFilter<"Review"> | string
    reviewContent?: StringFilter<"Review"> | string
    reviewStars?: IntFilter<"Review"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewTitle?: SortOrder
    reviewContent?: SortOrder
    reviewStars?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    shopId?: IntWithAggregatesFilter<"Review"> | number
    reviewTitle?: StringWithAggregatesFilter<"Review"> | string
    reviewContent?: StringWithAggregatesFilter<"Review"> | string
    reviewStars?: IntWithAggregatesFilter<"Review"> | number
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    shopId?: IntFilter<"Mission"> | number
    content?: StringFilter<"Mission"> | string
    point?: IntFilter<"Mission"> | number
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    MissionLog?: MissionLogListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    content?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    MissionLog?: MissionLogOrderByRelationAggregateInput
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    shopId?: IntFilter<"Mission"> | number
    content?: StringFilter<"Mission"> | string
    point?: IntFilter<"Mission"> | number
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    MissionLog?: MissionLogListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    content?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    shopId?: IntWithAggregatesFilter<"Mission"> | number
    content?: StringWithAggregatesFilter<"Mission"> | string
    point?: IntWithAggregatesFilter<"Mission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionLogWhereInput = {
    AND?: MissionLogWhereInput | MissionLogWhereInput[]
    OR?: MissionLogWhereInput[]
    NOT?: MissionLogWhereInput | MissionLogWhereInput[]
    id?: IntFilter<"MissionLog"> | number
    missionId?: IntFilter<"MissionLog"> | number
    userId?: IntFilter<"MissionLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionLogOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    mission?: MissionOrderByWithRelationInput
  }

  export type MissionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionLogWhereInput | MissionLogWhereInput[]
    OR?: MissionLogWhereInput[]
    NOT?: MissionLogWhereInput | MissionLogWhereInput[]
    missionId?: IntFilter<"MissionLog"> | number
    userId?: IntFilter<"MissionLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id">

  export type MissionLogOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    _count?: MissionLogCountOrderByAggregateInput
    _avg?: MissionLogAvgOrderByAggregateInput
    _max?: MissionLogMaxOrderByAggregateInput
    _min?: MissionLogMinOrderByAggregateInput
    _sum?: MissionLogSumOrderByAggregateInput
  }

  export type MissionLogScalarWhereWithAggregatesInput = {
    AND?: MissionLogScalarWhereWithAggregatesInput | MissionLogScalarWhereWithAggregatesInput[]
    OR?: MissionLogScalarWhereWithAggregatesInput[]
    NOT?: MissionLogScalarWhereWithAggregatesInput | MissionLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MissionLog"> | number
    missionId?: IntWithAggregatesFilter<"MissionLog"> | number
    userId?: IntWithAggregatesFilter<"MissionLog"> | number
  }

  export type UserCreateInput = {
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    UserFoodCategory?: UserFoodCategoryCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    MissionLog?: MissionLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    UserFoodCategory?: UserFoodCategoryUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    MissionLog?: MissionLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFoodCategory?: UserFoodCategoryUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    MissionLog?: MissionLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFoodCategory?: UserFoodCategoryUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    MissionLog?: MissionLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFoodCategoryCreateInput = {
    user: UserCreateNestedOneWithoutUserFoodCategoryInput
    foodCategory: FoodCategoryCreateNestedOneWithoutUserFoodCategoryInput
  }

  export type UserFoodCategoryUncheckedCreateInput = {
    userId: number
    foodCategoryId: number
  }

  export type UserFoodCategoryUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserFoodCategoryNestedInput
    foodCategory?: FoodCategoryUpdateOneRequiredWithoutUserFoodCategoryNestedInput
  }

  export type UserFoodCategoryUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodCategoryCreateManyInput = {
    userId: number
    foodCategoryId: number
  }

  export type UserFoodCategoryUpdateManyMutationInput = {

  }

  export type UserFoodCategoryUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodCategoryCreateInput = {
    food: string
    UserFoodCategory?: UserFoodCategoryCreateNestedManyWithoutFoodCategoryInput
  }

  export type FoodCategoryUncheckedCreateInput = {
    id?: number
    food: string
    UserFoodCategory?: UserFoodCategoryUncheckedCreateNestedManyWithoutFoodCategoryInput
  }

  export type FoodCategoryUpdateInput = {
    food?: StringFieldUpdateOperationsInput | string
    UserFoodCategory?: UserFoodCategoryUpdateManyWithoutFoodCategoryNestedInput
  }

  export type FoodCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    food?: StringFieldUpdateOperationsInput | string
    UserFoodCategory?: UserFoodCategoryUncheckedUpdateManyWithoutFoodCategoryNestedInput
  }

  export type FoodCategoryCreateManyInput = {
    id?: number
    food: string
  }

  export type FoodCategoryUpdateManyMutationInput = {
    food?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    food?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCreateInput = {
    shopName: string
    shopAddress: string
    area: AreaCreateNestedOneWithoutShopInput
    shopCat: ShopCategoryCreateNestedOneWithoutShopInput
    Review?: ReviewCreateNestedManyWithoutShopInput
    Mission?: MissionCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    shopName: string
    shopAddress: string
    shopCategory: number
    areaId: number
    Review?: ReviewUncheckedCreateNestedManyWithoutShopInput
    Mission?: MissionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutShopNestedInput
    shopCat?: ShopCategoryUpdateOneRequiredWithoutShopNestedInput
    Review?: ReviewUpdateManyWithoutShopNestedInput
    Mission?: MissionUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCategory?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutShopNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: number
    shopName: string
    shopAddress: string
    shopCategory: number
    areaId: number
  }

  export type ShopUpdateManyMutationInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCategory?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateInput = {
    areaName: string
    shop?: ShopCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    areaName: string
    shop?: ShopUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    areaName?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaName?: StringFieldUpdateOperationsInput | string
    shop?: ShopUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    areaName: string
  }

  export type AreaUpdateManyMutationInput = {
    areaName?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaName?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCategoryCreateInput = {
    category: string
    shop?: ShopCreateNestedManyWithoutShopCatInput
  }

  export type ShopCategoryUncheckedCreateInput = {
    id?: number
    category: string
    shop?: ShopUncheckedCreateNestedManyWithoutShopCatInput
  }

  export type ShopCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateManyWithoutShopCatNestedInput
  }

  export type ShopCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    shop?: ShopUncheckedUpdateManyWithoutShopCatNestedInput
  }

  export type ShopCategoryCreateManyInput = {
    id?: number
    category: string
  }

  export type ShopCategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    reviewTitle: string
    reviewContent: string
    reviewStars: number
    user: UserCreateNestedOneWithoutReviewInput
    shop: ShopCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    shopId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
  }

  export type ReviewUpdateInput = {
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    shop?: ShopUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    shopId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
  }

  export type ReviewUpdateManyMutationInput = {
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type MissionCreateInput = {
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
    shop: ShopCreateNestedOneWithoutMissionInput
    MissionLog?: MissionLogCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    shopId: number
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
    MissionLog?: MissionLogUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMissionNestedInput
    MissionLog?: MissionLogUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MissionLog?: MissionLogUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: number
    shopId: number
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionLogCreateInput = {
    user: UserCreateNestedOneWithoutMissionLogInput
    mission: MissionCreateNestedOneWithoutMissionLogInput
  }

  export type MissionLogUncheckedCreateInput = {
    id?: number
    missionId: number
    userId: number
  }

  export type MissionLogUpdateInput = {
    user?: UserUpdateOneRequiredWithoutMissionLogNestedInput
    mission?: MissionUpdateOneRequiredWithoutMissionLogNestedInput
  }

  export type MissionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogCreateManyInput = {
    id?: number
    missionId: number
    userId: number
  }

  export type MissionLogUpdateManyMutationInput = {

  }

  export type MissionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserFoodCategoryListRelationFilter = {
    every?: UserFoodCategoryWhereInput
    some?: UserFoodCategoryWhereInput
    none?: UserFoodCategoryWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type MissionLogListRelationFilter = {
    every?: MissionLogWhereInput
    some?: MissionLogWhereInput
    none?: MissionLogWhereInput
  }

  export type UserFoodCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    birth?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    point?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    birth?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    birth?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    point?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodCategoryScalarRelationFilter = {
    is?: FoodCategoryWhereInput
    isNot?: FoodCategoryWhereInput
  }

  export type UserFoodCategoryUserIdFoodCategoryIdCompoundUniqueInput = {
    userId: number
    foodCategoryId: number
  }

  export type UserFoodCategoryCountOrderByAggregateInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFoodCategoryAvgOrderByAggregateInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFoodCategoryMaxOrderByAggregateInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFoodCategoryMinOrderByAggregateInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFoodCategorySumOrderByAggregateInput = {
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type FoodCategoryOrderByRelevanceInput = {
    fields: FoodCategoryOrderByRelevanceFieldEnum | FoodCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    food?: SortOrder
  }

  export type FoodCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    food?: SortOrder
  }

  export type FoodCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    food?: SortOrder
  }

  export type FoodCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type ShopCategoryScalarRelationFilter = {
    is?: ShopCategoryWhereInput
    isNot?: ShopCategoryWhereInput
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderByRelevanceInput = {
    fields: ShopOrderByRelevanceFieldEnum | ShopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    shopAddress?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    shopAddress?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    shopAddress?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
    shopCategory?: SortOrder
    areaId?: SortOrder
  }

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaOrderByRelevanceInput = {
    fields: AreaOrderByRelevanceFieldEnum | AreaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    areaName?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    areaName?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    areaName?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopCategoryOrderByRelevanceInput = {
    fields: ShopCategoryOrderByRelevanceFieldEnum | ShopCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type ShopCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type ShopCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type ShopCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewTitle?: SortOrder
    reviewContent?: SortOrder
    reviewStars?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewStars?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewTitle?: SortOrder
    reviewContent?: SortOrder
    reviewStars?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewTitle?: SortOrder
    reviewContent?: SortOrder
    reviewStars?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    reviewStars?: SortOrder
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    content?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    point?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    content?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    content?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    point?: SortOrder
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type MissionLogCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type MissionLogAvgOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type MissionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type MissionLogMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type MissionLogSumOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type UserFoodCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFoodCategoryCreateWithoutUserInput, UserFoodCategoryUncheckedCreateWithoutUserInput> | UserFoodCategoryCreateWithoutUserInput[] | UserFoodCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutUserInput | UserFoodCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserFoodCategoryCreateManyUserInputEnvelope
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionLogCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionLogCreateWithoutUserInput, MissionLogUncheckedCreateWithoutUserInput> | MissionLogCreateWithoutUserInput[] | MissionLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserInput | MissionLogCreateOrConnectWithoutUserInput[]
    createMany?: MissionLogCreateManyUserInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type UserFoodCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFoodCategoryCreateWithoutUserInput, UserFoodCategoryUncheckedCreateWithoutUserInput> | UserFoodCategoryCreateWithoutUserInput[] | UserFoodCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutUserInput | UserFoodCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserFoodCategoryCreateManyUserInputEnvelope
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionLogCreateWithoutUserInput, MissionLogUncheckedCreateWithoutUserInput> | MissionLogCreateWithoutUserInput[] | MissionLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserInput | MissionLogCreateOrConnectWithoutUserInput[]
    createMany?: MissionLogCreateManyUserInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserFoodCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFoodCategoryCreateWithoutUserInput, UserFoodCategoryUncheckedCreateWithoutUserInput> | UserFoodCategoryCreateWithoutUserInput[] | UserFoodCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutUserInput | UserFoodCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserFoodCategoryUpsertWithWhereUniqueWithoutUserInput | UserFoodCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFoodCategoryCreateManyUserInputEnvelope
    set?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    disconnect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    delete?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    update?: UserFoodCategoryUpdateWithWhereUniqueWithoutUserInput | UserFoodCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFoodCategoryUpdateManyWithWhereWithoutUserInput | UserFoodCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFoodCategoryScalarWhereInput | UserFoodCategoryScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionLogCreateWithoutUserInput, MissionLogUncheckedCreateWithoutUserInput> | MissionLogCreateWithoutUserInput[] | MissionLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserInput | MissionLogCreateOrConnectWithoutUserInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutUserInput | MissionLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionLogCreateManyUserInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutUserInput | MissionLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutUserInput | MissionLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type UserFoodCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFoodCategoryCreateWithoutUserInput, UserFoodCategoryUncheckedCreateWithoutUserInput> | UserFoodCategoryCreateWithoutUserInput[] | UserFoodCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutUserInput | UserFoodCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserFoodCategoryUpsertWithWhereUniqueWithoutUserInput | UserFoodCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFoodCategoryCreateManyUserInputEnvelope
    set?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    disconnect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    delete?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    update?: UserFoodCategoryUpdateWithWhereUniqueWithoutUserInput | UserFoodCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFoodCategoryUpdateManyWithWhereWithoutUserInput | UserFoodCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFoodCategoryScalarWhereInput | UserFoodCategoryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionLogCreateWithoutUserInput, MissionLogUncheckedCreateWithoutUserInput> | MissionLogCreateWithoutUserInput[] | MissionLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserInput | MissionLogCreateOrConnectWithoutUserInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutUserInput | MissionLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionLogCreateManyUserInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutUserInput | MissionLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutUserInput | MissionLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFoodCategoryInput = {
    create?: XOR<UserCreateWithoutUserFoodCategoryInput, UserUncheckedCreateWithoutUserFoodCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFoodCategoryInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCategoryCreateNestedOneWithoutUserFoodCategoryInput = {
    create?: XOR<FoodCategoryCreateWithoutUserFoodCategoryInput, FoodCategoryUncheckedCreateWithoutUserFoodCategoryInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutUserFoodCategoryInput
    connect?: FoodCategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserFoodCategoryNestedInput = {
    create?: XOR<UserCreateWithoutUserFoodCategoryInput, UserUncheckedCreateWithoutUserFoodCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFoodCategoryInput
    upsert?: UserUpsertWithoutUserFoodCategoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFoodCategoryInput, UserUpdateWithoutUserFoodCategoryInput>, UserUncheckedUpdateWithoutUserFoodCategoryInput>
  }

  export type FoodCategoryUpdateOneRequiredWithoutUserFoodCategoryNestedInput = {
    create?: XOR<FoodCategoryCreateWithoutUserFoodCategoryInput, FoodCategoryUncheckedCreateWithoutUserFoodCategoryInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutUserFoodCategoryInput
    upsert?: FoodCategoryUpsertWithoutUserFoodCategoryInput
    connect?: FoodCategoryWhereUniqueInput
    update?: XOR<XOR<FoodCategoryUpdateToOneWithWhereWithoutUserFoodCategoryInput, FoodCategoryUpdateWithoutUserFoodCategoryInput>, FoodCategoryUncheckedUpdateWithoutUserFoodCategoryInput>
  }

  export type UserFoodCategoryCreateNestedManyWithoutFoodCategoryInput = {
    create?: XOR<UserFoodCategoryCreateWithoutFoodCategoryInput, UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFoodCategoryCreateWithoutFoodCategoryInput[] | UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput | UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput[]
    createMany?: UserFoodCategoryCreateManyFoodCategoryInputEnvelope
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
  }

  export type UserFoodCategoryUncheckedCreateNestedManyWithoutFoodCategoryInput = {
    create?: XOR<UserFoodCategoryCreateWithoutFoodCategoryInput, UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFoodCategoryCreateWithoutFoodCategoryInput[] | UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput | UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput[]
    createMany?: UserFoodCategoryCreateManyFoodCategoryInputEnvelope
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
  }

  export type UserFoodCategoryUpdateManyWithoutFoodCategoryNestedInput = {
    create?: XOR<UserFoodCategoryCreateWithoutFoodCategoryInput, UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFoodCategoryCreateWithoutFoodCategoryInput[] | UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput | UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput[]
    upsert?: UserFoodCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput | UserFoodCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput[]
    createMany?: UserFoodCategoryCreateManyFoodCategoryInputEnvelope
    set?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    disconnect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    delete?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    update?: UserFoodCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput | UserFoodCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput[]
    updateMany?: UserFoodCategoryUpdateManyWithWhereWithoutFoodCategoryInput | UserFoodCategoryUpdateManyWithWhereWithoutFoodCategoryInput[]
    deleteMany?: UserFoodCategoryScalarWhereInput | UserFoodCategoryScalarWhereInput[]
  }

  export type UserFoodCategoryUncheckedUpdateManyWithoutFoodCategoryNestedInput = {
    create?: XOR<UserFoodCategoryCreateWithoutFoodCategoryInput, UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFoodCategoryCreateWithoutFoodCategoryInput[] | UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput | UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput[]
    upsert?: UserFoodCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput | UserFoodCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput[]
    createMany?: UserFoodCategoryCreateManyFoodCategoryInputEnvelope
    set?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    disconnect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    delete?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    connect?: UserFoodCategoryWhereUniqueInput | UserFoodCategoryWhereUniqueInput[]
    update?: UserFoodCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput | UserFoodCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput[]
    updateMany?: UserFoodCategoryUpdateManyWithWhereWithoutFoodCategoryInput | UserFoodCategoryUpdateManyWithWhereWithoutFoodCategoryInput[]
    deleteMany?: UserFoodCategoryScalarWhereInput | UserFoodCategoryScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutShopInput = {
    create?: XOR<AreaCreateWithoutShopInput, AreaUncheckedCreateWithoutShopInput>
    connectOrCreate?: AreaCreateOrConnectWithoutShopInput
    connect?: AreaWhereUniqueInput
  }

  export type ShopCategoryCreateNestedOneWithoutShopInput = {
    create?: XOR<ShopCategoryCreateWithoutShopInput, ShopCategoryUncheckedCreateWithoutShopInput>
    connectOrCreate?: ShopCategoryCreateOrConnectWithoutShopInput
    connect?: ShopCategoryWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutShopInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutShopInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type AreaUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<AreaCreateWithoutShopInput, AreaUncheckedCreateWithoutShopInput>
    connectOrCreate?: AreaCreateOrConnectWithoutShopInput
    upsert?: AreaUpsertWithoutShopInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutShopInput, AreaUpdateWithoutShopInput>, AreaUncheckedUpdateWithoutShopInput>
  }

  export type ShopCategoryUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<ShopCategoryCreateWithoutShopInput, ShopCategoryUncheckedCreateWithoutShopInput>
    connectOrCreate?: ShopCategoryCreateOrConnectWithoutShopInput
    upsert?: ShopCategoryUpsertWithoutShopInput
    connect?: ShopCategoryWhereUniqueInput
    update?: XOR<XOR<ShopCategoryUpdateToOneWithWhereWithoutShopInput, ShopCategoryUpdateWithoutShopInput>, ShopCategoryUncheckedUpdateWithoutShopInput>
  }

  export type ReviewUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutShopInput | ReviewUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutShopInput | ReviewUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutShopInput | ReviewUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutShopNestedInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutShopInput | MissionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutShopInput | MissionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutShopInput | MissionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutShopInput | ReviewUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutShopInput | ReviewUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutShopInput | ReviewUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutShopInput | MissionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutShopInput | MissionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutShopInput | MissionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ShopCreateNestedManyWithoutAreaInput = {
    create?: XOR<ShopCreateWithoutAreaInput, ShopUncheckedCreateWithoutAreaInput> | ShopCreateWithoutAreaInput[] | ShopUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutAreaInput | ShopCreateOrConnectWithoutAreaInput[]
    createMany?: ShopCreateManyAreaInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<ShopCreateWithoutAreaInput, ShopUncheckedCreateWithoutAreaInput> | ShopCreateWithoutAreaInput[] | ShopUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutAreaInput | ShopCreateOrConnectWithoutAreaInput[]
    createMany?: ShopCreateManyAreaInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ShopCreateWithoutAreaInput, ShopUncheckedCreateWithoutAreaInput> | ShopCreateWithoutAreaInput[] | ShopUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutAreaInput | ShopCreateOrConnectWithoutAreaInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutAreaInput | ShopUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ShopCreateManyAreaInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutAreaInput | ShopUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutAreaInput | ShopUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<ShopCreateWithoutAreaInput, ShopUncheckedCreateWithoutAreaInput> | ShopCreateWithoutAreaInput[] | ShopUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutAreaInput | ShopCreateOrConnectWithoutAreaInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutAreaInput | ShopUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: ShopCreateManyAreaInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutAreaInput | ShopUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutAreaInput | ShopUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopCreateNestedManyWithoutShopCatInput = {
    create?: XOR<ShopCreateWithoutShopCatInput, ShopUncheckedCreateWithoutShopCatInput> | ShopCreateWithoutShopCatInput[] | ShopUncheckedCreateWithoutShopCatInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutShopCatInput | ShopCreateOrConnectWithoutShopCatInput[]
    createMany?: ShopCreateManyShopCatInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutShopCatInput = {
    create?: XOR<ShopCreateWithoutShopCatInput, ShopUncheckedCreateWithoutShopCatInput> | ShopCreateWithoutShopCatInput[] | ShopUncheckedCreateWithoutShopCatInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutShopCatInput | ShopCreateOrConnectWithoutShopCatInput[]
    createMany?: ShopCreateManyShopCatInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUpdateManyWithoutShopCatNestedInput = {
    create?: XOR<ShopCreateWithoutShopCatInput, ShopUncheckedCreateWithoutShopCatInput> | ShopCreateWithoutShopCatInput[] | ShopUncheckedCreateWithoutShopCatInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutShopCatInput | ShopCreateOrConnectWithoutShopCatInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutShopCatInput | ShopUpsertWithWhereUniqueWithoutShopCatInput[]
    createMany?: ShopCreateManyShopCatInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutShopCatInput | ShopUpdateWithWhereUniqueWithoutShopCatInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutShopCatInput | ShopUpdateManyWithWhereWithoutShopCatInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutShopCatNestedInput = {
    create?: XOR<ShopCreateWithoutShopCatInput, ShopUncheckedCreateWithoutShopCatInput> | ShopCreateWithoutShopCatInput[] | ShopUncheckedCreateWithoutShopCatInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutShopCatInput | ShopCreateOrConnectWithoutShopCatInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutShopCatInput | ShopUpsertWithWhereUniqueWithoutShopCatInput[]
    createMany?: ShopCreateManyShopCatInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutShopCatInput | ShopUpdateWithWhereUniqueWithoutShopCatInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutShopCatInput | ShopUpdateManyWithWhereWithoutShopCatInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutReviewInput = {
    create?: XOR<ShopCreateWithoutReviewInput, ShopUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReviewInput
    connect?: ShopWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type ShopUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<ShopCreateWithoutReviewInput, ShopUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReviewInput
    upsert?: ShopUpsertWithoutReviewInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutReviewInput, ShopUpdateWithoutReviewInput>, ShopUncheckedUpdateWithoutReviewInput>
  }

  export type ShopCreateNestedOneWithoutMissionInput = {
    create?: XOR<ShopCreateWithoutMissionInput, ShopUncheckedCreateWithoutMissionInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMissionInput
    connect?: ShopWhereUniqueInput
  }

  export type MissionLogCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type MissionLogUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type ShopUpdateOneRequiredWithoutMissionNestedInput = {
    create?: XOR<ShopCreateWithoutMissionInput, ShopUncheckedCreateWithoutMissionInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMissionInput
    upsert?: ShopUpsertWithoutMissionInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutMissionInput, ShopUpdateWithoutMissionInput>, ShopUncheckedUpdateWithoutMissionInput>
  }

  export type MissionLogUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutMissionInput | MissionLogUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutMissionInput | MissionLogUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutMissionInput | MissionLogUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type MissionLogUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutMissionInput | MissionLogUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutMissionInput | MissionLogUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutMissionInput | MissionLogUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMissionLogInput = {
    create?: XOR<UserCreateWithoutMissionLogInput, UserUncheckedCreateWithoutMissionLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionLogInput
    connect?: UserWhereUniqueInput
  }

  export type MissionCreateNestedOneWithoutMissionLogInput = {
    create?: XOR<MissionCreateWithoutMissionLogInput, MissionUncheckedCreateWithoutMissionLogInput>
    connectOrCreate?: MissionCreateOrConnectWithoutMissionLogInput
    connect?: MissionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMissionLogNestedInput = {
    create?: XOR<UserCreateWithoutMissionLogInput, UserUncheckedCreateWithoutMissionLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionLogInput
    upsert?: UserUpsertWithoutMissionLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMissionLogInput, UserUpdateWithoutMissionLogInput>, UserUncheckedUpdateWithoutMissionLogInput>
  }

  export type MissionUpdateOneRequiredWithoutMissionLogNestedInput = {
    create?: XOR<MissionCreateWithoutMissionLogInput, MissionUncheckedCreateWithoutMissionLogInput>
    connectOrCreate?: MissionCreateOrConnectWithoutMissionLogInput
    upsert?: MissionUpsertWithoutMissionLogInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutMissionLogInput, MissionUpdateWithoutMissionLogInput>, MissionUncheckedUpdateWithoutMissionLogInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserFoodCategoryCreateWithoutUserInput = {
    foodCategory: FoodCategoryCreateNestedOneWithoutUserFoodCategoryInput
  }

  export type UserFoodCategoryUncheckedCreateWithoutUserInput = {
    foodCategoryId: number
  }

  export type UserFoodCategoryCreateOrConnectWithoutUserInput = {
    where: UserFoodCategoryWhereUniqueInput
    create: XOR<UserFoodCategoryCreateWithoutUserInput, UserFoodCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserFoodCategoryCreateManyUserInputEnvelope = {
    data: UserFoodCategoryCreateManyUserInput | UserFoodCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    reviewTitle: string
    reviewContent: string
    reviewStars: number
    shop: ShopCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    shopId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MissionLogCreateWithoutUserInput = {
    mission: MissionCreateNestedOneWithoutMissionLogInput
  }

  export type MissionLogUncheckedCreateWithoutUserInput = {
    id?: number
    missionId: number
  }

  export type MissionLogCreateOrConnectWithoutUserInput = {
    where: MissionLogWhereUniqueInput
    create: XOR<MissionLogCreateWithoutUserInput, MissionLogUncheckedCreateWithoutUserInput>
  }

  export type MissionLogCreateManyUserInputEnvelope = {
    data: MissionLogCreateManyUserInput | MissionLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFoodCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFoodCategoryWhereUniqueInput
    update: XOR<UserFoodCategoryUpdateWithoutUserInput, UserFoodCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserFoodCategoryCreateWithoutUserInput, UserFoodCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserFoodCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFoodCategoryWhereUniqueInput
    data: XOR<UserFoodCategoryUpdateWithoutUserInput, UserFoodCategoryUncheckedUpdateWithoutUserInput>
  }

  export type UserFoodCategoryUpdateManyWithWhereWithoutUserInput = {
    where: UserFoodCategoryScalarWhereInput
    data: XOR<UserFoodCategoryUpdateManyMutationInput, UserFoodCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFoodCategoryScalarWhereInput = {
    AND?: UserFoodCategoryScalarWhereInput | UserFoodCategoryScalarWhereInput[]
    OR?: UserFoodCategoryScalarWhereInput[]
    NOT?: UserFoodCategoryScalarWhereInput | UserFoodCategoryScalarWhereInput[]
    userId?: IntFilter<"UserFoodCategory"> | number
    foodCategoryId?: IntFilter<"UserFoodCategory"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    shopId?: IntFilter<"Review"> | number
    reviewTitle?: StringFilter<"Review"> | string
    reviewContent?: StringFilter<"Review"> | string
    reviewStars?: IntFilter<"Review"> | number
  }

  export type MissionLogUpsertWithWhereUniqueWithoutUserInput = {
    where: MissionLogWhereUniqueInput
    update: XOR<MissionLogUpdateWithoutUserInput, MissionLogUncheckedUpdateWithoutUserInput>
    create: XOR<MissionLogCreateWithoutUserInput, MissionLogUncheckedCreateWithoutUserInput>
  }

  export type MissionLogUpdateWithWhereUniqueWithoutUserInput = {
    where: MissionLogWhereUniqueInput
    data: XOR<MissionLogUpdateWithoutUserInput, MissionLogUncheckedUpdateWithoutUserInput>
  }

  export type MissionLogUpdateManyWithWhereWithoutUserInput = {
    where: MissionLogScalarWhereInput
    data: XOR<MissionLogUpdateManyMutationInput, MissionLogUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionLogScalarWhereInput = {
    AND?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
    OR?: MissionLogScalarWhereInput[]
    NOT?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
    id?: IntFilter<"MissionLog"> | number
    missionId?: IntFilter<"MissionLog"> | number
    userId?: IntFilter<"MissionLog"> | number
  }

  export type UserCreateWithoutUserFoodCategoryInput = {
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    Review?: ReviewCreateNestedManyWithoutUserInput
    MissionLog?: MissionLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFoodCategoryInput = {
    id?: number
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    MissionLog?: MissionLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFoodCategoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFoodCategoryInput, UserUncheckedCreateWithoutUserFoodCategoryInput>
  }

  export type FoodCategoryCreateWithoutUserFoodCategoryInput = {
    food: string
  }

  export type FoodCategoryUncheckedCreateWithoutUserFoodCategoryInput = {
    id?: number
    food: string
  }

  export type FoodCategoryCreateOrConnectWithoutUserFoodCategoryInput = {
    where: FoodCategoryWhereUniqueInput
    create: XOR<FoodCategoryCreateWithoutUserFoodCategoryInput, FoodCategoryUncheckedCreateWithoutUserFoodCategoryInput>
  }

  export type UserUpsertWithoutUserFoodCategoryInput = {
    update: XOR<UserUpdateWithoutUserFoodCategoryInput, UserUncheckedUpdateWithoutUserFoodCategoryInput>
    create: XOR<UserCreateWithoutUserFoodCategoryInput, UserUncheckedCreateWithoutUserFoodCategoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFoodCategoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFoodCategoryInput, UserUncheckedUpdateWithoutUserFoodCategoryInput>
  }

  export type UserUpdateWithoutUserFoodCategoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUpdateManyWithoutUserNestedInput
    MissionLog?: MissionLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFoodCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    MissionLog?: MissionLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodCategoryUpsertWithoutUserFoodCategoryInput = {
    update: XOR<FoodCategoryUpdateWithoutUserFoodCategoryInput, FoodCategoryUncheckedUpdateWithoutUserFoodCategoryInput>
    create: XOR<FoodCategoryCreateWithoutUserFoodCategoryInput, FoodCategoryUncheckedCreateWithoutUserFoodCategoryInput>
    where?: FoodCategoryWhereInput
  }

  export type FoodCategoryUpdateToOneWithWhereWithoutUserFoodCategoryInput = {
    where?: FoodCategoryWhereInput
    data: XOR<FoodCategoryUpdateWithoutUserFoodCategoryInput, FoodCategoryUncheckedUpdateWithoutUserFoodCategoryInput>
  }

  export type FoodCategoryUpdateWithoutUserFoodCategoryInput = {
    food?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateWithoutUserFoodCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    food?: StringFieldUpdateOperationsInput | string
  }

  export type UserFoodCategoryCreateWithoutFoodCategoryInput = {
    user: UserCreateNestedOneWithoutUserFoodCategoryInput
  }

  export type UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput = {
    userId: number
  }

  export type UserFoodCategoryCreateOrConnectWithoutFoodCategoryInput = {
    where: UserFoodCategoryWhereUniqueInput
    create: XOR<UserFoodCategoryCreateWithoutFoodCategoryInput, UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput>
  }

  export type UserFoodCategoryCreateManyFoodCategoryInputEnvelope = {
    data: UserFoodCategoryCreateManyFoodCategoryInput | UserFoodCategoryCreateManyFoodCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserFoodCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput = {
    where: UserFoodCategoryWhereUniqueInput
    update: XOR<UserFoodCategoryUpdateWithoutFoodCategoryInput, UserFoodCategoryUncheckedUpdateWithoutFoodCategoryInput>
    create: XOR<UserFoodCategoryCreateWithoutFoodCategoryInput, UserFoodCategoryUncheckedCreateWithoutFoodCategoryInput>
  }

  export type UserFoodCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput = {
    where: UserFoodCategoryWhereUniqueInput
    data: XOR<UserFoodCategoryUpdateWithoutFoodCategoryInput, UserFoodCategoryUncheckedUpdateWithoutFoodCategoryInput>
  }

  export type UserFoodCategoryUpdateManyWithWhereWithoutFoodCategoryInput = {
    where: UserFoodCategoryScalarWhereInput
    data: XOR<UserFoodCategoryUpdateManyMutationInput, UserFoodCategoryUncheckedUpdateManyWithoutFoodCategoryInput>
  }

  export type AreaCreateWithoutShopInput = {
    areaName: string
  }

  export type AreaUncheckedCreateWithoutShopInput = {
    id?: number
    areaName: string
  }

  export type AreaCreateOrConnectWithoutShopInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutShopInput, AreaUncheckedCreateWithoutShopInput>
  }

  export type ShopCategoryCreateWithoutShopInput = {
    category: string
  }

  export type ShopCategoryUncheckedCreateWithoutShopInput = {
    id?: number
    category: string
  }

  export type ShopCategoryCreateOrConnectWithoutShopInput = {
    where: ShopCategoryWhereUniqueInput
    create: XOR<ShopCategoryCreateWithoutShopInput, ShopCategoryUncheckedCreateWithoutShopInput>
  }

  export type ReviewCreateWithoutShopInput = {
    reviewTitle: string
    reviewContent: string
    reviewStars: number
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutShopInput = {
    id?: number
    userId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
  }

  export type ReviewCreateOrConnectWithoutShopInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput>
  }

  export type ReviewCreateManyShopInputEnvelope = {
    data: ReviewCreateManyShopInput | ReviewCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type MissionCreateWithoutShopInput = {
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
    MissionLog?: MissionLogCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutShopInput = {
    id?: number
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
    MissionLog?: MissionLogUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutShopInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput>
  }

  export type MissionCreateManyShopInputEnvelope = {
    data: MissionCreateManyShopInput | MissionCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutShopInput = {
    update: XOR<AreaUpdateWithoutShopInput, AreaUncheckedUpdateWithoutShopInput>
    create: XOR<AreaCreateWithoutShopInput, AreaUncheckedCreateWithoutShopInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutShopInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutShopInput, AreaUncheckedUpdateWithoutShopInput>
  }

  export type AreaUpdateWithoutShopInput = {
    areaName?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    areaName?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCategoryUpsertWithoutShopInput = {
    update: XOR<ShopCategoryUpdateWithoutShopInput, ShopCategoryUncheckedUpdateWithoutShopInput>
    create: XOR<ShopCategoryCreateWithoutShopInput, ShopCategoryUncheckedCreateWithoutShopInput>
    where?: ShopCategoryWhereInput
  }

  export type ShopCategoryUpdateToOneWithWhereWithoutShopInput = {
    where?: ShopCategoryWhereInput
    data: XOR<ShopCategoryUpdateWithoutShopInput, ShopCategoryUncheckedUpdateWithoutShopInput>
  }

  export type ShopCategoryUpdateWithoutShopInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ShopCategoryUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutShopInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutShopInput, ReviewUncheckedUpdateWithoutShopInput>
    create: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutShopInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutShopInput, ReviewUncheckedUpdateWithoutShopInput>
  }

  export type ReviewUpdateManyWithWhereWithoutShopInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutShopInput>
  }

  export type MissionUpsertWithWhereUniqueWithoutShopInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutShopInput, MissionUncheckedUpdateWithoutShopInput>
    create: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutShopInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutShopInput, MissionUncheckedUpdateWithoutShopInput>
  }

  export type MissionUpdateManyWithWhereWithoutShopInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutShopInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: IntFilter<"Mission"> | number
    shopId?: IntFilter<"Mission"> | number
    content?: StringFilter<"Mission"> | string
    point?: IntFilter<"Mission"> | number
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeFilter<"Mission"> | Date | string
  }

  export type ShopCreateWithoutAreaInput = {
    shopName: string
    shopAddress: string
    shopCat: ShopCategoryCreateNestedOneWithoutShopInput
    Review?: ReviewCreateNestedManyWithoutShopInput
    Mission?: MissionCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutAreaInput = {
    id?: number
    shopName: string
    shopAddress: string
    shopCategory: number
    Review?: ReviewUncheckedCreateNestedManyWithoutShopInput
    Mission?: MissionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutAreaInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutAreaInput, ShopUncheckedCreateWithoutAreaInput>
  }

  export type ShopCreateManyAreaInputEnvelope = {
    data: ShopCreateManyAreaInput | ShopCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithWhereUniqueWithoutAreaInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutAreaInput, ShopUncheckedUpdateWithoutAreaInput>
    create: XOR<ShopCreateWithoutAreaInput, ShopUncheckedCreateWithoutAreaInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutAreaInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutAreaInput, ShopUncheckedUpdateWithoutAreaInput>
  }

  export type ShopUpdateManyWithWhereWithoutAreaInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutAreaInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    id?: IntFilter<"Shop"> | number
    shopName?: StringFilter<"Shop"> | string
    shopAddress?: StringFilter<"Shop"> | string
    shopCategory?: IntFilter<"Shop"> | number
    areaId?: IntFilter<"Shop"> | number
  }

  export type ShopCreateWithoutShopCatInput = {
    shopName: string
    shopAddress: string
    area: AreaCreateNestedOneWithoutShopInput
    Review?: ReviewCreateNestedManyWithoutShopInput
    Mission?: MissionCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutShopCatInput = {
    id?: number
    shopName: string
    shopAddress: string
    areaId: number
    Review?: ReviewUncheckedCreateNestedManyWithoutShopInput
    Mission?: MissionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutShopCatInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutShopCatInput, ShopUncheckedCreateWithoutShopCatInput>
  }

  export type ShopCreateManyShopCatInputEnvelope = {
    data: ShopCreateManyShopCatInput | ShopCreateManyShopCatInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithWhereUniqueWithoutShopCatInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutShopCatInput, ShopUncheckedUpdateWithoutShopCatInput>
    create: XOR<ShopCreateWithoutShopCatInput, ShopUncheckedCreateWithoutShopCatInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutShopCatInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutShopCatInput, ShopUncheckedUpdateWithoutShopCatInput>
  }

  export type ShopUpdateManyWithWhereWithoutShopCatInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutShopCatInput>
  }

  export type UserCreateWithoutReviewInput = {
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    UserFoodCategory?: UserFoodCategoryCreateNestedManyWithoutUserInput
    MissionLog?: MissionLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: number
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    UserFoodCategory?: UserFoodCategoryUncheckedCreateNestedManyWithoutUserInput
    MissionLog?: MissionLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type ShopCreateWithoutReviewInput = {
    shopName: string
    shopAddress: string
    area: AreaCreateNestedOneWithoutShopInput
    shopCat: ShopCategoryCreateNestedOneWithoutShopInput
    Mission?: MissionCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutReviewInput = {
    id?: number
    shopName: string
    shopAddress: string
    shopCategory: number
    areaId: number
    Mission?: MissionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutReviewInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutReviewInput, ShopUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFoodCategory?: UserFoodCategoryUpdateManyWithoutUserNestedInput
    MissionLog?: MissionLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFoodCategory?: UserFoodCategoryUncheckedUpdateManyWithoutUserNestedInput
    MissionLog?: MissionLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopUpsertWithoutReviewInput = {
    update: XOR<ShopUpdateWithoutReviewInput, ShopUncheckedUpdateWithoutReviewInput>
    create: XOR<ShopCreateWithoutReviewInput, ShopUncheckedCreateWithoutReviewInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutReviewInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutReviewInput, ShopUncheckedUpdateWithoutReviewInput>
  }

  export type ShopUpdateWithoutReviewInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutShopNestedInput
    shopCat?: ShopCategoryUpdateOneRequiredWithoutShopNestedInput
    Mission?: MissionUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCategory?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    Mission?: MissionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutMissionInput = {
    shopName: string
    shopAddress: string
    area: AreaCreateNestedOneWithoutShopInput
    shopCat: ShopCategoryCreateNestedOneWithoutShopInput
    Review?: ReviewCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutMissionInput = {
    id?: number
    shopName: string
    shopAddress: string
    shopCategory: number
    areaId: number
    Review?: ReviewUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutMissionInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutMissionInput, ShopUncheckedCreateWithoutMissionInput>
  }

  export type MissionLogCreateWithoutMissionInput = {
    user: UserCreateNestedOneWithoutMissionLogInput
  }

  export type MissionLogUncheckedCreateWithoutMissionInput = {
    id?: number
    userId: number
  }

  export type MissionLogCreateOrConnectWithoutMissionInput = {
    where: MissionLogWhereUniqueInput
    create: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput>
  }

  export type MissionLogCreateManyMissionInputEnvelope = {
    data: MissionLogCreateManyMissionInput | MissionLogCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutMissionInput = {
    update: XOR<ShopUpdateWithoutMissionInput, ShopUncheckedUpdateWithoutMissionInput>
    create: XOR<ShopCreateWithoutMissionInput, ShopUncheckedCreateWithoutMissionInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutMissionInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutMissionInput, ShopUncheckedUpdateWithoutMissionInput>
  }

  export type ShopUpdateWithoutMissionInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutShopNestedInput
    shopCat?: ShopCategoryUpdateOneRequiredWithoutShopNestedInput
    Review?: ReviewUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCategory?: IntFieldUpdateOperationsInput | number
    areaId?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutShopNestedInput
  }

  export type MissionLogUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionLogWhereUniqueInput
    update: XOR<MissionLogUpdateWithoutMissionInput, MissionLogUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput>
  }

  export type MissionLogUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionLogWhereUniqueInput
    data: XOR<MissionLogUpdateWithoutMissionInput, MissionLogUncheckedUpdateWithoutMissionInput>
  }

  export type MissionLogUpdateManyWithWhereWithoutMissionInput = {
    where: MissionLogScalarWhereInput
    data: XOR<MissionLogUpdateManyMutationInput, MissionLogUncheckedUpdateManyWithoutMissionInput>
  }

  export type UserCreateWithoutMissionLogInput = {
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    UserFoodCategory?: UserFoodCategoryCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMissionLogInput = {
    id?: number
    email: string
    username: string
    gender: number
    phoneNumber: string
    point: number
    birth: Date | string
    UserFoodCategory?: UserFoodCategoryUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMissionLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMissionLogInput, UserUncheckedCreateWithoutMissionLogInput>
  }

  export type MissionCreateWithoutMissionLogInput = {
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
    shop: ShopCreateNestedOneWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutMissionLogInput = {
    id?: number
    shopId: number
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MissionCreateOrConnectWithoutMissionLogInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutMissionLogInput, MissionUncheckedCreateWithoutMissionLogInput>
  }

  export type UserUpsertWithoutMissionLogInput = {
    update: XOR<UserUpdateWithoutMissionLogInput, UserUncheckedUpdateWithoutMissionLogInput>
    create: XOR<UserCreateWithoutMissionLogInput, UserUncheckedCreateWithoutMissionLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMissionLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMissionLogInput, UserUncheckedUpdateWithoutMissionLogInput>
  }

  export type UserUpdateWithoutMissionLogInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFoodCategory?: UserFoodCategoryUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMissionLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFoodCategory?: UserFoodCategoryUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MissionUpsertWithoutMissionLogInput = {
    update: XOR<MissionUpdateWithoutMissionLogInput, MissionUncheckedUpdateWithoutMissionLogInput>
    create: XOR<MissionCreateWithoutMissionLogInput, MissionUncheckedCreateWithoutMissionLogInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutMissionLogInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutMissionLogInput, MissionUncheckedUpdateWithoutMissionLogInput>
  }

  export type MissionUpdateWithoutMissionLogInput = {
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutMissionLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFoodCategoryCreateManyUserInput = {
    foodCategoryId: number
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    shopId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
  }

  export type MissionLogCreateManyUserInput = {
    id?: number
    missionId: number
  }

  export type UserFoodCategoryUpdateWithoutUserInput = {
    foodCategory?: FoodCategoryUpdateOneRequiredWithoutUserFoodCategoryNestedInput
  }

  export type UserFoodCategoryUncheckedUpdateWithoutUserInput = {
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodCategoryUncheckedUpdateManyWithoutUserInput = {
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutUserInput = {
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
    shop?: ShopUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogUpdateWithoutUserInput = {
    mission?: MissionUpdateOneRequiredWithoutMissionLogNestedInput
  }

  export type MissionLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodCategoryCreateManyFoodCategoryInput = {
    userId: number
  }

  export type UserFoodCategoryUpdateWithoutFoodCategoryInput = {
    user?: UserUpdateOneRequiredWithoutUserFoodCategoryNestedInput
  }

  export type UserFoodCategoryUncheckedUpdateWithoutFoodCategoryInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodCategoryUncheckedUpdateManyWithoutFoodCategoryInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyShopInput = {
    id?: number
    userId: number
    reviewTitle: string
    reviewContent: string
    reviewStars: number
  }

  export type MissionCreateManyShopInput = {
    id?: number
    content: string
    point: number
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ReviewUpdateWithoutShopInput = {
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reviewTitle?: StringFieldUpdateOperationsInput | string
    reviewContent?: StringFieldUpdateOperationsInput | string
    reviewStars?: IntFieldUpdateOperationsInput | number
  }

  export type MissionUpdateWithoutShopInput = {
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MissionLog?: MissionLogUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MissionLog?: MissionLogUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateManyAreaInput = {
    id?: number
    shopName: string
    shopAddress: string
    shopCategory: number
  }

  export type ShopUpdateWithoutAreaInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCat?: ShopCategoryUpdateOneRequiredWithoutShopNestedInput
    Review?: ReviewUpdateManyWithoutShopNestedInput
    Mission?: MissionUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCategory?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutShopNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    shopCategory?: IntFieldUpdateOperationsInput | number
  }

  export type ShopCreateManyShopCatInput = {
    id?: number
    shopName: string
    shopAddress: string
    areaId: number
  }

  export type ShopUpdateWithoutShopCatInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutShopNestedInput
    Review?: ReviewUpdateManyWithoutShopNestedInput
    Mission?: MissionUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutShopCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutShopNestedInput
    Mission?: MissionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutShopCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shopAddress?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogCreateManyMissionInput = {
    id?: number
    userId: number
  }

  export type MissionLogUpdateWithoutMissionInput = {
    user?: UserUpdateOneRequiredWithoutMissionLogNestedInput
  }

  export type MissionLogUncheckedUpdateWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogUncheckedUpdateManyWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}