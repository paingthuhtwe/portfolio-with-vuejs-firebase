<template>
  <div class="alert alert-primary mx-auto my-5" style="max-width: 540px">
    <form @submit.prevent="add">
      <div>
        <h1 class="mt-3 mb-4 text-center h5">
          Submit your email to view 'My Qualifications'.
        </h1>
      </div>
      <div class="input-group mx-auto mb-3" style="max-width: 400px">
        <input
          type="email"
          class="form-control"
          v-model="email"
          placeholder="Enter your email in here"
        />
        <input type="submit" value="" class="btn btn-primary" />
      </div>
    </form>
  </div>
</template>

<script>
import useAuth from "@/composables/useAuth";
import { ref } from "vue";

export default {
  setup() {
    let email = ref("");
    let { register, error, login } = useAuth();

    let add = () => {
      !error.value && register(email.value);
      error.value && login(email.value);
    };

    return { add, email };
  },
};
</script>

<style>
</style>