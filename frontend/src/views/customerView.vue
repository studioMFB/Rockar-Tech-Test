<script setup lang="ts">
import { defineProps } from "vue";
import { ERROR_MSG_WRONG } from "@/assets/constants/error";
import { useQuery } from '@vue/apollo-composable';
import { CUSTOMERS_QUERY } from "@/queries/customer";


const props = defineProps<{
  forename: string,
  surname: string
}>();

const { result, loading, error } = useQuery(CUSTOMERS_QUERY, {
  filter: {
    forename: props.forename,
    surname: props.surname,
  }
});
</script>

<template>
  <div>
    <p v-if="loading"> Loading... </p>
    <p v-if="error"> {{ ERROR_MSG_WRONG }} </p>

    <h1 class="title">Customer</h1>

    <ul v-if="result" class="container">
      <li v-for="customer in result.customers" :key="customer.id" class="item customer">
        {{ customer.forename }} - {{ customer.surname }}
        {{ customer.email }} - {{ customer.contactNumber }}
        {{ customer.postcode }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
