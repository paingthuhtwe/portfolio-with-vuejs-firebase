<template>
  <div class="message alert alert-success shadow" v-if="message">
    {{ message }}
  </div>
  <div class="message alert alert-danger" v-if="error">
    {{ error }}
  </div>
  <form class="p-3 mx-auto alert alert-success" @submit.prevent="add">
    <h1 class="mt-2 mb-3 text-center h3">Add Projects</h1>
    <!-- for name -->
    <label for="name">Project Name</label>
    <input
      type="text"
      id="name"
      v-model="name"
      class="form-control mb-3"
      required
    />
    <!-- for number -->
    <label for="number">Project ID</label>
    <input
      type="number"
      id="number"
      v-model="number"
      class="form-control mb-3"
      required
    />
    <!-- for direct or not for not found url -->
    <label for="direct">URL Direct</label>
    <select id="direct" v-model="direct" class="form-select mb-3">
      <option value="1">Direct to URL</option>
      <option value="0">Not Found URL</option>
    </select>
    <!-- for project_url -->
    <label for="project_url" v-if="direct === '1'">Project URL</label>
    <input
      v-if="direct === '1'"
      type="text"
      id="project_url"
      v-model="project_url"
      class="form-control mb-3"
    />
    <!-- for info -->
    <label for="info" v-if="direct === '0'">Info for Not Found URL</label>
    <input
      v-if="direct === '0'"
      type="text"
      id="info"
      v-model="info"
      class="form-control mb-3"
    />
    <!-- for file  -->
    <label for="file">Project Photo</label>
    <input
      type="file"
      id="file"
      ref="file"
      class="form-control mb-3"
      required
    />
    <!-- for action  -->
    <button class="btn btn-success px-4 py-1" type="submit">Add</button>
  </form>
</template>

<script>
import { onUpdated, ref } from "vue";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    let name = ref("");
    let project_url = ref("");
    let file = ref("");
    let message = ref("");
    let direct = ref("1");
    let info = ref("");
    let number = ref();

    let { error, addDoc } = useCollection("projects");

    let { addFile } = useStorage("projects");

    let add = async () => {
      let doc = {
        name: name.value,
        project_url: project_url.value,
        image: file.value.files[0].name,
        direct: direct.value,
        info: info.value,
        id: number.value,
      };
      let res = await addDoc(doc);
      await addFile(file.value.files[0]);
      res
        ? (message.value = "Successfully your process!")
        : (error.value = "Can't reach your process");

      if (res) {
        name.value = "";
        project_url.value = "";
        info.value = "";
      }
    };

    onUpdated(() => {
      setTimeout(() => {
        message.value = "";
        error.value = "";
      }, 2000);
    });

    return {
      name,
      project_url,
      file,
      direct,
      info,
      error,
      message,
      add,
      number,
    };
  },
};
</script>

<style>
</style>