<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition">
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
      </v-card>
    </v-dialog>
  </v-row>
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