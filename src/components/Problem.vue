<template>
  <v-card>
    <v-card-title>Задача для {{ problem.class }}-го класса</v-card-title>
    <v-card-text>{{ preview }}</v-card-text>
    <v-card-actions>
      <TaskModal :problem="problem"></TaskModal>
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
    problem: Object
  },
  data: () => ({}),
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

  }
};
</script>
