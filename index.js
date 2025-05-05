function toggleBlogs() {
  const content = document.getElementById("blogContent");
  const text = document.getElementById("toggleText");
  const icon = document.getElementById("toggleIcon");

  content.classList.toggle("hidden");

  const isHidden = content.classList.contains("hidden");
  text.textContent = isHidden ? "Mostra" : "Nascondi";
  icon.src = isHidden
    ? "http://st.ilfattoquotidiano.it/wp-content/themes/ifq-2025/assets/img/fq-www/icon-alt-arrow-down.svg"
    : "http://st.ilfattoquotidiano.it/wp-content/themes/ifq-2025/assets/img/fq-www/icon-alt-arrow-up.svg";
}
