
// create an instance of the Vue application 
const app = Vue.createApp({
    // data object to define the data to be rendered on the index.html 
    data() {
        return{
            firstName: '',
            lastName: '', 
            email: '', 
            gender: '', 
            picture: '',
        }
    },

/// method to get random users 
    methods:{
       // uses fetch to get api 
       async getUser(){
        const res = await fetch("https://randomuser.me/api/")
        // save data as array from json file fetched from api 
        const {results} = await res.json() 

        //console.log(results)

        /// access the array to get specific data
            this.firstName = results[0].name.first
            this.lastName= results[0].name.last
            this.email= results[0].email
            this.gender= results[0].gender
            this.picture= results[0].picture.large
        } 
    }
})

// connect the app to render in div with ID="#app"
app.mount('#app')