<template>
    <ion-item 
        >
        <ion-thumbnail slot="start" :router-link = "`/memories/${memory.id}`">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label :router-link = "`/memories/${memory.id}`" >
           {{memory.title}}
        </ion-label>
      <ion-button slot="end" fill="clear" @click="deletefile(memory)" :router-link = "`/memories`">
        <ion-icon slot="icon-only" :icon="trash"></ion-icon>
      </ion-button>
        </ion-item>
</template>

<script>
import { IonItem , IonThumbnail, IonImg, IonLabel, IonButton , alertController} from '@ionic/vue'
import  { trash } from 'ionicons/icons'


export default {
    props: ["memory"],
    components: {
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel,
        IonButton
    },
    data() {
        return {
            trash
        }
    },
    mounted() {
        setTimeout(() => {
            this.$store.state.passcodeentered = false
        }, 50);
    },
    methods: {
       async deletefile(memory) {
             const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Are you sure you want to remove it',
          buttons: [
               {
              text: 'YES',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                 this.$store.dispatch('deletefile' , memory)
              }
            },
              {
              text: 'NO',
              handler: () => {
                 this.$router.replace('/memories')
              },
            }
          ],
        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
        }
    }
}
</script>