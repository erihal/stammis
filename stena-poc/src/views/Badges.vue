<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Achievment</div>
              <v-list-item-title class="text-h5 mb-1">
                3 months in a row
              </v-list-item-title>
              <v-list-item-subtitle
                >Keep your consumption to the recommended value for three months
                in a row.</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img src="../assets/badge_1.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn color="success" dark outlined>
              Claim points<v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Second card--->
    <v-row dense>
      <v-col cols="12">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Achievment</div>
              <v-list-item-title class="text-h5 mb-1">
                Trend setter
              </v-list-item-title>
              <v-list-item-subtitle
                >Set the bar low for the rest of the
                community.</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img src="../assets/badge_2.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              text
              @click.stop="dialog = true"
            >
              Start challenge<v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
          <!-- Dialog -->
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="text-h5"> - Trend setter - </v-card-title>

              <v-card-text>
                To become a trend setter... Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Start
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>

    <!-- Third card--->
    <v-row dense>
      <v-col cols="12">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Achievment</div>
              <v-list-item-title class="text-h5 mb-1">
                Big saver
              </v-list-item-title>
              <v-list-item-subtitle
                >Reduce your consumption to the lowest recommended value for one
                whole month.
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img src="../assets/badge_3.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>
              Start challenge<v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Badges",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
.challenge {
  background-color: rgb(177, 228, 198);
}
.claim {
  background-color: rgba(0, 0, 255, 0.493);
}
</style>
