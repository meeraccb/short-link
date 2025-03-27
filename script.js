// Function to shorten the URL
function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const shortUrlResult = document.getElementById("shortUrlResult");
    const copyButton = document.getElementById("copyButton");

    if (longUrl === "") {
        shortUrlResult.textContent = "Please enter a URL!";
        shortUrlResult.style.color = "red";
        return;
    }

    // Normally, you'd call an API here to shorten the URL.
    // For now, we'll simulate it with a fixed response:
    const shortUrl = "https://short.url/" + Math.random().toString(36).substring(7);

    shortUrlResult.textContent = shortUrl;
    copyButton.style.display = "block"; // Show the copy button
}

// Function to copy the shortened URL to clipboard
function copyUrl() {
    const shortUrlResult = document.getElementById("shortUrlResult").textContent;
    navigator.clipboard.writeText(shortUrlResult)
        .then(() => {
            alert("Short URL copied to clipboard!");
        })
        .catch(err => {
            alert("Error copying URL: " + err);
        });
}

// Function to upload an image
function uploadImage() {
    const imageUpload = document.getElementById("imageUpload");
    const imageResult = document.getElementById("imageResult");

    const file = imageUpload.files[0];
    if (!file) {
        imageResult.textContent = "Please choose an image to upload!";
        imageResult.style.color = "red";
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        imageResult.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 100%; max-height: 300px; margin-top: 10px;">`;
    };
    reader.readAsDataURL(file);
}
