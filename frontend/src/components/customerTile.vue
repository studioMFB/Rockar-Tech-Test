<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { RouteNameProvider } from '@/assets/provider';


const props = defineProps<{
    forename: string,
    surname: string
}>();

const forename = computed(() => props.forename);
const surname = computed(() => props.surname);
</script>

<template>
    <li class="item customer">
        <router-link className="customer"
            :to="{ name: RouteNameProvider.customer, params: { forename: forename, surname: surname } }">
            {{ forename }} - {{ surname }}
        </router-link>
    </li>
</template>

<style scoped lang="scss">
.customer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    margin: .1rem auto;

    a {
        cursor: pointer;
        text-decoration: none;

        &:hover {
            opacity: .8;
        }
    }
}
</style>
