<template>
  <div class="message alert alert-success shadow" v-if="message">
    {{ message }}
  </div>
  <div class="message alert alert-danger" v-if="error">
    {{ error }}
  </div>
  <form class="p-3 mx-auto alert alert-primary" @submit.prevent="add">
    <h1 class="mt-2 mb-3 text-center h3">Add Qualifications</h1>
    <!-- for name -->
    <label for="name">Qualification Name</label>
    <input
      type="text"
      id="name"
      v-model="name"
      class="form-control mb-3"
      required
    />
    <!-- for file  -->
    <label for="file">Qualification Photo</label>
    <input
      type="file"
      id="file"
      ref="file"
      class="form-control mb-3"
      required
    />
    <!-- action button  -->
    <button class="btn btn-primary px-4 py-1" type="submit">Add</button>
  </form>
</template>

<script>
import { onUpdated, ref } from "vue";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    let name = ref("");
    let file = ref("");
    let message = ref("");

    let { error, addDoc } = useCollection("qualifications");

    let { addFile } = useStorage("qualifications");

    let add = () => {
      let doc = {
        name: name.value,
        image: file.value.files[0].name,
      };
      if (name.value && file.value) {
        let res = addDoc(doc);
        let img = addFile(file.value.files[0].name);
        message.value = "Successfully your process!";
        name.value = "";
      }
    };

    onUpdated(() => {
      setTimeout(() => {
        message.value = "";
      }, 1000);
    });
    return { name, file, error, add, message };
  },
};
</script>

<style>
.message {
  position: absolute !important;
  top: 10px !important;
  right: 10px !important;
}
</style>