<template>
<div>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col cols="12" sm="12" md="8">
                <v-card class="pa-2">
                    <v-tabs color="cyan" slider-color="yellow">
                        <v-tab ripple>
                            <Delivery /> <span class="pl-10">Delivery</span>
                        </v-tab>
                        <v-tab ripple>
                            <Pickup /> <span class="pl-10">Pickup</span>
                        </v-tab>
                        <v-tab-item>
                            <DeliveryForm />
                        </v-tab-item>
                        <v-tab-item>
                            <PickupForm />
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <ContactInfo />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<style scoped>
.active {
    background-color: #98CEA6 !important;
}

ol,
ul,
dl {
    border-bottom: 1px solid #F5F5F5;
}
</style>

<script>
import firebase from '../../plugins/firebase';
import Delivery from '../../assets/img/delivery-ronnyspizza-pizza.svg';
import Pickup from '../../assets/img/pickup-ronnyspizza-pizza.svg';
import DeliveryForm from '../Form/Delivery';
import PickupForm from '../Form/Pickup';
import ContactInfo from '../Form/Contactinfo';
import {
vuetify
} from 'vuetify';
export default {
    data() {
        return {
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            addresses: [
                'addresses 1',
                'addresses 2',
                'addresses 3',
                'addresses 4',
            ],
            alert: true,
            personDetails: {
                fullName: 'John Doe',
                address: 'Town hall, av 02',
                city: 'New York',
                email: 'john@gmail.com',
                phone: '+990198378372',
                createdAt: new Date()
            },
            
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
    components: {

        Delivery,
        Pickup,
        DeliveryForm,
        PickupForm,
        ContactInfo
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
