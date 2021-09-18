<template>
<div>
                <li v-for="category in categoryes" :key="category.id" v-bind:category_data="category">
                    <h2>
                        <Categoryes :category_data="category.name" />
                    </h2>
                </li>
</div>
</template>

<script>
import axios from 'axios'
// import Item from "@/components/Item"
export default {
    props: {
        data: Array,
    },
    components: {
    
    },
    data: () => ({
        show: false,
        isActive: false,
        categoryes: [],
    }),
    mounted() {

        const TOKEN = 'ntoI_TodKtEjTTqj8HBVGmQPE3gW5TFY';
        axios.request({
                method: 'post',
                url: 'https://max.ronnyspizza.ge/rest/web/index.php?r=v1/products/get-products-category',
                headers: {
                    'Authorization': 'Bearer ' + TOKEN,
                }
            })
            .then(response => {
                this.categoryes = response.data;
                //this.products = this.products.reverse();
                console.log("Ctegories data from API: ", this.categoryes)
            });

    },
    methods: {},
}
</script>
