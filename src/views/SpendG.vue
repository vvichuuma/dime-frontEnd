<template>
  <div class="home">
    <h1>{{ message }}</h1>

  </div>
</template>

<style>
</style>

<script>
  import { Bar, Line } from 'vue-chartjs' ;



export default {
   extends: Bar,


    data: function() {
      return {
        message: "This is the Graph_Spend Page",
  

      };
    },
    created: function() {

  



    },
    mounted:function() {


    },


 
    methods: {

    





    },
    computed: {}
};
</script>