 
    document.getElementById("search-btn").addEventListener("click", function() {
        const query = document.getElementById("search-input").value.toLowerCase();
        const books = document.querySelectorAll(".bok");

        books.forEach(book => {
            const title = book.querySelector("h5").textContent.toLowerCase();
            if (title.includes(query)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });

    document.getElementById("filter-btn").addEventListener("click", function() {
        const category = document.getElementById("category-filter").value;
        const price = document.getElementById("price-filter").value;
        const books = document.querySelectorAll(".bok");

        books.forEach(book => {
            const categoryMatch = category === "all" || book.dataset.category === category;
            const priceValue = parseInt(book.querySelector("h4").textContent.replace("$", ""));
            let priceMatch = true;

            if (price === "low") priceMatch = priceValue < 20;
            if (price === "medium") priceMatch = priceValue >= 20 && priceValue <= 25;
            if (price === "high") priceMatch = priceValue > 25;

            if (categoryMatch && priceMatch) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
 
