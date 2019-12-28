<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app temporary width="max">
      <v-list dense>
        <v-list-item link @click="drawer = false">
          <v-list-item-action>
            <v-icon>mdi-close</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Закрыть меню</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link @click="showFavorites()">
          <v-list-item-action>
            <v-icon>mdi-star-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Избранные задачи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(category, k) in categories" :key="k" link @click="selectCategory(category.id)"> <!-- :target="category.id" -->
          <v-list-item-action>
            <v-icon>mdi-{{ category.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Задачи по информатике | {{ titles[selected_category] }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="showFavorites">
          <v-icon v-if="this.selected_category == 'favs'">mdi-star</v-icon>
          <v-icon v-else>mdi-star-outline</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <div>
            <v-col class="text-center">
              Показано {{ selected_problems.length }} из {{ problems.length }} задач
            </v-col>
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <div v-for="problem in selected_problems" :key="problem.id">
            <v-col class="text-center">
              <Problem 
                :problem="problem"
              ></Problem>
            </v-col>
          </div>
          <p v-if="selected_problems.length == 0">В выбранном разделе нет задач</p>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <span>БрГУ им. А.С. Пушкиина | Сахарчук Илья, Козак Диана &copy; 2019</span>
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
    categories: [],   
    prev_category: "favs",
    selected_category: 1,
    titles: [],
  }),
  methods: {
    showFavorites: function() {
      if(this.isFavorites){
        this.selectCategory(this.prev_category);
      }else{
        this.selectCategory("favs");
      }
    },
    selectCategory(id) {
      this.prev_category = this.selected_category;
      this.selected_category = id;
      this.drawer = false;
      this.$cookie.set("currnet-category", id);
    },
    addProblemToFavorites(id) {
      let favs = this.getFavorites();
      if(favs.indexOf(id) == -1){
        favs.push(id);
      }
      this.setFavorites(favs);
    },
    deleteProblemFromFavorites(id) {
      let favs = this.getFavorites();
      favs.filter(fav => fav != id);
      this.setFavorites(favs);
    },
    setFavorites(ids) {
        this.$cookie.get('fav-problems', ids);
    },
    getFavorites() {
      let favs = this.$cookie.get('fav-problems');
      if(favs !== null){
        return favs;
      }
      return [];
    }
  },
  created: function () {
    // parse data from json
    // and setup categories
    this.categories = Problems.categories;
    for(let cat of this.categories){
      this.titles[cat.id] = cat.title;
    }
    this.titles["favs"] = "Избранные";
    this.problems = [];
    for(let problem of Problems.data){
      problem.category_title = this.titles[problem.category];
      this.problems.push(problem);
    }
    // get last used category from cookies
    this.selected_category = this.$cookie.get("currnet-category") ? this.$cookie.get("currnet-category") : 1;
  },
  computed: {
    selected_problems: function() {
      if(this.isFavorites){
        return this.favorites;
      }
      return this.problems.filter(problem => problem.category == this.selected_category);
    },
    favorites: function() {
      return this.getFavorites();
    },
    isFavorites: function() {
      return this.selected_category == "favs";
    }
  }
};
</script>
