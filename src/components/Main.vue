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
            <v-icon v-if="this.selected_category == 'favs'">mdi-star</v-icon>
            <v-icon v-else>mdi-star-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Избранные задачи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item 
            v-for="(category, k) in categories" 
            :key="k" 
            link 
            @click="selectCategory(category.id)"
          >
            <v-list-item-action>
              <v-icon>mdi-{{ category.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ category.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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

    <v-content class="pa-0">
      <v-container fluid>
        <v-row>
          <v-spacer></v-spacer>
          <div>
            <v-col class="text-center">
              Показано {{ selected_problems.length }} из {{ problems.length }} задач
              <v-progress-linear :value="selected_problems.length / problems.length * 100"></v-progress-linear>
            </v-col>
          </div>
          <v-spacer class="hidden-xs-only"></v-spacer>
        </v-row>
        <v-row align="center" justify="center">
          <div v-for="problem in selected_problems" :key="problem.id">
            <v-col class="text-center">
              <Problem 
                :problem="problem"
                :isFavorite="problem.isFavorite"
                @fav="toggleFav"
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
      this.problems.find(p => p.id == id).isFavorite = true;
      let favs = this.getFavorites();
      if(favs.indexOf(id) == -1){
        favs.push(id);
      }
      this.setFavorites(favs);
    },
    deleteProblemFromFavorites(id) {
      this.problems.find(p => p.id == id).isFavorite = false;
      let favs = this.getFavorites();
      favs = favs.filter(fav => fav != id);
      this.setFavorites(favs);
    },
    toggleFav(id) {
      if(this.isInFavorites(id)){
        this.deleteProblemFromFavorites(id);
      }else{
        this.addProblemToFavorites(id);
      }
    },
    setFavorites(ids) {
        this.$cookie.set('fav-problems', JSON.stringify(ids));
    },
    getFavorites() {
      let favs = JSON.parse(this.$cookie.get('fav-problems'));
      if(favs !== null){
        return favs;
      }
      return [];
    },
    favorites: function() {
      let favs = [];
      let ids = this.getFavorites();
      for(let id of ids){
        favs.push(this.problems.find(problem => problem.id == id));
      }
      return favs;
    },
    isInFavorites: function(id) {
      return this.getFavorites().indexOf(id) !== -1;
    }
  },
  created: function () {
    // parse data from json
    // and setup categories
    this.categories = Problems.categories;
    for(let cat of this.categories){
      this.titles[cat.id] = cat.title;
    }
    const favs = this.getFavorites();
    this.titles["favs"] = "Избранные";
    this.problems = [];
    for(let problem of Problems.data){
      problem.category_title = this.titles[problem.category];
      problem.isFavorite = favs.indexOf(problem.id) !== -1;
      this.problems.push(problem);
    }
    // get last used category from cookies
    this.selected_category = this.$cookie.get("currnet-category") ? this.$cookie.get("currnet-category") : 1;
  },
  computed: {
    selected_problems: function() {
      if(this.isFavorites){
        return this.favorites();
      }
      return this.problems.filter(problem => problem.category == this.selected_category);
    },
    isFavorites: function() {
      return this.selected_category == "favs";
    }
  }
};
</script>
