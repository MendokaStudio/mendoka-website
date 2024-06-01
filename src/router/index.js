import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import GameCollectionContent from "../components/GameCollectionContent.vue";
import AboutContent from "../components/AboutContent.vue";
import ContactContent from "../components/ContactContent.vue";
import EventsContent from "../components/EventsContent.vue";

import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import TermsOfServiceView from "@/views/TermsOfServiceView.vue";
import SpireHorizonEula from "@/views/EULA/SpireHorizonEula.vue";
import SpireHorizonOnlineEula from "@/views/EULA/SpireHorizonOnlineEula.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: HomeView,
      children: [
        {
          path: "",
          name: "Events",
          component: EventsContent,
        },
        {
          path: "games",
          name: "Games",
          component: GameCollectionContent,
        },
        {
          path: "about",
          name: "About",
          component: AboutContent,
        },
        {
          path: "contact",
          name: "Contact",
          component: ContactContent,
        },
      ],
    },
    {
      path: "/privacy-policy",
      component: PrivacyPolicyView,
    },
    {
      path: "/terms-of-service",
      component: TermsOfServiceView,
    },
    {
      path: "/spire-horizon-eula",
      component: SpireHorizonEula,
    },
    {
      path: "/spire-horizon-online-eula",
      component: SpireHorizonOnlineEula,
    },
  ],
});

export default router;
