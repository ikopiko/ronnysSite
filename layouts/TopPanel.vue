<template>
    <!-- Start Top Panel Area -->
    <client-only>
        <transition name="fade">
            <div class="top-panel">
                <div class="container">
                    <div class="panel-content">
                        <div class="top-panel-slides">
                            <carousel
                                :autoplay = true
                                :autoplayTimeout = 1000
                                :paginationEnabled = false
                                :perPageCustom = "[[0, 1], [768, 1], [1024, 1]]"
                            >
                                <slide v-for="item in items" :key="item.id">
                                    <div class="single-item-box">
                                        <p v-html="item.text"></p>
                                    </div>
                                </slide>
                            </carousel>
                        </div>
                        <Clear  @click="emitToParent" class="panel-close-btn"/>
                    
                    </div>
                </div>
            </div>
        </transition>
    </client-only>
    <!-- End Top Panel Area -->
</template>

<script>
import Clear from 'assets/img/clear-ronnyspizza-pizza.svg';
export default {
    data() {
        return {
            isShowing: true,
            items: [
                {
                    id: 1,
                    text: '<strong>Enjoy an extra 20% off</strong> select sales styles <a href="#">Read More</a>'
                },
                {
                    id: 2,
                    text: '<strong>Enjoy an extra 20% off</strong> select sales styles <a href="#">Read More</a>'
                },
                {
                    id: 3,
                    text: '<strong>Enjoy an extra 20% off</strong> select sales styles <a href="#">Read More</a>'
                },
            ]
        }
    },
    methods: {
        emitToParent(){
            this.$emit('clicked', this.isShowing = !this.isShowing);
        }
    },
    components: {
        Clear
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>