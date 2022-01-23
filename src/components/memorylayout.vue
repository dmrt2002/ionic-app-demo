<template>
        <ion-page>
        <ion-header>
            <ion-toolbar>
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
import {IonPage , IonHeader, IonToolbar ,IonTitle,IonContent,IonButtons,} from '@ionic/vue'
export default {
    props: ['pagetitle','pagedefaultbacklink'],
        components:{
        IonPage ,
         IonHeader,
         IonTitle,
         IonContent,
         IonToolbar,
         IonButtons
    }
}
</script>

<style>
ion-back-button {
    display: none;
}
</style>