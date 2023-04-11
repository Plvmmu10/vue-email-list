const { createApp } = Vue;

createApp({
    data() {
        return {
            basePath: 'https://flynn.boolean.careers/exercises/api/',
            rndEmail: [],
        }
    },
    methods: {
        getEmail() {
            this.rndEmail = [];

            for (i = 0; i < 10; i++) {
                axios.get(`${this.basePath}random/mail`).then((res) => {
                    this.rndEmail.push(res.data.response);
                });
            }

        },

    }
}).mount('#app');