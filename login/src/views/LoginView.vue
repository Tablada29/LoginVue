<template>
    <v-container>
        <v-row align-content="center" justify="center">


            <v-col cols="7">
                <v-text-field
              v-model="correo"
              label="Ingresa tu correo"
            ></v-text-field>
            </v-col>

            <v-col cols="7">
                <v-text-field
              v-model="password"
              label="Ingresa tu password"
              type="password"
            ></v-text-field>
            </v-col>

            <v-col cols="7">
                <v-btn v-on:click="inciarSesion"
                color="primary">
              Iniciar Sesión 
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default{
    name: 'EnviaParametros',
    data() {
        return {
            correo: '',
            password: '',
            us: []
        }
    },
    methods: {
         inciarSesion: async function (event){

            this.$swal({
                title: 'Inciando sesión...',
                    timer: 9000,
                    timerProgressBar: true,
                    confirmButtonText: '...',  
                    html:
                    'Espere por favor en lo que validamos sus datos</em>',
                    showCancelButton: false, 
                    showConfirmButton: false 
                    
            },
            
    axios.post("http://localhost:3000/login", 
                {
                    "correo": this.correo,
                    "passowrd": this.password,
                }
                ).then((result) => {
                    this.us = result.data.USUARIOS;
                    this.$swal({
                        icon: 'success',
                        title: 'Bienvenido '+this.correo,
                        html:
                        'Te recordamos que tu sesión dura 2 horas </em>',
                        confirmButtonText: 'Entendido',  
                    })
                    //axios.defaults.hedears.common['Authorization'] = 'Bearer'+result.data;
                    this.$router.push({ name: 'home', params: { us: this.us }})
                }).catch(error => {
                console.log(error);
                    this.$swal({
                        icon: 'error',
                        title: 'Datos no encontrados',
                        text: 'Por favor verifica tu usuario y/o contraseña',
                    });
                })
                
                )
     

         }
    },
}
</script>