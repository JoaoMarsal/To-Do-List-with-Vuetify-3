<template>
    <div>
        <v-list
      lines="three"
      select-strategy="classic"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="task, index in taskStore.tasks"
        :key="index"
        :value="index"
        @click="taskStore.toggleDoneTask(index)"
      >
        <template v-slot:prepend="{ }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="taskStore.tasks[index].done"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title> {{ task.title }} </v-list-item-title>
        <v-list-item-description> {{ task.subtitle }} </v-list-item-description>
        <template v-slot:append>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                    color="grey-lighten"
                    icon="mdi-dots-vertical"
                    variant="text"
                    v-bind="props">
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                        <v-list-item-title>Editar</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="2" @click="taskStore.toggleDel(index)">
                        <v-list-item-title>Deletar</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTaskField :task="taskStore.tasks[taskStore.indexValueTask]"/>
    <DialogTaskDelete :task="taskStore.tasks[taskStore.indexValueDelete]"/>
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import DialogTaskField from "@/components/dialogs/DialogTaskFields.vue"
    import DialogTaskDelete from "@/components/dialogs/DialogTaskDelete.vue"
    import { useTaskStore } from "@/stores/task.js"

    const taskStore = useTaskStore()
    
    


    

    
</script>