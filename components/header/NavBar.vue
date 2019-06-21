<template lang="pug">
    .navbar.absolute.top-0.inset-x-0.bg-blue-300.flex
        nuxt-link.py-2.px-4(
            v-for="item in menu"
            :to="item.route"
            :key="item.route"
            :class="{'bg-red-300': item.routeName === $route.name}"
            ) {{ item.name }}
</template>

<script>

export default {
    data () {
        return {
            active: 'home',
            menu: [
                {
                name:'home',
                route:"/",
                routeName:"index"
                },
                {
                name:'about',
                route:"/about",
                routeName:"about"
                },
                {
                name:'contact',
                route:"/contact",
                routeName:"contact"
                }
            ]

        }
    },

    mounted () {
        console.log(this.$route.name)
    }
}
</script>
