<template>
<div :class="className">
    <div class="single-product-box">
        <div class="product-image">
            <nuxt-link :to="`/products-details/${product.id}`">
                <img :src="product.image" :alt="product.name">
                <img :src="product.imageHover" :alt="product.name">
            </nuxt-link>

            <ul>
                <li>
                    <a href="javascript:void(0)" title="Quick View" v-b-tooltip.hover @click.prevent="quickView">
                        <Visibility  class="svgGreen"/>
                    </a>
                </li>
                <li>
                    <a href="#" title="Add to Wishlist" v-b-tooltip.hover>
                        <Heart class="svgGreen"/>
                    </a>
                </li>
                <li>
                    <a href="#" title="Add to Compare" v-b-tooltip.hover>
                        <Sync class="svgGreen"/>
                    </a>
                </li>
            </ul>

            <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer>
        </div>

        <div class="product-content">
            <div class="">
                <nuxt-link class="tituli" :to="`/products-details/${product.id}`">{{product.name}}</nuxt-link>
            </div>

            <div class="topings">
                Mozzarella, Pepperoni, Smoked Ham, Homemade Italian Sausage, Onions, Sweet Peppers, Mushrooms, Black Olives and Marinara Sauce.
            </div>

            <div class="price">
                From ${{product.price}}
            </div>

            <a v-if="getExistPId === product.id" href="javascript:void(0)" class="btn btn-light added-btn" @click="addToCart(product)">
                Already Added!
            </a>

            <button type="button" v-else class="btn btn-light right" @click="addToCart(product)">
                Select
            </button>
        </div>
    </div>
</div>
</template>

<style scoped>
.tituli {
    font-size: 20px;
    text-align: left;
    color: #000000;
}
.price {
    font-size: 18px;
    font-weight: 600 !important;
    position: relative;
    top: 33px;
    text-align: left;
    width: 100px;
}
.topings {
    text-align: left; opacity: 0.6;
}
</style>

<script>
import Timer from './Timer';
import Visibility from '../../assets/img/visibility-ronnyspizza-pizza.svg';
import Heart from "../../assets/img/favorite-ronnyspizza-pizza.svg";
import Sync from "../../assets/img/sync-ronnyspizza-pizza.svg";
export default {
    name: 'ProductItem',
    components: {
        Timer,Visibility,Heart,Sync
    },
    data() {
        return {
            getExistPId: null
        }
    },
    props: ['product', 'className'],
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },
    methods: {
        quickView(e) {
            this.$emit('clicked')
        },
        addToCart(item) {
            const product = [{
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            }]

            if (this.cart.length > 0) {
                let id = item.id
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if (cartIndex == -1) {
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id,
                        unit: 1,
                        cart: this.cart
                    });
                    this.$toast.info("Already added to the cart and update with one");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart", {
                    icon: 'fas fa-cart-plus'
                });
            }
        }
    }
}
</script>
