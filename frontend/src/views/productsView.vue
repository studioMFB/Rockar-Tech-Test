<script setup lang="ts">
import { ERROR_MSG_WRONG } from "@/assets/constants/error";
import { useQuery } from '@vue/apollo-composable';
import { PRODUCTS_QUERY } from "@/queries/product";
import ProductSearch from "@/components/productSearch.vue";


const { result, loading, error } = useQuery(PRODUCTS_QUERY);
</script>

<template>
  <div>
    <p v-if="loading"> Loading... </p>
    <p v-if="error"> {{ ERROR_MSG_WRONG }} </p>

    <h1 class="title">Products</h1>

    <ul v-if="result" class="container">
      <ProductSearch />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.item {
  color: var(--item-color);
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: -moz-fit-content;
  width: fit-content;
  height: auto;
  margin: .5rem auto;
  border-radius: 5px;
  border: solid 1px rgba(65, 65, 65, 0.418);

  &>li {
    margin: .2rem;
    white-space: nowrap;
    font-weight: 400;
    font-size: 15px;
  }
}

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
