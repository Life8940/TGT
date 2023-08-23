var elements = document.getElementsByClassName("column");

var i;

function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value;
        showResults(query);
    });

    function showResults(query) {
        // Bu kısımda arama sonuçlarını oluşturup resultsDiv içine ekleyebilirsiniz.
        // Örneğin, bir API'ye istek gönderip sonuçları burada görüntüleyebilirsiniz.
        resultsDiv.innerHTML = "<p>results</p>";
    }
});


var url = "https://api.example.com/data";


fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(function(data) {
        // API'den gelen veriyi kullanabilirsiniz
    })
    .catch(function(error) {
        console.error("Fetch error:", error);
    });
