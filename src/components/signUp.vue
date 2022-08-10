<template>
<v-container>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
    <form @submit.prevent="onSignUp">
      <v-card ref="form">
        <v-card-title class="display-2 grey--text lighten--5">Create an Account</v-card-title>
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            label="Email Address *"
            placeholder="your@email.com"
            required
          ></v-text-field>
          <v-text-field
             v-model="password"
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show4 ? 'text' : 'password'"
            name="input-10-2"
            label="Password *"
            error
            @click:append="show4 = !show4"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            :append-icon="show5 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[matchPassword]"
            :type="show4 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirm Password *"
            error
            @click:append="show5 = !show5"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            type="submit"
            text
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show4: false,
      show5: false,
      email : null,
      password: null,
      confirmPassword: null,
    }),

    computed: {
      matchPassword(){
        if(this.password)
        {
          if(this.password === this.confirmPassword)
          {
            return "";
          }
          else{
            return "The password you entered doesn't match."
          }
        }
        return "";
      }
    },

    watch: {
    },

    methods: {
      onSignUp(){
        const payload = {
          email : this.email,
          password: this.password
        }
        this.$store.dispatch('createUser', payload);
        this.$router.push('/');
      }
      // addressCheck () {
      //   this.errorMessages = this.address && !this.name
      //     ? `Hey! I'm required`
      //     : ''

      //   return true
      // },
      // resetForm () {
      //   this.errorMessages = []
      //   this.formHasErrors = false

      //   Object.keys(this.form).forEach(f => {
      //     this.$refs[f].reset()
      //   })
      // },
      // submit () {
      //   this.formHasErrors = false

      //   Object.keys(this.form).forEach(f => {
      //     if (!this.form[f]) this.formHasErrors = true

      //     this.$refs[f].validate(true)
      //   })
      // },
    },
  }
</script>

<style>

</style>