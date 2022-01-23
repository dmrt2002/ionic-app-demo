<template>
        <ion-page>
        <ion-header>
            <ion-toolbar>
               <ion-title><span>{{ pagetitle }}</span></ion-title>
            </ion-toolbar>
        </ion-header>
            <ion-content>
                    <slot />
            </ion-content>
    </ion-page>
</template>

<script>
import {IonPage , IonHeader, IonToolbar ,IonTitle,IonContent} from '@ionic/vue'
export default {
    props: ['pagetitle','pagedefaultbacklink'],
        components:{
        IonPage ,
         IonHeader,
         IonTitle,
         IonContent,
         IonToolbar,
    }
}
</script>

<style>
ion-back-button {
    display: none;
}
</style>