<script setup lang="ts">
import { computed, defineProps } from "vue";
import { type ICustomer } from "@/definitions/customer";


const props = defineProps<{
  customer: ICustomer,
}>();

const customer = computed(() => props.customer);
</script>

<template>
  <li class="item customer">
    {{ customer.forename }} - {{ customer.surname }}
    {{ customer.email }} - {{ customer.contactNumber }}
    {{ customer.postcode }}
  </li>
</template>

<style scoped lang="scss"></style>
