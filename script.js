const organCopy = {
  gi: {
    title: "Gastrointestinal",
    body: "Nausea, diarrhea, and appetite loss are most prominent early in treatment."
  },
  sleep: {
    title: "Sleep and CNS",
    body: "Insomnia, jitteriness, headache, fatigue, or somnolence can often be managed by timing and dosing strategies."
  },
  sex: {
    title: "Sexual function",
    body: "Lower libido, delayed orgasm, anorgasmia, delayed ejaculation, and erectile dysfunction are often underreported."
  },
  risk: {
    title: "Targeted risks",
    body: "Monitor for hyponatremia, bleeding risk, QT prolongation, and serotonin syndrome when clinically indicated."
  }
};

const detail = document.querySelector("#organ-detail");
const organButtons = [...document.querySelectorAll(".organ")];
const steps = [...document.querySelectorAll(".step")];
const progress = document.querySelector(".scroll-progress");
const revealItems = [...document.querySelectorAll(".reveal")];
const taperButtons = [...document.querySelectorAll(".taper-button")];
const taperBars = [...document.querySelectorAll(".taper-viz div")];
const quizOptions = [...document.querySelectorAll(".quiz-option")];
const quizFeedback = document.querySelector("#quiz-feedback");
const taperPatterns = {
  linear: ["100%", "75%", "50%", "25%", "0%", "0%", "0%", "0%"],
  hyperbolic: ["100%", "50%", "25%", "13%", "7%", "4%", "2%", "1%"]
};

function setOrgan(id) {
  const next = organCopy[id];
  if (!next || !detail) return;

  organButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.organ === id);
  });

  detail.innerHTML = `<h3>${next.title}</h3><p>${next.body}</p>`;
}

organButtons.forEach((button) => {
  button.addEventListener("click", () => setOrgan(button.dataset.organ));
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    steps.forEach((step) => {
      step.classList.toggle("is-active", step === visible.target);
    });
    setOrgan(visible.target.dataset.organ);
  },
  {
    root: null,
    threshold: [0.35, 0.55, 0.75],
    rootMargin: "-12% 0px -24% 0px"
  }
);

steps.forEach((step) => observer.observe(step));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

function updateProgress() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.setProperty("--progress", `${Math.min(1, Math.max(0, ratio)) * 100}%`);
}

function revealVisibleItems() {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      item.classList.add("is-visible");
    }
  });
}

window.addEventListener("scroll", () => {
  updateProgress();
  revealVisibleItems();
}, { passive: true });
window.addEventListener("resize", () => {
  updateProgress();
  revealVisibleItems();
});
updateProgress();
revealVisibleItems();

function setTaper(type) {
  const pattern = taperPatterns[type] || taperPatterns.linear;
  taperButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.taper === type);
  });
  taperBars.forEach((bar, index) => {
    const next = pattern[index] || pattern[pattern.length - 1];
    bar.style.setProperty("--h", next);
    const label = bar.querySelector("span");
    if (label) label.textContent = next;
  });
}

taperButtons.forEach((button) => {
  button.addEventListener("click", () => setTaper(button.dataset.taper));
});

quizOptions.forEach((option) => {
  option.addEventListener("click", () => {
    quizOptions.forEach((item) => {
      item.classList.remove("is-correct", "is-wrong");
      item.setAttribute("aria-checked", "false");
    });
    option.setAttribute("aria-checked", "true");
    const isCorrect = option.dataset.correct === "true";
    option.classList.add(isCorrect ? "is-correct" : "is-wrong");
    quizOptions
      .filter((item) => item.dataset.correct === "true")
      .forEach((item) => item.classList.add("is-correct"));
    if (quizFeedback) quizFeedback.hidden = false;
  });
});
