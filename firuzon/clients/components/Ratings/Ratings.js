class Ratings {
  render() {
    const ratings = document.querySelectorAll(".rating");
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
      rating.addEventListener("click", checkedRating);
      function checkedRating() {
        rating.classList.toggle("rating__checked");
      }
    }
    //initzial rating
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains("rating_set")) {
        setRating(rating);
      }
    }
    //initzial values
    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
      ratingValue = rating.querySelector(".rating__value");
    }
    //change width active star
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    //opportunity set rating
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll(".rating__item");
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener("mouseenter", function (e) {
          //reset values
          initRatingVars(rating);
          //reset active star
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener("mouseleave", function (e) {
          //reset livevalue
          setRatingActiveWidth();
        });
        ratingItem.addEventListener("click", function (e) {
          initRatingVars(rating);

          // checked rating
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        });
      }
    }
  }
}

const ratingProducts = new Ratings();
