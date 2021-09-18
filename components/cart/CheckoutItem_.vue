<template>
<div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
        <div class="container">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Checkout Area -->
    <section class="checkout-area ptb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="user-actions">
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Returning customer? <nuxt-link to="/login">Click here to login</nuxt-link></span>
                    </div>
                </div>
            </div>

            <form>
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="billing-details">
                            <h3 class="title">Billing Details</h3>

                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label>Full Name</label>
                                        <input type="text" id="fullName" v-model="personDetails.fullName" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label>Company </label>
                                        <input type="text" id="billing_company" v-model="personDetails.billing_company" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Phone <span class="required">*</span></label>
                                        <input type="text" id="billing_phone" v-model="personDetails.billing_phone" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label>House number and street name <span class="required">*</span></label>
                                        <input type="text" id="billing_address_1" v-model="personDetails.billing_address_1" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" id="billing_address_2" v-model="personDetails.billing_address_2" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Entrance to building <span class="required">*</span></label>
                                        <input type="text" id="billing_entrance" placeholder="Entrance to building" v-model="personDetails.billing_entrance" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>&nbsp;<span></span></label>
                                        <input type="text" id="billing_door_code" placeholder="Entrance security code" v-model="personDetails.billing_door_code" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">

                                        <input type="text" id="billing_floor" placeholder="Floor" v-model="personDetails.billing_floor" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">

                                        <input type="text" id="billing_apartment_number" placeholder="Flat number" v-model="personDetails.billing_apartment_number" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label>City <span class="required">*</span></label>
                                        <input type="text" id="billing_city" v-model="personDetails.billing_city" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-6">
                                    <div class="form-group">
                                        <label><strong>Country / Region <span class="required">*</span> Georgia</strong></label>
                                    </div>
                                </div>

                                <div class="col-lg-12  col-md-6">
                                    <div class="form-group">
                                        <label>Email Address <span class="required">*</span></label>
                                        <input type="email" id="email" v-model="personDetails.email" class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group">
                                        <strong class="green" style="opacity: .5;">
                                            DELIVER TO A DIFFERENT ADDRESS?
                                        </strong>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <select name="different" class="form-control">
                                            <option value="" class="value"></option>
                                            <option value="" class="value">Home 2</option>
                                            <option value="" class="value">Office</option>
                                            <option value="" class="value">Villa </option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
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
            </form>
        </div>
    </section>
    <!-- End Checkout Area -->
</div>
</template>

<script>
import firebase from '../../plugins/firebase';
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
            }
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
        }
    }
}
</script>
