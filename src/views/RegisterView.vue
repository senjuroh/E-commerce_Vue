<template>
  <template-view>
    <!-- navbar -->
    <nav-mini />

    <!-- Register -->
    <section class="vh-100 bg-image">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form @submit.prevent="register()">
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        v-model="form.name"
                      />
                      <label class="form-label" for="form3Example1cg"
                        >Your Name</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        v-model="form.email"
                      />
                      <label class="form-label" for="form3Example3cg"
                        >Your Email</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        v-model="form.password"
                      />
                      <label class="form-label" for="form3Example4cg"
                        >Password</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                        v-model="form.password"
                      />
                      <label class="form-label" for="form3Example4cdg"
                        >Repeat your password</label
                      >
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <div>
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                      </div>

                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in
                        <a href="#!" class="text-body">
                          <u>Terms of service</u></a
                        >
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button type="button" class="btn btn-block btn-lg button">
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a
                        href="#!"
                        class="fw-bold text-body"
                        @click.prevent="$router.push({ name: 'login' })"
                        ><u>Login here</u></a
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template-view>
</template>

<script>
import TemplateView from "./TemplateView.vue";
import NavMini from "../components/NavMini.vue";
// import axios from "axios";
export default {
  name: "RegisterView",
  components: {
    TemplateView,
    NavMini,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  // methods: {
  //   async register() {
  //     console.warn(this.form)
  //     try {
  //       let response = await axios.post("  http://localhost:3000")
  //     }
  //   },
  // },
};
</script>
<style>
</style>
