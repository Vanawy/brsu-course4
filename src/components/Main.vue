<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="(category, k) in categories" :key="k" link>
          <v-list-item-action>
            <v-icon>mdi-school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ category }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Задачи по информатике</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <div v-for="problem in problems" :key="problem.id">
            <v-col class="text-center">
              <Problem 
                :problem="problem"
              ></Problem>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
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
    problems: [],
    categories: [
      "6-й класс",
      "7-й класс",
      "8-й класс",
      "9-й класс",
      "10-й класс",
      "11-й класс",
    ],   
  }),
  created: function () {
      this.problems = Problems.data;
    }
};
</script>
