export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  /** カテゴリーID */
  id: Scalars['ID']['output'];
  /** カテゴリー名 */
  name: Scalars['String']['output'];
  /** 順番 */
  order: Scalars['Int']['output'];
};

export type Item = {
  __typename?: 'Item';
  /** カテゴリーID */
  categoryId: Scalars['ID']['output'];
  /** 消費期限 */
  expirationDate?: Maybe<Scalars['Time']['output']>;
  /** アイテムID */
  id: Scalars['ID']['output'];
  /** アイテム名 */
  name: Scalars['String']['output'];
  /** 順番 */
  order: Scalars['Int']['output'];
  /** 在庫数 */
  stock: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createItem: Item;
};


export type MutationCreateCategoryArgs = {
  input: NewCategory;
};


export type MutationCreateItemArgs = {
  input: NewItem;
};

export type NewCategory = {
  /** カテゴリー名 */
  name: Scalars['String']['input'];
  /** 順番 */
  order: Scalars['Int']['input'];
};

export type NewItem = {
  /** カテゴリーID */
  categoryId: Scalars['Int']['input'];
  /** 消費期限 */
  expirationDate?: InputMaybe<Scalars['Time']['input']>;
  /** アイテム名 */
  name: Scalars['String']['input'];
  /** 順番 */
  order: Scalars['Int']['input'];
  /** 在庫数 */
  stock: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  hello?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemsArgs = {
  categoryId: Scalars['Int']['input'];
};
