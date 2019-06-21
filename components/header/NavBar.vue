<template lang="pug">
.navbar.fixed.z-50.top-0.inset-x-0.flex.justify-end
  nuxt-link.py-2.px-4.no-underline.text-black(
    v-for="item in menu"
    :to="item.route"
    :key="item.route"
    :class="{'bg-gray-300': item.routeName === $route.name}") {{ item.name }}
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
                },{
                  name:'about',
                  route:"/about",
                  routeName:"about"
                },{
                  name:'contact',
                  route:"/contact",
                  routeName:"contact"
                }
            ]

        }
    }
}
</script>
