<template>
  <div class="candidate-grid">
    <Breadcrumb />
    <CandidateProfile/>
   <ContactDetails/>
   <SkillDetails/>
  
   <AssignedJob/>
   <JobDetails/>
    <Notes/>
  </div>
</template>

<script setup lang="ts">
import AssignedJob from "./AssignedJob.vue";
import Breadcrumb from "./breadcrumb.vue";
import CandidateProfile from "./CandidateProfile.vue";
import ContactDetails from "./ContactDetails.vue";
import JobDetails from "./jobDetails.vue";
import Notes from "./notes.vue";
import SkillDetails from "./skillDetails.vue";

</script>

<style scoped lang="scss">
.candidate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 56px 96px 56px 284px 56px 1fr;
  grid-template-areas:
    "breadcrumb breadcrumb notes"
    "profile profile notes"
    "contactdetails contactdetails notes"
    "skills skills notes"
    "assignedjobs assignedjobs notes"
    "jobdetails jobdetails notes";
   

     @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "breadcrumb notes"
      "profile notes"
      "contactdetails notes"
      "skills notes"
      "assignedjobs notes"
      "jobdetails notes";
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    grid-template-areas:
      "breadcrumb"
      "profile"
      "contactdetails"
      "skills"
      "assignedjobs"
      "jobdetails"
      "notes";
    & > * {
      min-width: 0;
    }
  }
  & > :nth-child(1) {
    grid-area: breadcrumb;
  }
  & > :nth-child(2) {
    grid-area: profile;
  }
  & > :nth-child(3) {
    grid-area: contactdetails;
  }
  & > :nth-child(4) {
    grid-area: skills;
  }
  & > :nth-child(5) {
    grid-area: assignedjobs;
  }
  & > :nth-child(6) {
    grid-area: jobdetails;
  }
  & > :nth-child(7) {
    grid-area: notes;
  }
}
</style>
