<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="800px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        color="primary"
        outlined
        width="100%"
        height="220px"
        text
      >
        <v-icon large>mdi-plus</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-form v-model="valid" ref="form" @submit.prevent="addEmployee">
          <v-toolbar color="primary" dark
            >Create new employee
            <v-spacer> </v-spacer>
            <v-btn icon @click="dialog.value = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-toolbar>
          <v-card-text>
            <v-row class="mt-12">
              <v-col cols="12" md="6" sm="12" xs="12">
                <v-dialog v-model="dialog2" max-width="500px">
                  <v-card>
                    <v-form
                      v-model="valid2"
                      @submit.prevent="(dialog2 = false), (img = enteredUrl)"
                    >
                      <v-card-title class="primary white--text">
                        Add image url:
                      </v-card-title>
                      <v-card-text class="mt-8">
                        <v-text-field
                          :rules="urlRules"
                          v-model="enteredUrl"
                          outlined
                          label="url"
                        ></v-text-field>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          @click="dialog2 = false"
                          outlined
                          color="primary"
                          text
                          >No image</v-btn
                        >
                        <v-btn
                          :disabled="!valid2"
                          outlined
                          color="primary"
                          text
                          type="submit"
                        >
                          Add image
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
                <v-row justify="center" v-if="img">
                  <v-col cols="12" md="8" sm="4">
                    <v-avatar size="250px">
                      <v-img :src="img"></v-img>
                    </v-avatar>
                  </v-col>
                </v-row>

                <v-btn
                  v-else
                  @click="dialog2 = true"
                  width="100%"
                  height="89%"
                  min-height="150px"
                  outlined
                >
                  <v-icon large> mdi-plus </v-icon>
                </v-btn>
              </v-col>
              <v-col md="6" sm="12" xs="12">
                <v-text-field
                  v-model="name"
                  label="Full name"
                  outlined
                  :rules="nameRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="position"
                  label="Position"
                  outlined
                  :rules="nameRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                  required
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn @click="close" outlined text>Reset</v-btn>
            <v-btn :disabled="!valid" outlined text type="submit"
              >Add new employee</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      valid2: false,
      dialog: false,
      dialog2: false,
      img: null,
      enteredUrl: "",
      name: "",
      position: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
      ],
      urlRules: [
        (v) => !!v || "Required.",
        (v) =>
          /^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?/.test(v) ||
          "URL is not valid",
      ],
    };
  },
  methods: {
    addEmployee() {
      if (this.enteredUrl === "") {
        this.img = "https://pic.onlinewebfonts.com/svg/img_76927.png";
      }
      const obj = {
        id: new Date().getTime(),
        name: this.name,
        position: this.position,
        email: this.email,
        img: this.img,
      };
      this.$emit("employee-data", obj);
      this.dialog = false;
      this.name = "";
      (this.email = ""), (this.position = ""), (this.img = null);
      console.log(obj);
    },
    close() {
      this.name = "";
      this.position = "";
      this.email = "";
      this.img = null;
    },
  },
};
</script>

<style scoped>
.theme--light.v-btn.v-btn--outlined.v-btn--text {
  border-color: #1e1e2d;
}
</style>
