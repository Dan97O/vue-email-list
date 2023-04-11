
/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const { createApp } = Vue

createApp({
  data() {
    return {
      numberEmails: 10,
      url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: [],
    }
  },
  methods: {
    emailGenerated() {
      for (let i = 0; i < this.numberEmails; i++) {
        axios
          .get(this.url)
          .then(response => {
            this.emails.push(response.data.response);
          })
      }
    }
  },
  mounted() {
    this.emailGenerated();
  }
}).mount('#app')