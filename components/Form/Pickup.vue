<template>
<v-card flat>
    <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
            <p>&nbsp;</p>
            <p class="subtitle-2 text-left">
                Choose location
            </p>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-btn value="Saburtalo">
                        Saburtalo
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-btn value="Vake">
                        Vake
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-btn value="DidiDigomi" color="primary" @click="alert = !alert" class="active">
                        Didi digomi
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-btn value="Gldani">
                        Gldani
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <td>
                                        <v-alert :value="alert" color="green" outlined icon="mdi-home" transition="scale-transition">
                                            7 Ioane Petritsi St, T'bilisi,
                                            +995 32 247 24 72,<br>
                                            Open 14:00 - 22:00
                                            <a href="https://www.google.com/maps/dir//41.793181,44.76095369999996" class="nav-link" target="_blank">Get direction</a>
                                        </v-alert>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex" cols="12" sm="12" md="8">
                    <v-select :items="items" label="Standard"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-textarea name="input-7-1" label="Lave a comment" value="" hint="Hint text" clearable></v-textarea>
                </v-col>
            </v-row>
        </v-form>
    </v-card-text>
</v-card>
</template>
