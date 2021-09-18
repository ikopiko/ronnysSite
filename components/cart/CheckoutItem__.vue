<template>
<div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>Checkout</li>
            </ul>
        </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Checkout Area -->
    <section class="checkout-area ptb-60">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="user-actions">
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Returning customer? <nuxt-link to="/login">Click here to login</nuxt-link></span>
                    </div>
                </div>
                <div class="col-md-8 col-xs-12">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Full Name *" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-text-field v-model="company"  label="Company"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-text-field v-model="phone" :counter="10" :rules="phoneRules" label="Phone *" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-text-field v-model="billing_address_1" :counter="10" :rules="billing_address_1Rules" label="House number" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            </v-col>
                        </v-row>

                        <v-col cols="12" sm="6">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                        </v-col>

                        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>

                        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                            Validate
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="reset">
                            Reset Form
                        </v-btn>

                        <v-btn color="warning" @click="resetValidation">
                            Reset Validation
                        </v-btn>
                    </v-form>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="order-details">
                        <h3 class="title">Your Order</h3>

                        <div class="order-table table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr v-for="(cart, i) in cart" :key="i">
                                        <td class="product-name">
                                            <a href="#">{{cart.name}}</a>
                                        </td>

                                        <td class="product-total">
                                            <span class="subtotal-amount">${{cart.price * cart.quantity}}</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="order-subtotal">
                                            <span>Cart Subtotal</span>
                                        </td>

                                        <td class="order-subtotal-price">
                                            <span class="order-subtotal-amount">${{cartTotal}}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="order-shipping">
                                            <span>Shipping</span>
                                        </td>

                                        <td class="shipping-price">
                                            <span>$10.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="total-price">
                                            <span>Order Total</span>
                                        </td>

                                        <td class="product-subtotal">
                                            <span class="subtotal-amount">${{parseFloat(cartTotal + 10).toFixed(2)}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="payment-method">
                            <p>
                                <input type="radio" id="direct-bank-transfer" name="radio-group" checked>
                                <label for="direct-bank-transfer">Direct Bank Transfer</label>

                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <p>
                                <input type="radio" id="paypal" name="radio-group">
                                <label for="paypal">PayPal</label>
                            </p>
                            <p>
                                <input type="radio" id="cash-on-delivery" name="radio-group">
                                <label for="cash-on-delivery">Cash on Delivery</label>
                            </p>
                        </div>

                        <a href="javascript:void(0)" @click="add" class="btn btn-primary order-btn">Place Order</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- End Checkout Area -->
</div>
</template>

<script>
import firebase from '../../plugins/firebase';
import {
    vuetify
} from 'vuetify';
export default {
    data() {
        return {
            personDetails: {
                fullName: 'John Doe',
                address: 'Town hall, av 02',
                city: 'New York',
                email: 'john@gmail.com',
                phone: '+990198378372',
                createdAt: new Date()
            },
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'Company is required',
                v => (v && v.length <= 3) || 'Company must be less than 3 characters',
            ],
            billing_address_1: '',
            billing_address_1Rules: [
               v => !!v || 'House number and street name is required',
                v => (v && v.length <= 10) || 'House number and street must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }
    },
    computed: {
        cart() {
            return this.$store.getters.cart
        },
        cartTotal() {
            return this.$store.getters.totalAmount
        }
    },
    methods: {
        add() {
            const cartData = {
                details: this.personDetails,
                items: this.cart
            }
            const db = firebase.firestore();
            const dbOrderRef = db.collection('orders');
            dbOrderRef.add(cartData);
            this.$toast.success(`Thanks for the order`, {
                icon: 'fas fa-cart-plus'
            });
            this.$store.dispatch('cartEmpty')
            this.$router.push("/");
        },
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },

}
</script>
