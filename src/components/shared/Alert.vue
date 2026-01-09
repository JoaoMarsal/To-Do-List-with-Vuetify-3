<template>
    <div class="alert-notification">
        <v-alert
            :type="alertStore.type"
            :text="alertStore.text"
            closable
            class="animate__animated animate__fadeIn"
        ></v-alert>
    </div>
</template>

<style scoped>
    .alert-notification{
        position: fixed;
        z-index: 1;
        bottom: 50px;
        width: 100%;
        padding: 0 30% 0 30%;
    }
</style>

<script setup>
    import 'animate.css';
    import { useAlertStore } from "@/stores/alert.js"

    const alertStore = useAlertStore();
</script>