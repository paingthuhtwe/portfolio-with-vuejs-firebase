<template>
  <div class="message alert alert-success shadow" v-if="message">
    {{ message }}
  </div>
  <div class="message alert alert-danger" v-if="error">
    {{ error }}
  </div>
  <form class="p-3 mx-auto alert alert-info" @submit.prevent="add">
    <h1 class="mt-2 mb-3 text-center h3">Add Skills</h1>
    <!-- for skill name  -->
    <label for="name">Enter your skill name (eg. Vuejs, PHP)</label>
    <input
      type="text"
      id="name"
      v-model="name"
      class="form-control mb-3"
      required
    />
    <!-- for number -->
    <label for="number">Skill ID</label>
    <input
      type="number"
      id="number"
      v-model="number"
      class="form-control mb-3"
      required
    />
    <!-- for skill level  -->
    <label for="skill">Select your skill level</label>
    <select id="skill" v-model="skill" class="form-select mb-3">
      <option value="25">25%</option>
      <option value="50">50%</option>
      <option value="75">75%</option>
      <option value="100">100%</option>
    </select>
    <button class="btn btn-info px-4 py-1" type="submit">Add</button>
  </form>
</template>

<script>
import { onUpdated, ref } from "vue";
import useCollection from "@/composables/useCollection";

export default {
  setup() {
    let skill = ref(25);
    let name = ref("");
    let message = ref("");
    let number = ref();

    let { error, addDoc } = useCollection("skills");

    let add = async () => {
      let doc = { name: name.value, skill: skill.value, id: number.value };
      if (name.value) {
        await addDoc(doc);
        message.value = "Successfully your process";
        name.value = "";
        skill.value = 25;
      }
    };

    onUpdated(() => {
      setTimeout(() => {
        error.value = "";
        message.value = "";
      }, 2000);
    });

    return { skill, error, name, add, message, number };
  },
};
</script>

<style>
</style>