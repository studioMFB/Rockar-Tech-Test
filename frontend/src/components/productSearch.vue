<script setup lang="ts">
// import { ERROR_MSG_WRONG } from "@/assets/constants/error";
import { useLazyQuery } from "@vue/apollo-composable";
import { PRODUCTS_QUERY } from "@/queries/product";
import { ref } from "vue";


interface IProductFilters {
    make: string,
    model: string,
    colour: string
}

const { load, result, loading, error } = useLazyQuery(PRODUCTS_QUERY);

const make = ref("");
const model = ref("");
const colour = ref("");

function search() {
    const filters: IProductFilters = {
        make: "",
        model: "",
        colour: ""
    };

    if (make.value) filters.make = make.value;
    if (model.value) filters.model = model.value;
    if (colour.value) filters.colour = colour.value;

    load(undefined, { filter: filters });

    console.log("result.value ", result.value)
}
</script>

<template>
    <div>
        <input class="product__search--imput" v-model="make" type="text" placeholder="Make" />
        <input class="product__search--imput" v-model="model" type="text" placeholder="Model" />
        <input class="product__search--imput" v-model="colour" type="text" placeholder="Colour" />

        <button class="product__search--btn" @click="search"> Search </button>

        <div v-if="loading">Loading...</div>
        <div v-if="error">Error: {{ error.message }}</div>

        <ul v-if="result" class="container">
            <li v-for="product in result.products" :key="product.id" class="item product">
                {{ product.make }} - {{ product.model }} - {{ product.colour }}
                {{ product.vin }} - {{ product.price }}
            </li>
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


.product__search--imput {
    margin: 0 .2rem;
    border-radius: 5px;
    border: solid 1px rgba(65, 65, 65, 0.418);
    color: var(--link-color);
    background: rgb(34, 34, 34);
}

.product__search--btn {
    cursor: pointer;
    margin: 0 1rem;
    border-radius: 5px;
    border: none;
    color: var(--link-color);
    background: var(--title-color);

    &:hover {
        opacity: .8;
        border: 1px solid rgba(255, 255, 255, .2);
    }
}
</style>