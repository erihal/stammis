<template>
  <v-container>
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
                    color="accent"
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

  </v-container>
</template>

<script>
export default {
  name: "Home",
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
        {
          id: 89,
          text: "Om en familj på fyra personer stänger av kranen medan de borstar sina tänder sparar de tillsammans 100 liter vatten på en dag."
        },
        {
          id: 102,
          text: "För varje minut som kranen står och rinner går det åt 6 liter vatten."
        },
        {
          id: 31,
          text: "Ett fyllt badkar motsvarar 150 liter vatten. En dusch på 3 minuter motsvarar 36 liter."
        },
        {
          id: 19,
          text: "En toalett som smårinner kan betyda ett slöseri på 1900 liter per dygn."
        }
      
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
