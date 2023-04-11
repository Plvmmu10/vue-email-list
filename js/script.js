const { createApp } = Vue;

createApp({
    data() {
        return {
            basePath: 'https://flynn.boolean.careers/exercises/api/',
            rndEmail: [],
            rndUser: [],
            numEmail: 0,
            numUser: 0,
            emailLoading: false,
            userLoading: false
        }
    },
    methods: {
        getEmail() {
            this.rndEmail = [];
            this.emailLoading = true;

            for (i = 0; i < this.numEmail; i++) {
                axios.get(`${this.basePath}random/mail`).then((res) => {
                    this.rndEmail.push(res.data.response);
                    if (this.rndEmail.length === this.numEmail) {
                        this.emailLoading = false;
                    }
                });
            }
        },
        getUsername() {
            this.rndUser = [];
            this.userLoading = true;

            for (i = 0; i < this.numUser; i++) {
                axios.get(`${this.basePath}random/word`).then((res) => {
                    this.rndUser.push(res.data.response);
                    if (this.rndUser.length === this.numUser) {
                        this.userLoading = false;
                    }
                });
            }
        }
    }
}).mount('#app');