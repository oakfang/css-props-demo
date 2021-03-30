export class ProcessEngine {
  static init() {
    return new ProcessEngine();
  }

  constructor() {
    this.progressBar = document.querySelector("figure.progress .loaded");
    this.startBtn = document.querySelector("button.start");
    this.stopBtn = document.querySelector("button.stop");
    this.setupEvents();

    this.task = null;
    this.stop();
  }

  setupEvents() {
    document.querySelectorAll("[data-ctlr]").forEach((btn) => {
      btn.addEventListener("click", () => this[btn.dataset.ctlr]());
    });
  }

  stop() {
    document.querySelector("[data-ctlr='start']").disabled = false;
    document.querySelector("[data-ctlr='stop']").disabled = true;
    clearInterval(this.task);
  }

  start() {
    document.querySelector("[data-ctlr='start']").disabled = true;
    document.querySelector("[data-ctlr='stop']").disabled = false;
    this.task = setInterval(() => {
      const current = this.getProgress();
      const next = Math.min(current + 25, 100);
      this.setProgress(next);
      if (next === 100) {
        this.stop();
      }
    }, 2000);
  }

  clear() {
    this.stop();
    this.setProgress(0);
  }

  setProgress(progress) {
    this.progressBar.style.width = `${progress}%`;
  }

  getProgress() {
    const progressWidth = parseFloat(getComputedStyle(this.progressBar).width);
    const progressContainerWidth = parseFloat(
      getComputedStyle(this.progressBar.parentElement).width
    );
    return (100 * progressWidth) / progressContainerWidth;
  }
}
