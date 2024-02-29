import type {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import type { PriceMapper } from "./base/schema.mappers";
import type { ProductMapper } from "./product/schema.mappers";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	HashID: { input: any; output: any };
};

export type PageInfo = {
	__typename?: "PageInfo";
	hasNextPage: Scalars["Boolean"]["output"];
	nextCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Price = {
	__typename?: "Price";
	cents: Scalars["Float"]["output"];
	currency: Scalars["String"]["output"];
};

export type Product = {
	__typename?: "Product";
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["HashID"]["output"];
	name: Scalars["String"]["output"];
	price: Price;
	slug: Scalars["String"]["output"];
};

export type ProductPage = {
	__typename?: "ProductPage";
	nodes: Array<Product>;
	pageInfo: PageInfo;
};

export type Query = {
	__typename?: "Query";
	productBySlug: Product;
	products: ProductPage;
};

export type QueryproductBySlugArgs = {
	slug: Scalars["String"]["input"];
};

export type QueryproductsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	pageSize?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	HashID: ResolverTypeWrapper<Scalars["HashID"]["output"]>;
	PageInfo: ResolverTypeWrapper<PageInfo>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	Price: ResolverTypeWrapper<PriceMapper>;
	Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
	Product: ResolverTypeWrapper<ProductMapper>;
	ProductPage: ResolverTypeWrapper<
		Omit<ProductPage, "nodes"> & { nodes: Array<ResolversTypes["Product"]> }
	>;
	Query: ResolverTypeWrapper<{}>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	HashID: Scalars["HashID"]["output"];
	PageInfo: PageInfo;
	Boolean: Scalars["Boolean"]["output"];
	String: Scalars["String"]["output"];
	Price: PriceMapper;
	Float: Scalars["Float"]["output"];
	Product: ProductMapper;
	ProductPage: Omit<ProductPage, "nodes"> & {
		nodes: Array<ResolversParentTypes["Product"]>;
	};
	Query: {};
	Int: Scalars["Int"]["output"];
};

export interface HashIDScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["HashID"], any> {
	name: "HashID";
}

export type PageInfoResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"],
> = {
	hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
	nextCursor?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Price"] = ResolversParentTypes["Price"],
> = {
	cents?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	currency?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	description?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	id?: Resolver<ResolversTypes["HashID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Price"], ParentType, ContextType>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["ProductPage"] = ResolversParentTypes["ProductPage"],
> = {
	nodes?: Resolver<Array<ResolversTypes["Product"]>, ParentType, ContextType>;
	pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	productBySlug?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType,
		RequireFields<QueryproductBySlugArgs, "slug">
	>;
	products?: Resolver<
		ResolversTypes["ProductPage"],
		ParentType,
		ContextType,
		Partial<QueryproductsArgs>
	>;
};

export type Resolvers<ContextType = any> = {
	HashID?: GraphQLScalarType;
	PageInfo?: PageInfoResolvers<ContextType>;
	Price?: PriceResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	ProductPage?: ProductPageResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
};
