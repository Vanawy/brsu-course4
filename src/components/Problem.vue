<template>
  <v-card fluid>
    <v-card-title>#{{ problem.id }} Задача на тему "{{ problem.category_title }}"</v-card-title>
    <v-card-text>{{ preview }}</v-card-text>
    <v-card-actions>
      <TaskModal :problem="problem"></TaskModal>
      <v-btn @click="toggleFavorites">
        <v-icon v-if="problem.isFavorite">mdi-star</v-icon>
        <v-icon v-else>mdi-star-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import TaskModal from "./TaskModal";
const PREVIEW_LENGTH = 128;
export default {
  name: "Problem",
  components: {
    TaskModal
  },
  props: {
    problem: Object,
  },
  computed: {
    preview: function() {
      if (this.problem.text.length > PREVIEW_LENGTH) {
        return this.problem.text.substring(0, PREVIEW_LENGTH - 3) + "...";
      } else {
        return this.problem.text;
      }
    }
  },
  methods: {
    toggleFavorites: function() {
      this.$emit("fav", this.problem.id);
    }
  }
};
</script>
