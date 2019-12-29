<template>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">Условие</v-btn>
      </template>
      <v-toolbar dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>#{{ problem.id }} | {{ problem.category_title }}</v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-container>
          <p>{{ problem.text }}</p>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('fav-modal')">
            <v-icon v-if="problem.isFavorite">mdi-star</v-icon>
            <v-icon v-else>mdi-star-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  props: {
    problem: Object
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>