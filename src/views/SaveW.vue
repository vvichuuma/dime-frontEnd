<template>
  <div class="spendy">
    <h1>{{ message }}</h1>

   <form>
     <div id='ad'>
     <label id='l'>Money_in_Pocket: </label>
     <input type = 'text' v-model= 'pocket_money' id='t'>
     </div>
      <div id='ad'>
     <label id='l'>Property_to_Buy: </label>
     <input type = 'text' v-model='property' id='t'>
     </div>

        <div id='ad'>
     <label id='l'>Weekly_Pay: </label>
     <input type = 'text' v-model='pay_check' id='t'>
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
        <h4>{{ Save }}</h4>

     </div>

        <div>
        <h4>{{ Save_1 }}</h4>

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
        message: "Save Wisely in a Day",
        pocket_money: "",
        property: "",
        pay_check: "",
        weekly_expenses: "",
        start_date: "",
        end_date: "",
        Save: "",
        Save_1:""
         
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
            property_worth: this.property,
            salary: this.pay_check,
            weekly_expenses: this.weekly_expenses,
            start_date: this.start_date,
            end_date: this.end_date
          };

          axios.post("http://localhost:3000/api/saves",params).then(function(response) {

            console.table(response.data);

          }.bind(this));

         
         var money_to_make = this.property - this.pocket_money;

         var salsa = this.pay_check;

         var expp = this.weekly_expenses;

         var salaryy = salsa - expp; 

         var day_f = (money_to_make*7) / salaryy ;

         var day_p = (salaryy/7).toFixed(3);

         var ans = "You Will achieve your target within " + day_f + " days if you actually save " + day_p + " in a day"

         this.Save = ans;

         var fin = "";

          if (this.pocket_money <= 0) {

           fin = ((this.property * 1) / final).toFixed(3);

          } else {

            fin = ((money_to_make * 1)/final).toFixed(3); 

          }


         var f_ans = "You need to save " + fin + " dollars in a day if you need to buy the property within " + final + " days" 

         this.Save_1 = f_ans;




       } else {

         alert("The difference between start date and end date should be 7 ");

       }

     },

   

      

    },
    
   
    computed: {}
};
</script>
