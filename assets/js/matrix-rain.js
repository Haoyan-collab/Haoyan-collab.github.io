(() => {
  const existing = document.getElementById("matrix-bg");
  const canvas = existing || document.createElement("canvas");
  canvas.id = "matrix-bg";
  if (!existing) document.body.prepend(canvas);

  const context = canvas.getContext("2d");
  const fontSize = 15;
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%#&_(),.;:?!\\|{}<>[]^~";
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array(Math.ceil(canvas.width / fontSize)).fill(1);
  }

  function draw() {
    context.fillStyle = "rgba(11, 17, 16, 0.07)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(0, 255, 65, 0.56)";
    context.font = `${fontSize}px "IBM Plex Mono", monospace`;

    drops.forEach((drop, column) => {
      context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], column * fontSize, drop * fontSize);
      if (drop * fontSize > canvas.height && Math.random() > 0.975) drops[column] = 0;
      drops[column] += 1;
    });
  }

  resize();
  window.addEventListener("resize", resize);
  window.setInterval(draw, 45);
})();
