<script setup lang="ts">
import { computed, defineProps } from "vue";
import { type ICustomer } from "@/definitions/customer";


const props = defineProps<{
  customer: ICustomer,
}>();

const customer = computed(() => props.customer);
</script>

<template>
  <li class="item customer--detail">
   <p> {{ customer.forename }} - {{ customer.surname }} </p>
   <p> {{ customer.email }} </p>
   <p> {{ customer.contactNumber }} </p>
    <p> {{ customer.postcode }} </p>
  </li>
</template>

<style scoped lang="scss">
.customer--detail {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    
    p{
      margin: 0;
    }

}
</style>
