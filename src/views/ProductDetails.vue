<template>
        <div class="container mt-5">
           <div v-if="loading" style="height: 400px;" class="d-flex justify-content-center  align-items-center">
             <div class="spinner-border text-dark" role="status">
              <span class="sr-only"></span>
            </div>
           </div>
            <div v-else class="row">
                <div class="col-md-4">
                    <img :src="product.image" alt="" class="img-fluid w-100">
                </div>
                <div class="col-md-8 p-5">
                    <h1 class="mt-5">{{product.title}}</h1>
                    <h5 class="mt-5">Price ${{product.price}}</h5>
                    <h6 class="mt-5">Description</h6>
                    <p>{{product.description}}</p>
                    <div class="d-flex justify-content-between">
                        <router-link to="/product" href="" class="btn btn-dark">Back</router-link>
                        <button  href="" class="btn btn-warning ">+ Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name : 'ProductDetails.vue',
    data(){
        return{
            loading:false,
            product :{},
        }
    },
    created(){
        this.loading = true;
         axios
          .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
          .then((response) =>{

              this.product = response.data;
              this.loading = false;
          }).catch(e =>{
              this.loading = false;
          })
    }
}
</script>

<style>

</style>