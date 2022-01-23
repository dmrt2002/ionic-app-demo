<template>
    <ion-list>
        <itemlist 
        v-for="memory in memories"
        :key="memory.id"
        :memory="memory">
        </itemlist>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import itemlist from './Itemlist.vue'

export default {
    props: ["memories"],
    components: {
        IonList,
        itemlist
    },
    mounted() {
        setTimeout(() => {
            this.$store.state.passcodeentered = false
        }, 50);
    }
}
</script>