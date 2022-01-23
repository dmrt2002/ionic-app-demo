<template>
    <baselayout pagetitle="Add a memory" pagedefaultbacklink="/memories">
   <creatememory @save-memory="savememory"></creatememory>
</baselayout>
</template>

<script>

import baselayout from '../components/baselayout.vue'
import creatememory from '../components/creatememory.vue'
export default {
  components: { 
      baselayout,
      creatememory
      },
    methods:{
        savememory(memorydata){
            this.$store.dispatch('addmemory' , memorydata)
            this.$router.push({ path:'/memories' })
        }
    },
        ionViewDidEnter() {
        if(this.$router.currentRoute._value.href === '/memories/add'){
            document.addEventListener('ionBackButton', (ev) => {
                ev.detail.register(10, () => {
                 this.$router.push({ path:'/memories' })
             });
       });
     }
    },
    mounted() {
        this.$store.state.abc = true
    }
}
</script>