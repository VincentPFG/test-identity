<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav="nav">
        <v-list-item
          v-for="{ route, name } in nav"
          :key="name"
          @click="
            $vuetify.goTo(route)
            drawer = defaultDrawer
          "
        >
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app="app" color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer />
      <Dark />
    </v-app-bar>
    <v-main>
      <v-container>
        <div class="d-flex flex-column justify-space-around">
          <v-alert type="warning">
            Ce site est en cours de développement.
          </v-alert>
          <slot />
        </div>
      </v-container>
    </v-main>
    <v-footer app="app" absolute="absolute" color="primary">
      <v-row justify="center">
        Développé par Vincent GIRAUD
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Dark from '../components/Dark.vue'

export default {
  components: {
    Dark,
  },
  data() {
    return {
      drawer: null,
      defaultDrawer: null,
      nav: [],
    }
  },
  mounted() {
    this.defaultDrawer = this.drawer
  },
}
</script>
