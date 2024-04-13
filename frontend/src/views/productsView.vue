<script setup lang="ts">
import { ERROR_MSG_WRONG } from "@/assets/constants/error";
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from "@/queries/product";
// import ProductSearch from "../components/productSearch";

const { loading, error } = useQuery(PRODUCTS_QUERY);
</script>

<template>
  <!-- <p v-if="loading"> Loading... </p> -->
  <!-- <p v-if="error"> {{ ERROR_MSG_WRONG }} </p> -->

  <div  class="container">
    <h1>Products</h1>
    <!-- <ProductSearch /> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background-color: var(--main-bkg-color);
}
</style>
