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
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Stena Stammis</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5"
                >Bra jobbat! <v-spacer></v-spacer>
                <v-icon color="secondary">mdi-star</v-icon></v-card-title
              >

              <v-card class="mx-4">
                <v-progress-linear
                  color="secondary"
                  height="10"
                  value="70"
                  striped
                ></v-progress-linear>
              </v-card>
              <v-card-subtitle
                >Du har samlat 15% fler poäng än förra månaden!
              </v-card-subtitle>

              <v-card-actions>
                <v-btn text
                  >Använd poäng <v-icon>mdi-chevron-right</v-icon></v-btn
                ><v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto text-center" color="accent" dark>
              <v-card-title class="text-h5 font-weight-thin"
                >Elförbrukning<v-spacer></v-spacer>
                <v-icon>mdi-lightning-bolt-outline</v-icon></v-card-title
              >

              <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                  <v-sparkline
                    :value="datapoints"
                    :labels="datapointsLabels"
                    color="rgba(255, 255, 255, .7)"
                    height="130"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                  >
                  </v-sparkline>
                </v-sheet>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn text>Jämför<v-icon>mdi-chevron-right</v-icon></v-btn
                ><v-spacer></v-spacer><v-icon>mdi-share-variant-outline</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5 font-weight-thin"
                >Tips #{{ getTip().id }}<v-spacer></v-spacer>
                <v-icon>mdi-lightbulb-on-outline </v-icon></v-card-title
              >

              <v-card-subtitle>{{ getTip().text }}</v-card-subtitle>

              <v-card-actions>
                <v-btn text>Fler tips <v-icon>mdi-chevron-right</v-icon></v-btn
                ><v-spacer></v-spacer><v-icon>mdi-share-variant-outline</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card>
              <v-card-title class="text-h5 font-weight-thin"
                >Mitt kvarter<v-spacer></v-spacer>
                <v-icon>mdi-home-group</v-icon></v-card-title
              >

              <v-card-subtitle
                >Du sparar i genomsnitt 9% mer el än grannar i
                kvarteret!</v-card-subtitle
              >

              <v-card-actions>
                <v-btn text>Se mer<v-icon>mdi-chevron-right</v-icon></v-btn
                ><v-spacer></v-spacer><v-icon>mdi-share-variant-outline</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
