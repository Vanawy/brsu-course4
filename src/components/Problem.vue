<template>
    <v-card>
      <v-card-title>Задача для {{ problemClass }}-го класса</v-card-title>
      <v-card-text>{{ preview }}</v-card-text>
      <v-card-actions>
        <v-btn
          text
        >
          Открыть
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
const PREVIEW_LENGTH = 128;
export default {
  name: "Problem",
  props: {
    text: String,
    problemClass: Number,
    category: String,
  },
  data: () => ({
    
  }),
  computed: {
    preview: function(){
      if(this.text.length > PREVIEW_LENGTH){
        return this.text.substring(0, PREVIEW_LENGTH - 3) + "...";
      }else{
        return this.text;
      }
    }
  }
};
</script>
