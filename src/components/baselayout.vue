<template>
        <ion-page>
        <ion-header>
            <ion-toolbar>
          <ion-buttons v-if="state" slot="start">
               <ion-back-button :default-href="pagedefaultbacklink"></ion-back-button>
          </ion-buttons>
               <ion-title><span>{{ pagetitle }}</span></ion-title>
               <ion-buttons slot="end">
                   <slot name="actions-end"></slot>
                   <slot name="actions-right"></slot>
               </ion-buttons>
            </ion-toolbar>
        </ion-header>
            <ion-content>
                    <slot />
            </ion-content>
    </ion-page>
</template>

<script>
import {IonPage , IonHeader, IonToolbar ,IonTitle,IonContent,IonBackButton,IonButtons} from '@ionic/vue'
export default {
    props: ['pagetitle','pagedefaultbacklink'],
        components:{
        IonPage ,
         IonHeader,
         IonTitle,
         IonContent,
         IonToolbar,
         IonBackButton,
         IonButtons
    },
    computed: {
        state() {
            return this.$store.state.abc
        }
    }
}
</script>

<style>
ion-back-button {
    display: none;
}
</style>