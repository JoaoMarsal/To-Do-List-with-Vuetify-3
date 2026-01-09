<template>
    <div>
        <v-text-field clearable label="Add Task" :rules="rules" v-model="taskStore.taskTitleCreate" @keyup.enter="taskStore.addTask"></v-text-field>    
        <ListTasks/>
    </div>
</template>

<script setup>
import ListTasks from "@/components/ListTasks.vue"
import { useTaskStore } from "@/stores/task.js"
import { onMounted } from "vue"

    const taskStore = useTaskStore()
 
    const rules = [
        (value) => {
            if(!value || value.length > 5) return true;
            return "Please, insert task title with more than 5 letters";
        }
    ]

    onMounted(()=>{
        taskStore.getTasks();
    })
</script>