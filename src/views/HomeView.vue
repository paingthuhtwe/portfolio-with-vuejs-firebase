<template>
  <NavBar></NavBar>
  <div class="container">
    <AboutPage :user="userData"></AboutPage>
    <SkillsPage></SkillsPage>
    <ProjectPage></ProjectPage>
    <QualificationPage
      :qualifications="userData.qualifications"
    ></QualificationPage>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import QualificationPage from "../components/QualificationPage";
import ProjectPage from "../components/ProjectPage";
import SkillsPage from "../components/SkillsPage";
import AboutPage from "../components/AboutPage";
import getUserData from "../composables/getUserData";

export default {
  components: {
    NavBar,
    QualificationPage,
    ProjectPage,
    SkillsPage,
    AboutPage,
  },
  setup() {
    const { userData } = getUserData();

    return { userData };
  },
};
</script>

<style>
</style>