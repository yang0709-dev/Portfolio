export function move_to_right() {
//   console.log(burger);
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const burger_elements = document.getElementById("burger-elements");
    burger.addEventListener("click", () => {
      burger_elements.classList.toggle("open");
      console.log(burger_elements.classList);
    });
  });
}
