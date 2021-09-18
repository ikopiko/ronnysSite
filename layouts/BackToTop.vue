<template>
    <client-only>
        <back-to-top bottom="50px" right="50px">
            <div class="go-top"><BackTop  class="svgGreen"/></div>
        </back-to-top>
    </client-only>
</template>

<script>
import BackTop from "assets/img/arrow_upward-ronnyspizza-pizza.svg";
export default {
    components: {
        BackTop
    }
}
</script>