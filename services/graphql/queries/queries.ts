import { gql } from '@apollo/client';

export const GET_POPULAR_PREBUILTS = gql`
  query GetPopularPrebuilts {
    popularPrebuilts {
      name
      description
      imageUrl
      specifications {
        key
        value
      }
    }
  }
`;

export const GET_SERVICES = gql`
  query GetServices {
    services {
      name
      description
      imageUrl
    }
  }
`;

export const GET_SOFTWARE_SOLUTIONS = gql`
  query GetSoftwareSolutions {
    softwareSolutions {
      name
      description
      imageUrl
    }
  }
`;

export const GET_DATA = gql`
  query GetData {
    popularPrebuilts {
      name
      description
      imageUrl
      specifications {
        key
        value
      }
    }
    services {
      name
      description
      imageUrl
    }
    softwareSolutions {
      name
      description
      imageUrl
    }
  }
`;
