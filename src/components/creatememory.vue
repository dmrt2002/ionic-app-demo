<template>
        <form class="ion-padding" @submit.prevent="submitform">
       <ion-list>
           <ion-item>
               <ion-label position="floating">
                   Title
               </ion-label>
               <ion-input type="text"  v-model="enteredtitle" />
           </ion-item>
           <ion-item>
               <ion-thumbnail v-if="imageUrl !== null">
                   <img :src="imageUrl" />
               </ion-thumbnail>
                   <ion-button fill="clear" @click="takephoto()">
                       <ion-icon slot="start" :icon="camera" ></ion-icon>
                       Add Photo 
                   </ion-button>
           </ion-item>
       </ion-list>
         <ion-button type="submit" expand="block">save</ion-button>
  </form>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput,IonButton,IonThumbnail,IonIcon } from '@ionic/vue'
import { camera } from 'ionicons/icons'
import { Camera, CameraResultType } from '@capacitor/camera'
let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

export default {
    emits: ['save-memory'],
      components: { 
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
      IonThumbnail,
      IonIcon
      },
      data() {
          return{
              enteredtitle:'',
              entereddescription:'',
              imageUrl : null,
              camera,
          }
      },
      methods:{
          submitform() {
              if(this.enteredtitle == ''){
                  this.enteredtitle = `${day}:${month}:${year}.`
              }
              const memorydata = {
                  title: this.enteredtitle,
                  imageurl:this.imageUrl,
                  description:this.entereddescription
              }
              this.$emit('save-memory' , memorydata)
              this.$router.replace('/memories')
          },
          async takephoto() {
               const image = await Camera.getPhoto({
               quality: 80,
               allowEditing: false,
               source:'PROMPT',
               resultType: CameraResultType.Uri
            });
             this.imageUrl = image.webPath;   
          }
      }
}
</script>