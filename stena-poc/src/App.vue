<template>
  <v-app>
    <v-card mx-width="400" class="mx-auto">
      <v-system-bar color="#000000" dark>
        <v-spacer></v-spacer>

        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>{{ time }}</span>
      </v-system-bar>

      <v-app-bar color="primary" flat>
        
          <router-link to="/">
            <v-img max-width="64" contain src="https://www.stena.com/app/themes/stena-theme/resources/assets/images/logotype_flag.png"></v-img>
          </router-link>
   

        <v-toolbar-title>Stammis</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

      <router-view></router-view>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    time: function () {
      const d = new Date();
      const pad = (x) => (x.toString().length == 2 ? x : `0${x}`);
      return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    },
  },
  methods: {
    getTip: () => {
      const tips = [
        {
          id: 47,
          text: "När en apparat står i stand-by så drar den el. Dra ur kontakten för att spara!",
        },
        {
          id: 61,
          text: "Koka vatten? Använd vattenkokare som använder mindre energi än en kastrull!",
        },
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    },
  },

  data: () => ({
    datapoints: [675, 580, 590, 760, 540, 610, 476, 443],
    datapointsLabels: ["Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov"],
  }),
};
</script>
