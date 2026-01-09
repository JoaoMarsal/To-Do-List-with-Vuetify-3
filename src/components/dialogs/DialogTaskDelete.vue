<template>
    <v-dialog
      v-model="taskStore.showDialogTaskDelete"
      min-width="400"
      max-width="600"
      persistent
    >
      <v-card
        prepend-icon="mdi-delete"
        text="This action can't be reverted..."
        title="Are you sure you want to delete this task?"
      >
      <v-card-text>
      </v-card-text>
        <v-spacer></v-spacer>
        <template v-slot:actions>
        <v-btn @click="taskStore.toggleDel()" variant="elevated" color="red">
          No
        </v-btn>
        <v-btn @click="taskStore.deleteTask()" color="red" variant="outlined">
          Yes
        </v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script setup>
    import { defineProps } from "vue"
    import { useTaskStore } from "@/stores/task.js"

    const taskStore = useTaskStore()

    const props = defineProps({
        task: Object
    })
</script>