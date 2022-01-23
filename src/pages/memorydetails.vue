<template>
    <baselayout :pagetitle = "loadedmemory ? loadedmemory.title : 'loading....'" pagedefaultbacklink="/memories">
       <h2 v-if="!loadedmemory">Could not find a memory </h2>
       <memoryoverview v-else
       :title="loadedmemory.title"
       :image="loadedmemory.image"
       :description="loadedmemory.description"
       >
        
       </memoryoverview>
    </baselayout>
</template>

<script>
import baselayout from "../components/baselayout.vue"
import memoryoverview from '../components/memoryoverview.vue'

export default {
    components: {
        baselayout,
        memoryoverview
    },
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
       ionViewDidEnter() {
        if(this.$router.currentRoute._value.href === `/memories/${this.memoryId}`){
            document.addEventListener('ionBackButton', (ev) => {
                ev.detail.register(10, () => {
                 this.$router.replace('/memories')
             });
       });
     }
    },
    computed: {
        loadedmemory(){
            return this.$store.getters.memory(this.memoryId);
        }
    },
    watch: {
        '$route'(currentroute) {
            this.memoryId = currentroute.params.id;
        }
    },
    mounted() {
        this.$store.state.abc = true
    }
}
 
</script>