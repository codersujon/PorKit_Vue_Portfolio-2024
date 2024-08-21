<script setup>

</script>

<template>
    <section class="section contact-me has-style-01">
      <div class="shape">
        <img class="shape-03" src="@/assets/images/shape/shape-03.png" alt="shape">
        <img class="shape-07" src="@/assets/images/shape/shape-05.png" alt="shape">
        <img class="shape-09" src="@/assets/images/shape/shape-03.png" alt="shape">
      </div>
      <div class="container">
        <div class="row align-items-center justify-content-between">

          <div class="col-lg-6">
            <div class="heading-title">
              <h3>contact Me</h3>
              <h2>Let's Work together</h2>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <ul class="info">
              <li><i class="fi fi-rr-marker"></i>32/2, Khan Mansion, Tony Tower, Jatrabari, Shahid Faroque Road</li>
              <li><i class="fi fi-rr-envelope"></i><a href="mailto:admin@example.com">info@codersujon.com</a></li>
              <li><i class="fi fi-rr-call-incoming"></i><a href="tel:201000077700">+880 1680-366446</a></li>
            </ul>
            <ul class="social d-flex">
              <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-behance"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>

          <div class="col-lg-6">
            <div class="contact_form">

              <div class="row">
                <div class="col-lg-12">
                  <form class="contact__form" method="post" action="mail.php">
                    <!-- form message -->
                    <div class="row">
                      <div class="col-12">
                        <div class="alert alert-success contact__msg" style="display: none" role="alert">
                          Your message was sent successfully.
                        </div>
                      </div>
                    </div>
                    <!-- end message -->
                    <!-- form element -->
                    <div class="row">
                      <div class="col-12 form-group">
                        <i class="fi fi-rr-user"></i>
                        <input name="name" type="text" class="form-control" placeholder="Name" required>
                      </div>

                      <div class="col-12 form-group">
                        <i class="fi fi-rr-envelope"></i>
                        <input name="email" type="email" class="form-control" placeholder="Email" required>
                      </div>

                      <div class="col-12 form-group">
                        <i class="fi fi-rr-call-incoming"></i>
                        <input name="phone" type="text" class="form-control" placeholder="Phone" required>
                      </div>

                      <div class="col-12 form-group">
                        <i class="fi fi-rr-pencil"></i>
                        <input name="subject" type="text" class="form-control" placeholder="Subject" required>
                      </div>

                      <div class="col-12 form-group">
                        <i class="fi fi-rr-document"></i>
                        <textarea name="message" class="form-control" rows="3" placeholder="Message" required></textarea>
                      </div>

                      <div class="col-12"><input name="submit" type="submit" class="btn btn-generic" value="Send Message"></div>
                    </div>
                    <!-- end form element -->
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
</template>
