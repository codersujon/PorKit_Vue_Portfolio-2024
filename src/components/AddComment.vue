<script setup>

</script>

<template>
  <section class="section comment has-style-01">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-12 text-center">
          <div class="icon-top">
            <img src="@/assets/images/icon/star.png" alt="icon">
          </div>
        </div>

        <div class="col-lg-8 col-md-10 col-sm-12 col-12">
          <form class="comment-form" method="post" action="#">
            <!-- form message -->
            <div class="row">
              <div class="col-12">
                <div class="alert alert-success contact__msg" style="display: none" role="alert">
                  Your comment was sent successfully.
                </div>
              </div>
            </div>
            <!-- end message -->

            <!-- form element -->
            <div class="row">
              <div class="col-12 form-group text-center">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="5 stars">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="4 stars">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="3 stars">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="2 stars">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="1 star">1 star</label>
                </div>
              </div>

              <div class="col-12 form-group">
                <i class="fi fi-rr-user"></i>
                <input name="name" type="text" class="form-control" placeholder="Your Name" required>
              </div>

              <div class="col-12 form-group">
                <i class="fi fi-rr-envelope"></i>
                <input name="email" type="email" class="form-control" placeholder="Email Address" required>
              </div>

              <div class="col-12 form-group">
                <i class="fi fi-rr-document"></i>
                <textarea name="message" class="form-control" rows="3" placeholder="Message" required></textarea>
              </div>

              <div class="col-12"><input name="submit" type="submit" class="btn btn-generic" value="Send"></div>
            </div>
            <!-- end form element -->
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>