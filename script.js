const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const categoryBtns = document.querySelectorAll(".category-button");

function filterproduct() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    // Corrected the typo in "actvateCategory" to "activeCategory"
    const activeCategory = document.querySelector(".active")?.dataset.category || "all";

    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;

        if ((title.includes(searchValue) || searchValue === "") && 
            (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove("active")); // Fixed "actve" to "active"
    e.target.classList.add("active");
    filterproduct();
}

searchBtn.addEventListener("click", filterproduct);
searchInput.addEventListener("keyup", filterproduct);
categoryBtns.forEach(btn => {
    btn.addEventListener("click", setCategory);
});

filterproduct();
