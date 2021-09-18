<template>
<div class="col-lg-6 col-md-6">
    <div class="product-details-content">
        <h3>{{name}}</h3>

        <ul class="product-info">
            <li><span class="base">14", original crust, 780 g</span> </li>
        </ul>

        <ul class="list-inline">
            <li class="list-inline-item rating-count">
                <span data-testid="product__option" type="button" class="sc-1hrv7kf-3 dhaJEk">Double pepperoni &nbsp;<i class="sc-1lk7lib-0 lmohzF svg-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.6" stroke="#737272" stroke-width="0.8"></circle>
                            <path d="M5 5L9 9" stroke="#737272" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9 5L5 9" stroke="#737272" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </i>;
                </span>
            </li>
            <li class="list-inline-item">marinara sauce;</li>
            <li class="list-inline-item">extra mozzarella;</li>
        </ul>

        <div class="product-size-wrapper">
            <ul class="back_green">
                <li><a href="#">Small</a></li>
                <li><a href="#">Medium</a></li>
                <li><a href="#">XL</a></li>
            </ul>
            <br>
            <ul class="back_green sizes">
                <li><a href="#">Original crust</a></li>
                <li class="active"><a href="#">Thin Crust</a></li>
            </ul>
        </div>
        <ul class="product-info">
            <li>Add topping</li>
        </ul>
        

        <!-- <div class="product-review">
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <a href="#" class="rating-count">3 reviews</a>
        </div> -->

        <!-- <div class="product-color-switch">
            <h4>Color:</h4>

            <ul>
                <li><a href="#" title="Black" class="color-black"></a></li>
                <li><a href="#" title="White" class="color-white"></a></li>
                <li class="active"><a href="#" title="Green" class="color-green"></a></li>
                <li><a href="#" title="Yellow Green" class="color-yellowgreen"></a></li>
                <li><a href="#" title="Teal" class="color-teal"></a></li>
            </ul>
        </div> -->

        <!-- <div class="wishlist-compare-btn">
            <a href="#" class="btn btn-light"><i class="far fa-heart"></i> Add to Wishlist</a>
            <a href="#" class="btn btn-light"><i class="fas fa-balance-scale"></i> Add to Compare</a>
        </div> -->

        <div class="product-add-to-cart">
            <div class="input-counter">
                <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                {{quantity}}
                <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
            </div>

            <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                <i class="fas fa-cart-plus"></i> Already Added
            </button>

            <button v-else type="submit" class="btn btn-primary" @click="addToCart()">
                Add to Basket for ₾{{price}}
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            getExistPId: false,
            quantity: 1
        }
    },
    props: ['id', 'name', 'price', 'image'],
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart() {
            const product = [{
                id: this.id,
                name: this.name,
                price: this.price,
                image: this.image,
                quantity: this.quantity
            }]

            if (this.cart.length > 0) {
                let id = this.id
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
                    this.getExistPId = true
                    this.$toast.info("Already added to the cart");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart", {
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        increaseQuantity() {
            if (this.quantity > 9) {
                this.$toast("Can't add more than 10", {
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if (this.quantity < 2) {
                this.$toast("Can't add less than 1", {
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity--;
            }
        },
    }
}
</script>

<style scoped>
.base {
    font-size: 14px;
}

.product-info {
    margin-top: 0px;
    margin-bottom: 10px;
}

.product-details-content h3 {
    margin-bottom: 0px;
}

.product-details-content .product-size-wrapper ul {
    margin-top: 0px;
    margin-left: 0px;
    width: 310px;
}

.product-details-content .product-size-wrapper ul li {
    margin-top: 0px;
    margin-left: 0px;
}

.product-details-content .product-size-wrapper ul li a {
    width: 100px;
    color: #000000;
    border-radius: 4px;
    background-color: #F8F8F8;
}

.product-details-content .product-size-wrapper ul.sizes li a {
    width: 150px;
    color: #000000;
    border-radius: 4px;
    background-color: #F8F8F8;
}

.rating-count {
    display: inline-block;
    color: #222222;
    border-bottom: 1px dashed #222222;
    line-height: normal;
    line-height: initial;
}
</style>
