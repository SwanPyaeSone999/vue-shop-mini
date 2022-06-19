<template>
        <div class="container mt-5">
                <div v-if="loading" class="spinner-border text-dark" role="status">
                  <span class="sr-only"></span>
                </div>
                <div v-else class="row">
                    <div class="col-md-4 mt-3" v-for="product in products" :key="product.id">
                        <div class="card shadow p-4 rounded">
                            <img :src="product.image" alt="" class="img-fluid w-70"  height="400px">
                            <p class="text-center">{{product.title}}</p>
                            <h4 class="text-center">{{product.price}}</h4>
                            <router-link class="btn btn-outline-dark" :to="`product/${product.id}`">More Details</router-link>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
import axios from 'axios';


export default {
    name : 'Product.vue',
    data(){
        return{
            loading: false,
            products:[],
        }
    },
    created(){
        this.loading = true;
         axios
          .get('https://fakestoreapi.com/products/')
          .then((response) =>{

              this.products = response.data;
              this.loading = false;
          }).catch(e =>{
              this.loading = false;
          })
    }
}
</script>

<style>

</style>