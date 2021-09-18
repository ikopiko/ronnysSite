<template>
<div>
    <!-- Start Navbar Area -->
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="comero-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <nuxt-link class="navbar-brand" to="/">
                        <img src="../assets/img/logo.png" alt="logo">
                    </nuxt-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">Pizza</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">Extras</nuxt-link>
                            </li>

                            <li class="nav-item">
                                <nuxt-link to="#Drinks" class="nav-link">Drinks</nuxt-link>
                            </li>

                            <li class="nav-item" style="position:relative">
                                <b-badge class="special-badge">Hot</b-badge>
                                <nuxt-link to="/contact" class="nav-link"><span>Specials</span></nuxt-link>     
                            </li>

                            <li class="nav-item">
                                <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                            </li>
                        </ul>

                        <div class="others-option">
                            <div class="option-item">
                                <nuxt-link to="/login">Login</nuxt-link>
                            </div>
                            <div class="option-item">
                                <a @click.prevent="toggle" href="#">
                                    Cart({{cart.length}}) <Cartt />
                                </a>
                            </div>
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
    <!-- End Navbar Area -->

    <SidebarPanel></SidebarPanel>
</div>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import Cartt from '../assets/img/cart-ronnyspizza-pizza.svg';
import {
    mutations
} from '../utils/sidebar-util';
import Categories from '@/components/Categories';
import Cart from '~/pages/cart.vue';
export default {
    components: {
        SidebarPanel,
        Categories,
        Cartt
    },
    data() {
        return {
            isSticky: false
        }
    },
    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
        cart() {
            return this.$store.getters.cart
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>
