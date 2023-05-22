<template>
  <ContactPage :user="userData"></ContactPage>
  <AboutPage :user="userData"></AboutPage>
  <SkillsPage :skills="userData.skills"></SkillsPage>
  <ProjectPage :projects="userData.projects"></ProjectPage>
  <QualificationPage
    :qualifications="userData.qualifications"
  ></QualificationPage>
</template>

<script>
import QualificationPage from "../components/QualificationPage";
import ProjectPage from "../components/ProjectPage";
import SkillsPage from "../components/SkillsPage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import getUserData from "../composables/getUserData";

export default {
  components: {
    QualificationPage,
    ProjectPage,
    SkillsPage,
    AboutPage,
    ContactPage,
  },
  setup() {
    const { userData } = getUserData();

    return { userData };
  },
};
</script>

<style>
</style>