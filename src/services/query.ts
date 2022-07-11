import { gql } from '@apollo/client'

export const QUERY_STANDARD_PAGE = gql`
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

export const QUERY_NAVIGATION = gql`
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

export const QUERY_BIOGRAPHY_BLOCK = gql`
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

export const QUERY_ACTOR_BLOCK = gql`
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

export const QUERY_RIDER_BLOCK = gql`
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

export const QUERY_FOOTER = gql`
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

export const QUERY_VIDEO_BLOCK = gql`
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

export const QUERY_GALLERY_BLOCK = gql`
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

export const QUERY_CONTACT_BLOCK = gql`
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