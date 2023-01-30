export const activateScreenSizeChangeDetection = () => {
  const w = window,
    d = document,
    de = d.documentElement;

  if (!("listener" in de.dataset)) {
    de.dataset.listener = "true";

    window.addEventListener("resize", (e) => {
      //Screen viewable unit size
      let unit = (w.innerHeight * 0.01).toFixed(2);

      de.style.setProperty("--unit", `${unit}px`);
    });
  }
};
