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
  /** アイテム数 */
  itemCount?: Maybe<Scalars['Int']['output']>;
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
  createUser: User;
  deleteCategory: Category;
  deleteItem: Item;
  updateCategory: Category;
  updateItem: Item;
};


export type MutationCreateCategoryArgs = {
  input: NewCategory;
};


export type MutationCreateItemArgs = {
  input: NewItem;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategory;
};


export type MutationUpdateItemArgs = {
  input: UpdateItem;
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

export type NewUser = {
  /** UID */
  uid: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  hello?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  me?: Maybe<User>;
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

export type UpdateCategory = {
  /** アイテムID */
  id: Scalars['Int']['input'];
  /** カテゴリー名 */
  name: Scalars['String']['input'];
  /** 順番 */
  order: Scalars['Int']['input'];
};

export type UpdateItem = {
  /** カテゴリーID */
  categoryId: Scalars['Int']['input'];
  /** 消費期限 */
  expirationDate?: InputMaybe<Scalars['Time']['input']>;
  /** アイテムID */
  id: Scalars['Int']['input'];
  /** アイテム名 */
  name: Scalars['String']['input'];
  /** 順番 */
  order: Scalars['Int']['input'];
  /** 在庫数 */
  stock: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  /** ユーザーID */
  id: Scalars['ID']['output'];
  /** UID */
  uid: Scalars['String']['output'];
};
