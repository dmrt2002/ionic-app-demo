<template>
 <memorylayout pagetitle = 'All Memories'>
   <template v-slot:actions-end>
       <ion-button router-link="/memories/add">
           <ion-icon slot="icon-only" :icon="add"></ion-icon>
       </ion-button>
   </template>
   <template v-if="!passcodesetornot" v-slot:actions-right>
       <ion-button router-link="/memories/passwordset" >
           <ion-icon slot="icon-only" :icon="lock"></ion-icon>
       </ion-button>
   </template>
   <h2 v-if="!ismemory" class="ion-text-center">Add a Memory</h2>
      <memorieslist v-else :memories = "memories" ></memorieslist>
 </memorylayout>
</template>

<script >
import memorieslist from '../components/memorieslist.vue'
import memorylayout from '../components/memorylayout.vue'

import { IonButton , IonIcon} from '@ionic/vue'
import { add , lock } from 'ionicons/icons'
import { App } from '@capacitor/app'

export default ({
    components:{
         memorieslist,
         IonButton,
         IonIcon,
         memorylayout
    },
    data() {
        return {
            add,
            App,
            lock,
            memory:this.$store.getters.memories,
        };
    },
    ionViewDidEnter(){
        if(this.$router.currentRoute._value.href === '/memories'){
       document.addEventListener('ionBackButton', (ev) => {
           ev.detail.register(10, () => {
            this.$store.state.passcodeentered = false
            App.exitApp()
        });
       });
    }
    },
    computed: {
        memories() {
            return this.$store.getters.memories;
        },
        ismemory() {
            return this.$store.getters.ismemory;
        },
        passcodesetornot() {
            return this.$store.state.ispasscode;
        },
        passcodesetenteredornot() {
            return this.$store.state.passcodeentered;
        }
    },
    mounted() {
        if(this.$store.state.ispasscode === true && this.$store.state.passcodeentered === false){
            this.$router.push({ path:'/memories/enterpassword' })
        }
        setTimeout(() => {
            this.$store.state.passcodeentered = false
        }, 50);
    }
})
</script>

<style scoped>
ion-bakc-button {
    display: none;
}

</style>