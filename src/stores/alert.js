import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "sss",
    text: "sss"
  }),
  actions:{
    notifyAlert(){
        this.showAlert = true
        setTimeout(()=>{
            this.showAlert = false
        }, 3000)
    },
    notifyAlertCreated(){
        this.type="success";
        this.text="Task created successfully";
        this.notifyAlert()
    },
    notifyAlertDeleted(){
        this.type="warning";
        this.text="Task deleted successfully";
        this.notifyAlert()
    },
    notifyAlertUpdated(){
        this.type="info";
        this.text="Task updated successfully";
        this.notifyAlert()
    }
  }
})
