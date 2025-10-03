function toggleLightMode() {
  const hmtl = document.documentElement;

  hmtl.classList.toggle("light");

  const imageClass = document.querySelector(".profile img");
  const newImageUrl = "./assets/avatar-light.png";
  const defaultImageUrl = "./assets/avatar.png";

  if (hmtl.classList.contains("light")) {
    imageClass.setAttribute("src", newImageUrl);
    imageClass.setAttribute("alt", "Avatar Light Profile");
  } else {
    imageClass.setAttribute("src", defaultImageUrl);
    imageClass.setAttribute("alt", "Avatar Dark Profile");
  }

}
