<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-orange" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Электронный учебник</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <div v-for="problem in problems" :key="problem.id">
            <v-col class="text-center">
              <Problem 
                :text="problem.text" 
                :problemClass="problem.class"
                :tags="problem.tags"
                :category="problem.category"
              ></Problem>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="deep-orange" app>
      <span class="white--text">vanawy &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Problem from "./Problem";
import Problems from "../assets/problems.json";
export default {
  components: {
    Problem
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    problems: []
  }),
  created: function () {
      this.problems = Problems.data;
    }
};
</script>
