<script setup lang="ts">
import { ERROR_MSG_WRONG } from "@/assets/constants/error";
import { useQuery } from '@vue/apollo-composable';
import { CUSTOMERS_NAME_QUERY } from "@/queries/customer";
import customerTile from "@/components/customerTile.vue";


const { result, loading, error } = useQuery(CUSTOMERS_NAME_QUERY);
</script>

<template>
  <div>
    <p v-if="loading"> Loading... </p>
    <p v-if="error"> {{ ERROR_MSG_WRONG }} </p>

    <h1 class="title">Customers</h1>

    <ul v-if="result" class="container">
      <customer-tile v-for="customer in result.customers" :key="customer.id" :forename="customer.forename" :surname="customer.surname"></customer-tile>
    </ul>
  </div>
</template>

<style lang="scss">
.customer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin: .1rem auto;

  &>p {
    margin: .2rem;
    white-space: nowrap;
    font-weight: 400;
    font-size: 15px;
  }

  a {
    cursor: pointer;
    color: var(--item-color);
    text-decoration: none;

    &:hover {
      opacity: .8;
    }
  }
}
</style>
