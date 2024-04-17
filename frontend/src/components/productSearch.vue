<script setup lang="ts">
// import { ERROR_MSG_WRONG } from "@/assets/constants/error";
import { useLazyQuery, useQuery } from "@vue/apollo-composable";
import { PRODUCTS_QUERY, PRODUCTS_MAKES_QUERY, PRODUCTS_MODELS_QUERY, PRODUCTS_COLOURS_QUERY } from "@/queries/product";
import { computed, ref } from "vue";
import { type IProductFilters, type IProduct } from "@/definitions/product";
import { DocumentNode } from "graphql";


function filterProductCategory(QUERY: DocumentNode, category: string): string[] {
    let uniqueColours: string[] = [];
    const { result, loading, error } = useQuery(QUERY);
    if (result)
        uniqueColours = Array.from(new Set(result.value.products.map((p: IProduct) => p[category])));

    return uniqueColours;
}

const uniqueMakes = computed(() => {
    return filterProductCategory(PRODUCTS_MAKES_QUERY, 'make');
});
const uniqueModels = computed(() => {
    return filterProductCategory(PRODUCTS_MODELS_QUERY, 'model');
});
const uniqueColours = computed(() => {
    return filterProductCategory(PRODUCTS_COLOURS_QUERY, 'colour');
});

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
}
</script>

<template>
    <div>
        <select class="product__search--imput" v-model="make">
            <option disabled value="">Select a make</option>
            <option v-for="make in uniqueMakes" :key="make">{{ make }}</option>
        </select>
        <select class="product__search--imput" v-model="model">
            <option disabled value="">Select a model</option>
            <option v-for="model in uniqueModels" :key="model">{{ model }}</option>
        </select>
        <select class="product__search--imput" v-model="colour">
            <option disabled value="">Select a colour</option>
            <option v-for="colour in uniqueColours" :key="colour">{{ colour }}</option>
        </select>

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