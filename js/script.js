const { createApp } = Vue;

createApp({
    data() {
        return {
            basePath: 'https://flynn.boolean.careers/exercises/api/',
            rndEmail: [],
            rndUser: [],
            numItems: 0
        }
    },
    methods: {
        getEmail() {
            this.rndEmail = [];

            for (i = 0; i < this.numItems; i++) {
                axios.get(`${this.basePath}random/mail`).then((res) => {
                    this.rndEmail.push(res.data.response);
                });
            }

        },
        getUsername() {
            this.rndUser = [];

            for (i = 0; i < this.numItems; i++) {
                axios.get(`${this.basePath}random/word`).then((res) => {
                    this.rndUser.push(res.data.response);
                });
            }
        }
    }
}).mount('#app');