(function () {
  function createVideoIframe(src, title) {
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title || "Bilibili video";
    iframe.scrolling = "no";
    iframe.setAttribute("border", "0");
    iframe.setAttribute("frameborder", "no");
    iframe.setAttribute("framespacing", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.allowFullscreen = true;
    return iframe;
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".video-lazy");
    if (!trigger) {
      return;
    }

    const src = trigger.dataset.videoSrc;
    if (!src) {
      return;
    }

    const label = trigger.dataset.videoTitle || trigger.getAttribute("aria-label") || "Bilibili video";
    const frame = document.createElement("div");
    frame.className = "video-frame is-loaded";
    frame.appendChild(createVideoIframe(src, label.replace(/^Play video: /, "")));
    trigger.replaceWith(frame);
  });
})();
