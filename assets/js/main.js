/* ACCORDION */
const accordionItems = document.querySelectorAll(".accordion_item");

// 1. Select each item
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion_header");

  // 2. Select each click of the header
  accordionHeader.addEventListener("click", () => {
    // 7. Create the variable
    const openItem = document.querySelector(".accordion-open");

    // 5. Call the function toggle item
    toggleItem(item);

    // 8. Validate if the class exists
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

// 3. Create const type function
const toggleItem = (item) => {
  // 3.1 Create the variable
  const accordionContent = item.querySelector(".accordion_content");

  // 6. If there is another element that contains the accordion-open class that removes its class
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    // 4. Add the maximum height of the content
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
