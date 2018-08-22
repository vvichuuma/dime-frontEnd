<template>
  <div class="spendy">
    <h1>{{ message }}</h1>

   <form>
     <div id='ad'>
     <label id='l'>Money_in_Pocket: </label>
     <input type = 'text' v-model= 'pocket_money' id='t'>
     </div>
      <div id='ad'>
     <label id='l'>Money_to_save: </label>
     <input type = 'text' v-model='saving' id='t'>
     </div>
      <div id='ad'>
     <label id='l'>Weekly_expenses: </label>
     <input type = 'text' v-model='weekly_expenses' id='t'>
     </div>

     <div id='ad'>  
     <label id='l'>Start_Date:</label>
     <input type="date" v-model='start_date' id='t'>
     </div>

     <div id='ad'>  
     <label id='l'>End_Date:</label>
     <input type="date" v-model='end_date' id='t'>
     </div>


    <!-- <router-link to="">
 -->     <div id='ad'>
       <button type="button" v-on:click="addspend()" >Calculate</button>
     </div>
  <!--  </router-link>
 -->
     <div>
        <h4>{{ Spend }}</h4>

     </div>



   </form>

  </div>
</template>

<style>

.spendy{

   text-align: center;
   position:relative;
   top:50px;

} 

body {
    background-color: lightgrey;
}

#ad{

  margin-bottom: 25px;
}

#t{

  border-radius: 5px;
}

#l{

   position:relative;
   right:30px;

}



</style>

<script>
  var axios = require('axios');
  console.log(axios);
  
export default {
    data: function() {
      return {
        message: "Spend_wisely in a Day",
        pocket_money: "",
        saving: "",
        weekly_expenses: "",
        start_date: "",
        end_date: "",
        Spend: ""
         
      };
    },
    created: function() {},
    methods: { 

      addspend: function() {

        var datediff = function(date1, date2) {
          var dt1 = new Date(date1);
          var dt2 = new Date(date2);
          return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
        };

        var final = (datediff(this.start_date, this.end_date));
        console.log('The number of days ' + final);

        if (final >= 7) {

          var params = {
            pocket_money: this.pocket_money,
            saving: this.saving,
            weekly_expenses: this.weekly_expenses,
            start_date: this.start_date,
            end_date: this.end_date
          };

          axios.post("http://localhost:3000/api/spends",params).then(function(response) {

            console.table(response.data);

          }.bind(this));

       
          var money_s = this.pocket_money - this.saving;
          console.log(money_s);

          var expp = parseFloat((this.weekly_expenses * final) / 7);
          console.log(expp);

          var bay = money_s - expp;

          var ba = bay / final;

          console.log('If you actually spend this amount you ill be safe');
          console.log(ba);

          var buu = Math.round(ba);

          var bunny = "if you actually spend within " + buu + " dollars for a day you will save  " + this.saving + " dollars on the end date" 

          this.Spend = bunny;


        } else {


          alert('The End date cannot be smaller than the start date and there should be a week gap');

        }


      }

   

    },
    
    computer: function() {

        
       alert('Vishnu is a genius');

    },



    computed: {}
};
</script>
