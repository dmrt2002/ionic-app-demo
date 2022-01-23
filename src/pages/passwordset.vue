<template>
    <layout pagetitle="Set a passcode" pagedefaultbacklink="/memories">
   <security/>
</layout>
</template>

<script>
import security from '../components/security.vue'
import layout from '../components/layout.vue'

export default {
    components: {
        security,
        layout
    }
}
</script>

<style scoped>

</style>