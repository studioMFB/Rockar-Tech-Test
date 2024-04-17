import gql from 'graphql-tag'


export const PRODUCTS_QUERY = gql`
  query getProducts($filter: ProductFilterInput) {
    products(filter: $filter) {
      vin
      make
      colour
      model
      price
    }
  }
`;

export const PRODUCTS_MAKES_QUERY = gql`
  query getProducts($filter: ProductFilterInput){
    products(filter: $filter) {
        make
      }
  }
`;
export const PRODUCTS_MODELS_QUERY = gql`
  query getProducts($filter: ProductFilterInput){
    products(filter: $filter) {
        model
      }
  }
`;
export const PRODUCTS_COLOURS_QUERY = gql`
  query getProducts($filter: ProductFilterInput){
    products(filter: $filter) {
        colour
      }
  }
`;