import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert.js'

const alertStore = useAlertStore()

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks:[
        { 
            title: 'Estudar Vue', 
            subtitle: 'Estudar Vue com Vuetify',
            done: 'true'
        },
        {
            title: 'comprar pão',
            subtitle: 'Lembre-se de comprar o pao',
            done: true
        }],
    taskTitleCreate: "",
    indexValueDelete: 0,
    showDialogTaskDelete: false,
    showDialogTaskFields: false,
    indexValueTask: 0

}), actions:{
    addTask(){
        if(this.taskTitleCreate.length > 5){
        this.tasks.push({
            title: this.taskTitleCreate,
            done: false
        })
        this.taskTitleCreate = "";
        this.saveLocalData()
        alertStore.notifyAlertCreated()
        } else return true
    },
    toggleDel(index){
      this.showDialogTaskDelete = !this.showDialogTaskDelete;
      if(index != null)
        this.indexValueDelete = index
    },
    deleteTask(){
      this.tasks.splice(this.indexValueDelete, 1)
      this.toggleDel()
      this.saveLocalData()
      alertStore.notifyAlertDeleted()
    },
    updateTask(){
      this.saveLocalData;
      this.toggleEdit()
      alertStore.notifyAlertUpdated()
    },
    toggleEdit(index){
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if(index != null)
        this.indexValueTask = index
    },
    saveLocalData(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks)
        )
    },
    getTasks(){
        let items = localStorage.getItem('tasks')
        if(items)
            this.tasks = JSON.parse(items)
    },
    toggleDoneTask(index){
        this.tasks[index].done = !this.tasks[index].done
        this.saveLocalData()
    }
}
})