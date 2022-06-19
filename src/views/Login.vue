<template>
     <div class="container mt-5">
         <div class="row justify-content-center">
             <div class="col-md-8">
                 <div class="card">
                    
                     <div class="card-header">Login</div>
                     <div class="alert alert-danger" v-if="message">{{message}}</div>
                     <div class="card-body">
                         <form @submit.prevent="login" method="POST" >
     
                             <div class="form-group row">
                                 <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                 <div class="col-md-6">
                                     <input id="email" type="email" v-model="email" class="form-control" name="email" required autocomplete="email" autofocus>    
                                 </div>
                             </div>

                             <div class="form-group row mt-5">
                                 <label for="password" class="col-md-4 col-form-label text-md-right">password</label>

                                 <div class="col-md-6">
                                     <input id="password" type="password" v-model="password" class="form-control" name="password" required autocomplete="current-password">
                                 </div>
                             </div>

                         
                             <div class="form-group row mt-5">
                                 <div class="col-md-8 offset-md-4">
                                     <button type="submit" class="btn btn-primary">
                                         Login
                                     </button>     
                                 </div>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
     name : 'Login.vue',
     data(){
         return{
             email: "swan@gmail.com",
            password : "123",
            message:"", 
            
         }
     },
     methods:{
         login(){
             if(this.email == "swan@gmail.com" &&  this.password == "123"){
                 localStorage.setItem('auth',this.email);
                  this.$router.push('/profile'); 
               }else{
                   this.message  = "Email and Password invalid"
               }
         }
      
     }
}
</script>

<style>

</style>