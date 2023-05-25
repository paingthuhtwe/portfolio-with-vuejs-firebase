<template>
  <div class="bg"></div>
  <nav class="navbar navbar-expand-lg bg-nav mx-md-5 py-4" id="home">
    <a class="navbar-brand text-white" href="#">Portfolio</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
    >
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item items-center px-md-3">
          <router-link
            class="nav-link text-light active bnav"
            aria-current="page"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="nav-item items-center px-md-3">
          <a class="nav-link text-light" href="#about">About</a>
        </li>
        <li class="nav-item items-center px-md-3">
          <a class="nav-link text-light" href="#project">Projects</a>
        </li>
        <li class="nav-item items-center px-md-3">
          <a class="nav-link text-light" href="#qualification"
            >Qualifications</a
          >
        </li>
        <li class="nav-item items-center">
          <a
            class="text-light btn btn-outline-danger px-md-3 contact"
            href="mailto:paingthuhtwe.official@gmail.com"
            >Send Mail</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <ContactPage></ContactPage>
</template>

<script>
import ContactPage from "./ContactPage.vue";
export default {
  components: { ContactPage },
};
</script>

<style>
</style>