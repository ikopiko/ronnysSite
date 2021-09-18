<template>
<div>
    <div class="page-title-area">
        <div class="container">
            <ul>
                <li>
                    <nuxt-link to="/">Signup</nuxt-link>
                </li>
                <li>404 Not Found</li>
            </ul>
        </div>
    </div>

    <section class="signup-area ptb-60">
        <div class="container">
            <div class="signup-content">
                <div class="section-title">
                    <h2><span class="dot"></span> Create an Account</h2>
                </div>

                <form class="signup-form">
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-text-field :rules="nameRules" label="Full Name *" clearable required></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-text-field :counter="7" :rules="phoneRules" label="Phone Number *" clearable></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-text-field :rules="emailRules" label="E-mail" clearable required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-text-field autocomplete="current-password" :value="userPassword" label="Enter password" hint="" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'" @click:append="() => (value = !value)" :type="value ? 'password' : 'text'" :rules="[rules.password]" @input="_=>userPassword=_"></v-text-field>
                        </v-col>
                    </v-row>
                   
                    <button type="submit" class="btn btn-primary">Signup</button>

                    <nuxt-link to="/" class="return-store">or Return to Store</nuxt-link>
                </form>
            </div>
        </div>

    </section>
</div>
</template>


<script>
export default {
    data: () => ({
        userPassword: "",
        valid: true,
        value: true,
        rules: {
            required: value => !!value || "Required.",
            password: value => {
                const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                return (
                    pattern.test(value) ||
                    "Min. 8 characters with at least one capital letter, a number and a special character."
                );
            }
        },
        name: '',
            nameRules: [
                v => !!v || 'Full Name is required',
            ],
            phone: '',
            phoneRules: [
                v => !!v || 'Phone is required',
                v => (v && v.length >= 9) || 'Phone must be more than 9 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

    })
};
</script>
