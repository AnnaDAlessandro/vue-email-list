const { createApp } = Vue

createApp({
  data() {
    return {
        arrayEmail:[]
    } 
  },
  mounted(){
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then( (response) => {
            // Push the obtained email address into the array
            this.arrayEmail.push(response.data.response);
          })
          .catch(error => {
            console.error('Error fetching random email:', error);
          });
      }

  },
  methods:{
}
}).mount('#app')