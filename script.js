const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const copyButton = document.querySelector("#copyQuestions");
const copyMessage = document.querySelector("#copyMessage");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");

    menuButton.textContent = isOpen ? "×" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "메뉴 열기");
    });
  });
}

if (copyButton && copyMessage) {
  copyButton.addEventListener("click", async () => {
    const today = new Date().toLocaleDateString("ko-KR");

    const text = `오늘의 30초 자각 (${today})

1. 지금 내 삶에서 무엇이 변하고 있나요?
2. 이 변화 속에서도 내가 지킬 중심은 무엇인가요?
3. 흔들림과 중심은 지금 어떻게 함께 존재하나요?`;

    try {
      await navigator.clipboard.writeText(text);
      copyMessage.textContent =
        "오늘의 질문을 복사했습니다. 노션이나 메모장에 붙여넣어 보세요.";
    } catch (error) {
      copyMessage.textContent =
        "복사가 되지 않으면 세 질문을 직접 메모해 보세요.";
    }
  });
}
