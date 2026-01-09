<template>
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      min-width="400"
      max-width="600"
      persistent
    >
      <v-card
        prepend-icon="mdi-pencil"
        text=""
        title="Edit Task"
      >
      <v-card-text>
        <v-text-field v-model="props.task.title" label="Title"></v-text-field>
        <v-text-field v-model="props.task.subtitle" label="Description"></v-text-field>
      </v-card-text>
        <v-spacer></v-spacer>
        <template v-slot:actions>
        <v-btn @click="taskStore.updateTask()" variant="elevated" color="blue">
          Ok
        </v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script setup>
    import { defineProps } from "vue";
    import { useTaskStore } from "@/stores/task.js"

    const taskStore = useTaskStore()

    const props = defineProps({
        task: Object
    })
</script>