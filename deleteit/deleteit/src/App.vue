<template>
  <v-app>
    <v-toolbar app color="grey darken-1" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Yoda</span>
        &nbsp;
        <span class="font-weight-light">Grants Utils</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-xs-center">
        <v-dialog v-model="dialog" width="500" dark persistent>
          <template v-slot:activator="{ on }">
            <v-btn color="red lighten-2" dark v-on="on">Readme</v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title dark>Privacy Policy</v-card-title>

            <v-card-text>VueJS 2 is amazing... considering also the vuetify material components</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-btn
        color="primary"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloWorld />
    </v-content>
    <v-footer class="pa-3" height="auto" color="#757575">
      <v-card class="flex" flat color="#757575">
        <v-card-actions class="justify-center">
          <div>
            <p
              style="color:white"
            >Antonel-Ernest Pazargic&nbsp;&copy; {{ new Date().getFullYear() }}</p>
          </div>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
