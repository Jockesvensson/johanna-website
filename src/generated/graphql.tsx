import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlock = Entry & {
  __typename?: 'ActorBlock';
  aboutMeList?: Maybe<Array<Maybe<Scalars['String']>>>;
  aboutMeTitle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  educationList?: Maybe<Array<Maybe<Scalars['String']>>>;
  educationTitle?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  languageList?: Maybe<Array<Maybe<Scalars['String']>>>;
  languageTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ActorBlockLinkingCollections>;
  moviesList?: Maybe<Array<Maybe<Scalars['String']>>>;
  moviesTitle?: Maybe<Scalars['String']>;
  otherList?: Maybe<Array<Maybe<Scalars['String']>>>;
  otherTitle?: Maybe<Scalars['String']>;
  sys: Sys;
  theaterMusicalList?: Maybe<Array<Maybe<Scalars['String']>>>;
  theaterMusicalTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockAboutMeListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockAboutMeTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockEducationListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockEducationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockLanguageListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockLanguageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockMoviesListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockMoviesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockOtherListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockOtherTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockTheaterMusicalListArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockTheaterMusicalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/actorBlock) */
export type ActorBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ActorBlockCollection = {
  __typename?: 'ActorBlockCollection';
  items: Array<Maybe<ActorBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ActorBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActorBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActorBlockFilter>>>;
  aboutMeList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutMeList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutMeList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutMeList_exists?: InputMaybe<Scalars['Boolean']>;
  aboutMeTitle?: InputMaybe<Scalars['String']>;
  aboutMeTitle_contains?: InputMaybe<Scalars['String']>;
  aboutMeTitle_exists?: InputMaybe<Scalars['Boolean']>;
  aboutMeTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  aboutMeTitle_not?: InputMaybe<Scalars['String']>;
  aboutMeTitle_not_contains?: InputMaybe<Scalars['String']>;
  aboutMeTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  educationList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  educationList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  educationList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  educationList_exists?: InputMaybe<Scalars['Boolean']>;
  educationTitle?: InputMaybe<Scalars['String']>;
  educationTitle_contains?: InputMaybe<Scalars['String']>;
  educationTitle_exists?: InputMaybe<Scalars['Boolean']>;
  educationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  educationTitle_not?: InputMaybe<Scalars['String']>;
  educationTitle_not_contains?: InputMaybe<Scalars['String']>;
  educationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  languageList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageList_exists?: InputMaybe<Scalars['Boolean']>;
  languageTitle?: InputMaybe<Scalars['String']>;
  languageTitle_contains?: InputMaybe<Scalars['String']>;
  languageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  languageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languageTitle_not?: InputMaybe<Scalars['String']>;
  languageTitle_not_contains?: InputMaybe<Scalars['String']>;
  languageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  moviesList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  moviesList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  moviesList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  moviesList_exists?: InputMaybe<Scalars['Boolean']>;
  moviesTitle?: InputMaybe<Scalars['String']>;
  moviesTitle_contains?: InputMaybe<Scalars['String']>;
  moviesTitle_exists?: InputMaybe<Scalars['Boolean']>;
  moviesTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  moviesTitle_not?: InputMaybe<Scalars['String']>;
  moviesTitle_not_contains?: InputMaybe<Scalars['String']>;
  moviesTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherList_exists?: InputMaybe<Scalars['Boolean']>;
  otherTitle?: InputMaybe<Scalars['String']>;
  otherTitle_contains?: InputMaybe<Scalars['String']>;
  otherTitle_exists?: InputMaybe<Scalars['Boolean']>;
  otherTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherTitle_not?: InputMaybe<Scalars['String']>;
  otherTitle_not_contains?: InputMaybe<Scalars['String']>;
  otherTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  theaterMusicalList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  theaterMusicalList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  theaterMusicalList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  theaterMusicalList_exists?: InputMaybe<Scalars['Boolean']>;
  theaterMusicalTitle?: InputMaybe<Scalars['String']>;
  theaterMusicalTitle_contains?: InputMaybe<Scalars['String']>;
  theaterMusicalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  theaterMusicalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  theaterMusicalTitle_not?: InputMaybe<Scalars['String']>;
  theaterMusicalTitle_not_contains?: InputMaybe<Scalars['String']>;
  theaterMusicalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ActorBlockLinkingCollections = {
  __typename?: 'ActorBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ActorBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ActorBlockOrder {
  AboutMeTitleAsc = 'aboutMeTitle_ASC',
  AboutMeTitleDesc = 'aboutMeTitle_DESC',
  EducationTitleAsc = 'educationTitle_ASC',
  EducationTitleDesc = 'educationTitle_DESC',
  LanguageTitleAsc = 'languageTitle_ASC',
  LanguageTitleDesc = 'languageTitle_DESC',
  MoviesTitleAsc = 'moviesTitle_ASC',
  MoviesTitleDesc = 'moviesTitle_DESC',
  OtherTitleAsc = 'otherTitle_ASC',
  OtherTitleDesc = 'otherTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TheaterMusicalTitleAsc = 'theaterMusicalTitle_ASC',
  TheaterMusicalTitleDesc = 'theaterMusicalTitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  actorBlockCollection?: Maybe<ActorBlockCollection>;
  biographyBlockCollection?: Maybe<BiographyBlockCollection>;
  contactBlockCollection?: Maybe<ContactBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  galleryBlockCollection?: Maybe<GalleryBlockCollection>;
  riderBlockCollection?: Maybe<RiderBlockCollection>;
  standardPageCollection?: Maybe<StandardPageCollection>;
  testCollection?: Maybe<TestCollection>;
};


export type AssetLinkingCollectionsActorBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBiographyBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsContactBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsGalleryBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsRiderBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsStandardPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/biographyBlock) */
export type BiographyBlock = Entry & {
  __typename?: 'BiographyBlock';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<BiographyBlockLinkingCollections>;
  sys: Sys;
  text?: Maybe<BiographyBlockText>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/biographyBlock) */
export type BiographyBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/biographyBlock) */
export type BiographyBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/biographyBlock) */
export type BiographyBlockTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/biographyBlock) */
export type BiographyBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BiographyBlockCollection = {
  __typename?: 'BiographyBlockCollection';
  items: Array<Maybe<BiographyBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BiographyBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<BiographyBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BiographyBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BiographyBlockLinkingCollections = {
  __typename?: 'BiographyBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BiographyBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BiographyBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BiographyBlockText = {
  __typename?: 'BiographyBlockText';
  json: Scalars['JSON'];
  links: BiographyBlockTextLinks;
};

export type BiographyBlockTextAssets = {
  __typename?: 'BiographyBlockTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BiographyBlockTextEntries = {
  __typename?: 'BiographyBlockTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BiographyBlockTextLinks = {
  __typename?: 'BiographyBlockTextLinks';
  assets: BiographyBlockTextAssets;
  entries: BiographyBlockTextEntries;
};

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlock = Entry & {
  __typename?: 'ContactBlock';
  contactTitle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ContactBlockLinkingCollections>;
  phoneNumber?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlockContactTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlockEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlockPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/contactBlock) */
export type ContactBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContactBlockCollection = {
  __typename?: 'ContactBlockCollection';
  items: Array<Maybe<ContactBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContactBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactBlockFilter>>>;
  contactTitle?: InputMaybe<Scalars['String']>;
  contactTitle_contains?: InputMaybe<Scalars['String']>;
  contactTitle_exists?: InputMaybe<Scalars['Boolean']>;
  contactTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactTitle_not?: InputMaybe<Scalars['String']>;
  contactTitle_not_contains?: InputMaybe<Scalars['String']>;
  contactTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactBlockLinkingCollections = {
  __typename?: 'ContactBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContactBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContactBlockOrder {
  ContactTitleAsc = 'contactTitle_ASC',
  ContactTitleDesc = 'contactTitle_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type Footer = Entry & {
  __typename?: 'Footer';
  contentfulMetadata: ContentfulMetadata;
  copyright?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterFacebookArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterInstagramArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterTwitterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/footer) */
export type FooterYoutubeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_contains?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_not?: InputMaybe<Scalars['String']>;
  copyright_not_contains?: InputMaybe<Scalars['String']>;
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_contains?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_not?: InputMaybe<Scalars['String']>;
  facebook_not_contains?: InputMaybe<Scalars['String']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram?: InputMaybe<Scalars['String']>;
  instagram_contains?: InputMaybe<Scalars['String']>;
  instagram_exists?: InputMaybe<Scalars['Boolean']>;
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram_not?: InputMaybe<Scalars['String']>;
  instagram_not_contains?: InputMaybe<Scalars['String']>;
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_contains?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_not?: InputMaybe<Scalars['String']>;
  youtube_not_contains?: InputMaybe<Scalars['String']>;
  youtube_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/galleryBlock) */
export type GalleryBlock = Entry & {
  __typename?: 'GalleryBlock';
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<GalleryBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/galleryBlock) */
export type GalleryBlockImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/galleryBlock) */
export type GalleryBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/galleryBlock) */
export type GalleryBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type GalleryBlockCollection = {
  __typename?: 'GalleryBlockCollection';
  items: Array<Maybe<GalleryBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GalleryBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<GalleryBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GalleryBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GalleryBlockLinkingCollections = {
  __typename?: 'GalleryBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GalleryBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GalleryBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: 'Navigation';
  contentfulMetadata: ContentfulMetadata;
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  navigationItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationFacebookArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationInstagramArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationNavigationItemsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationTwitterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/navigation) */
export type NavigationYoutubeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationCollection = {
  __typename?: 'NavigationCollection';
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_contains?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_not?: InputMaybe<Scalars['String']>;
  facebook_not_contains?: InputMaybe<Scalars['String']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram?: InputMaybe<Scalars['String']>;
  instagram_contains?: InputMaybe<Scalars['String']>;
  instagram_exists?: InputMaybe<Scalars['Boolean']>;
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagram_not?: InputMaybe<Scalars['String']>;
  instagram_not_contains?: InputMaybe<Scalars['String']>;
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationItems_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationItems_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationItems_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationItems_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_contains?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_not?: InputMaybe<Scalars['String']>;
  youtube_not_contains?: InputMaybe<Scalars['String']>;
  youtube_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationOrder {
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
}

export type Query = {
  __typename?: 'Query';
  actorBlock?: Maybe<ActorBlock>;
  actorBlockCollection?: Maybe<ActorBlockCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  biographyBlock?: Maybe<BiographyBlock>;
  biographyBlockCollection?: Maybe<BiographyBlockCollection>;
  contactBlock?: Maybe<ContactBlock>;
  contactBlockCollection?: Maybe<ContactBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  galleryBlock?: Maybe<GalleryBlock>;
  galleryBlockCollection?: Maybe<GalleryBlockCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  riderBlock?: Maybe<RiderBlock>;
  riderBlockCollection?: Maybe<RiderBlockCollection>;
  standardPage?: Maybe<StandardPage>;
  standardPageCollection?: Maybe<StandardPageCollection>;
  test?: Maybe<Test>;
  testCollection?: Maybe<TestCollection>;
  videoBlock?: Maybe<VideoBlock>;
  videoBlockCollection?: Maybe<VideoBlockCollection>;
};


export type QueryActorBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryActorBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ActorBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorBlockFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBiographyBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBiographyBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BiographyBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BiographyBlockFilter>;
};


export type QueryContactBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContactBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContactBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactBlockFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryGalleryBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGalleryBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GalleryBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GalleryBlockFilter>;
};


export type QueryNavigationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationFilter>;
};


export type QueryRiderBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRiderBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<RiderBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RiderBlockFilter>;
};


export type QueryStandardPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStandardPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StandardPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StandardPageFilter>;
};


export type QueryTestArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestFilter>;
};


export type QueryVideoBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVideoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoBlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/riderBlock) */
export type RiderBlock = Entry & {
  __typename?: 'RiderBlock';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<RiderBlockLinkingCollections>;
  sys: Sys;
  text?: Maybe<RiderBlockText>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/riderBlock) */
export type RiderBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/riderBlock) */
export type RiderBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/riderBlock) */
export type RiderBlockTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/riderBlock) */
export type RiderBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type RiderBlockCollection = {
  __typename?: 'RiderBlockCollection';
  items: Array<Maybe<RiderBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type RiderBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<RiderBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RiderBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RiderBlockLinkingCollections = {
  __typename?: 'RiderBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RiderBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum RiderBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type RiderBlockText = {
  __typename?: 'RiderBlockText';
  json: Scalars['JSON'];
  links: RiderBlockTextLinks;
};

export type RiderBlockTextAssets = {
  __typename?: 'RiderBlockTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type RiderBlockTextEntries = {
  __typename?: 'RiderBlockTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type RiderBlockTextLinks = {
  __typename?: 'RiderBlockTextLinks';
  assets: RiderBlockTextAssets;
  entries: RiderBlockTextEntries;
};

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/standardPage) */
export type StandardPage = Entry & {
  __typename?: 'StandardPage';
  contentAreaCollection?: Maybe<StandardPageContentAreaCollection>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<StandardPageLinkingCollections>;
  occupation?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/standardPage) */
export type StandardPageContentAreaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/standardPage) */
export type StandardPageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/standardPage) */
export type StandardPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/standardPage) */
export type StandardPageOccupationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/standardPage) */
export type StandardPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StandardPageCollection = {
  __typename?: 'StandardPageCollection';
  items: Array<Maybe<StandardPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StandardPageContentAreaCollection = {
  __typename?: 'StandardPageContentAreaCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StandardPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<StandardPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StandardPageFilter>>>;
  contentAreaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  occupation_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  occupation_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  occupation_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  occupation_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StandardPageLinkingCollections = {
  __typename?: 'StandardPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StandardPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StandardPageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/test) */
export type Test = Entry & {
  __typename?: 'Test';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<TestLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/test) */
export type TestImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/test) */
export type TestLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/test) */
export type TestNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestCollection = {
  __typename?: 'TestCollection';
  items: Array<Maybe<Test>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TestLinkingCollections = {
  __typename?: 'TestLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/videoBlock) */
export type VideoBlock = Entry & {
  __typename?: 'VideoBlock';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VideoBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  videoLinks?: Maybe<VideoBlockVideoLinks>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/videoBlock) */
export type VideoBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/videoBlock) */
export type VideoBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/8adxcrav6a1x/content_types/videoBlock) */
export type VideoBlockVideoLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type VideoBlockCollection = {
  __typename?: 'VideoBlockCollection';
  items: Array<Maybe<VideoBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VideoBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoLinks_contains?: InputMaybe<Scalars['String']>;
  videoLinks_exists?: InputMaybe<Scalars['Boolean']>;
  videoLinks_not_contains?: InputMaybe<Scalars['String']>;
};

export type VideoBlockLinkingCollections = {
  __typename?: 'VideoBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VideoBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum VideoBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type VideoBlockVideoLinks = {
  __typename?: 'VideoBlockVideoLinks';
  json: Scalars['JSON'];
  links: VideoBlockVideoLinksLinks;
};

export type VideoBlockVideoLinksAssets = {
  __typename?: 'VideoBlockVideoLinksAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type VideoBlockVideoLinksEntries = {
  __typename?: 'VideoBlockVideoLinksEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type VideoBlockVideoLinksLinks = {
  __typename?: 'VideoBlockVideoLinksLinks';
  assets: VideoBlockVideoLinksAssets;
  entries: VideoBlockVideoLinksEntries;
};

export type StandardPageQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type StandardPageQuery = { __typename?: 'Query', standardPageCollection?: { __typename?: 'StandardPageCollection', items: Array<{ __typename?: 'StandardPage', title?: string | null, occupation?: Array<string | null> | null, image?: { __typename?: 'Asset', url?: string | null, description?: string | null } | null } | null> } | null };

export type NavigationQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type NavigationQuery = { __typename?: 'Query', navigationCollection?: { __typename?: 'NavigationCollection', items: Array<{ __typename?: 'Navigation', navigationItems?: Array<string | null> | null, facebook?: string | null, instagram?: string | null, youtube?: string | null } | null> } | null };

export type BiographyBlockQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type BiographyBlockQuery = { __typename?: 'Query', biographyBlockCollection?: { __typename?: 'BiographyBlockCollection', items: Array<{ __typename?: 'BiographyBlock', title?: string | null, text?: { __typename?: 'BiographyBlockText', json: any } | null, image?: { __typename?: 'Asset', url?: string | null, description?: string | null } | null } | null> } | null };

export type ActorBlockQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ActorBlockQuery = { __typename?: 'Query', actorBlockCollection?: { __typename?: 'ActorBlockCollection', items: Array<{ __typename?: 'ActorBlock', title?: string | null, aboutMeTitle?: string | null, aboutMeList?: Array<string | null> | null, languageTitle?: string | null, languageList?: Array<string | null> | null, moviesTitle?: string | null, moviesList?: Array<string | null> | null, theaterMusicalTitle?: string | null, theaterMusicalList?: Array<string | null> | null, educationTitle?: string | null, educationList?: Array<string | null> | null, otherTitle?: string | null, otherList?: Array<string | null> | null, image?: { __typename?: 'Asset', url?: string | null, description?: string | null } | null } | null> } | null };

export type RiderBlockQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type RiderBlockQuery = { __typename?: 'Query', riderBlockCollection?: { __typename?: 'RiderBlockCollection', items: Array<{ __typename?: 'RiderBlock', title?: string | null, text?: { __typename?: 'RiderBlockText', json: any } | null, image?: { __typename?: 'Asset', url?: string | null, description?: string | null } | null } | null> } | null };

export type FooterQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type FooterQuery = { __typename?: 'Query', footerCollection?: { __typename?: 'FooterCollection', items: Array<{ __typename?: 'Footer', title?: string | null, copyright?: string | null, facebook?: string | null, instagram?: string | null, youtube?: string | null } | null> } | null };

export type VideoBlockQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type VideoBlockQuery = { __typename?: 'Query', videoBlockCollection?: { __typename?: 'VideoBlockCollection', items: Array<{ __typename?: 'VideoBlock', title?: string | null, videoLinks?: { __typename?: 'VideoBlockVideoLinks', json: any } | null } | null> } | null };

export type GalleryBlockQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type GalleryBlockQuery = { __typename?: 'Query', galleryBlockCollection?: { __typename?: 'GalleryBlockCollection', items: Array<{ __typename?: 'GalleryBlock', title?: string | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null } | null> } | null } | null> } | null };

export type ContactBlockQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type ContactBlockQuery = { __typename?: 'Query', contactBlockCollection?: { __typename?: 'ContactBlockCollection', items: Array<{ __typename?: 'ContactBlock', title?: string | null, contactTitle?: string | null, phoneNumber?: string | null, email?: string | null, image?: { __typename?: 'Asset', url?: string | null, description?: string | null } | null } | null> } | null };


export const StandardPageDocument = gql`
    query StandardPage($locale: String!) {
  standardPageCollection(locale: $locale) {
    items {
      title
      occupation
      image {
        url
        description
      }
    }
  }
}
    `;

/**
 * __useStandardPageQuery__
 *
 * To run a query within a React component, call `useStandardPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useStandardPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStandardPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useStandardPageQuery(baseOptions: Apollo.QueryHookOptions<StandardPageQuery, StandardPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StandardPageQuery, StandardPageQueryVariables>(StandardPageDocument, options);
      }
export function useStandardPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StandardPageQuery, StandardPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StandardPageQuery, StandardPageQueryVariables>(StandardPageDocument, options);
        }
export type StandardPageQueryHookResult = ReturnType<typeof useStandardPageQuery>;
export type StandardPageLazyQueryHookResult = ReturnType<typeof useStandardPageLazyQuery>;
export type StandardPageQueryResult = Apollo.QueryResult<StandardPageQuery, StandardPageQueryVariables>;
export const NavigationDocument = gql`
    query Navigation($locale: String!) {
  navigationCollection(locale: $locale) {
    items {
      navigationItems
      facebook
      instagram
      youtube
    }
  }
}
    `;

/**
 * __useNavigationQuery__
 *
 * To run a query within a React component, call `useNavigationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavigationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavigationQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useNavigationQuery(baseOptions: Apollo.QueryHookOptions<NavigationQuery, NavigationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavigationQuery, NavigationQueryVariables>(NavigationDocument, options);
      }
export function useNavigationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavigationQuery, NavigationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavigationQuery, NavigationQueryVariables>(NavigationDocument, options);
        }
export type NavigationQueryHookResult = ReturnType<typeof useNavigationQuery>;
export type NavigationLazyQueryHookResult = ReturnType<typeof useNavigationLazyQuery>;
export type NavigationQueryResult = Apollo.QueryResult<NavigationQuery, NavigationQueryVariables>;
export const BiographyBlockDocument = gql`
    query BiographyBlock($locale: String!) {
  biographyBlockCollection(locale: $locale) {
    items {
      title
      text {
        json
      }
      image {
        url
        description
      }
    }
  }
}
    `;

/**
 * __useBiographyBlockQuery__
 *
 * To run a query within a React component, call `useBiographyBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useBiographyBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBiographyBlockQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useBiographyBlockQuery(baseOptions: Apollo.QueryHookOptions<BiographyBlockQuery, BiographyBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BiographyBlockQuery, BiographyBlockQueryVariables>(BiographyBlockDocument, options);
      }
export function useBiographyBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BiographyBlockQuery, BiographyBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BiographyBlockQuery, BiographyBlockQueryVariables>(BiographyBlockDocument, options);
        }
export type BiographyBlockQueryHookResult = ReturnType<typeof useBiographyBlockQuery>;
export type BiographyBlockLazyQueryHookResult = ReturnType<typeof useBiographyBlockLazyQuery>;
export type BiographyBlockQueryResult = Apollo.QueryResult<BiographyBlockQuery, BiographyBlockQueryVariables>;
export const ActorBlockDocument = gql`
    query ActorBlock($locale: String!) {
  actorBlockCollection(locale: $locale) {
    items {
      title
      aboutMeTitle
      aboutMeList
      languageTitle
      languageList
      moviesTitle
      moviesList
      theaterMusicalTitle
      theaterMusicalList
      educationTitle
      educationList
      otherTitle
      otherList
      image {
        url
        description
      }
    }
  }
}
    `;

/**
 * __useActorBlockQuery__
 *
 * To run a query within a React component, call `useActorBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorBlockQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useActorBlockQuery(baseOptions: Apollo.QueryHookOptions<ActorBlockQuery, ActorBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActorBlockQuery, ActorBlockQueryVariables>(ActorBlockDocument, options);
      }
export function useActorBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActorBlockQuery, ActorBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActorBlockQuery, ActorBlockQueryVariables>(ActorBlockDocument, options);
        }
export type ActorBlockQueryHookResult = ReturnType<typeof useActorBlockQuery>;
export type ActorBlockLazyQueryHookResult = ReturnType<typeof useActorBlockLazyQuery>;
export type ActorBlockQueryResult = Apollo.QueryResult<ActorBlockQuery, ActorBlockQueryVariables>;
export const RiderBlockDocument = gql`
    query RiderBlock($locale: String!) {
  riderBlockCollection(locale: $locale) {
    items {
      title
      text {
        json
      }
      image {
        url
        description
      }
    }
  }
}
    `;

/**
 * __useRiderBlockQuery__
 *
 * To run a query within a React component, call `useRiderBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useRiderBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRiderBlockQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useRiderBlockQuery(baseOptions: Apollo.QueryHookOptions<RiderBlockQuery, RiderBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RiderBlockQuery, RiderBlockQueryVariables>(RiderBlockDocument, options);
      }
export function useRiderBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RiderBlockQuery, RiderBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RiderBlockQuery, RiderBlockQueryVariables>(RiderBlockDocument, options);
        }
export type RiderBlockQueryHookResult = ReturnType<typeof useRiderBlockQuery>;
export type RiderBlockLazyQueryHookResult = ReturnType<typeof useRiderBlockLazyQuery>;
export type RiderBlockQueryResult = Apollo.QueryResult<RiderBlockQuery, RiderBlockQueryVariables>;
export const FooterDocument = gql`
    query Footer($locale: String!) {
  footerCollection(locale: $locale) {
    items {
      title
      copyright
      facebook
      instagram
      youtube
    }
  }
}
    `;

/**
 * __useFooterQuery__
 *
 * To run a query within a React component, call `useFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useFooterQuery(baseOptions: Apollo.QueryHookOptions<FooterQuery, FooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options);
      }
export function useFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterQuery, FooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooterQuery, FooterQueryVariables>(FooterDocument, options);
        }
export type FooterQueryHookResult = ReturnType<typeof useFooterQuery>;
export type FooterLazyQueryHookResult = ReturnType<typeof useFooterLazyQuery>;
export type FooterQueryResult = Apollo.QueryResult<FooterQuery, FooterQueryVariables>;
export const VideoBlockDocument = gql`
    query VideoBlock($locale: String!) {
  videoBlockCollection(locale: $locale) {
    items {
      title
      videoLinks {
        json
      }
    }
  }
}
    `;

/**
 * __useVideoBlockQuery__
 *
 * To run a query within a React component, call `useVideoBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoBlockQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useVideoBlockQuery(baseOptions: Apollo.QueryHookOptions<VideoBlockQuery, VideoBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoBlockQuery, VideoBlockQueryVariables>(VideoBlockDocument, options);
      }
export function useVideoBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoBlockQuery, VideoBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoBlockQuery, VideoBlockQueryVariables>(VideoBlockDocument, options);
        }
export type VideoBlockQueryHookResult = ReturnType<typeof useVideoBlockQuery>;
export type VideoBlockLazyQueryHookResult = ReturnType<typeof useVideoBlockLazyQuery>;
export type VideoBlockQueryResult = Apollo.QueryResult<VideoBlockQuery, VideoBlockQueryVariables>;
export const GalleryBlockDocument = gql`
    query GalleryBlock($locale: String!) {
  galleryBlockCollection(locale: $locale) {
    items {
      title
      imagesCollection {
        items {
          url
          description
        }
      }
    }
  }
}
    `;

/**
 * __useGalleryBlockQuery__
 *
 * To run a query within a React component, call `useGalleryBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGalleryBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGalleryBlockQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGalleryBlockQuery(baseOptions: Apollo.QueryHookOptions<GalleryBlockQuery, GalleryBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GalleryBlockQuery, GalleryBlockQueryVariables>(GalleryBlockDocument, options);
      }
export function useGalleryBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GalleryBlockQuery, GalleryBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GalleryBlockQuery, GalleryBlockQueryVariables>(GalleryBlockDocument, options);
        }
export type GalleryBlockQueryHookResult = ReturnType<typeof useGalleryBlockQuery>;
export type GalleryBlockLazyQueryHookResult = ReturnType<typeof useGalleryBlockLazyQuery>;
export type GalleryBlockQueryResult = Apollo.QueryResult<GalleryBlockQuery, GalleryBlockQueryVariables>;
export const ContactBlockDocument = gql`
    query ContactBlock($locale: String!) {
  contactBlockCollection(locale: $locale) {
    items {
      title
      contactTitle
      phoneNumber
      email
      image {
        url
        description
      }
    }
  }
}
    `;

/**
 * __useContactBlockQuery__
 *
 * To run a query within a React component, call `useContactBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactBlockQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useContactBlockQuery(baseOptions: Apollo.QueryHookOptions<ContactBlockQuery, ContactBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactBlockQuery, ContactBlockQueryVariables>(ContactBlockDocument, options);
      }
export function useContactBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactBlockQuery, ContactBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactBlockQuery, ContactBlockQueryVariables>(ContactBlockDocument, options);
        }
export type ContactBlockQueryHookResult = ReturnType<typeof useContactBlockQuery>;
export type ContactBlockLazyQueryHookResult = ReturnType<typeof useContactBlockLazyQuery>;
export type ContactBlockQueryResult = Apollo.QueryResult<ContactBlockQuery, ContactBlockQueryVariables>;