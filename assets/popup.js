    // Function to show the overlay and popup with a 3-second delay
    function showOverlayAndPopupWithDelay() {
        // Check if a cookie exists indicating the popup was closed within the last day
        var popupClosedRecently = getCookie("popupClosedRecently");
        if (!popupClosedRecently) {
            // Show the overlay after a 3-second delay
            setTimeout(function () {
                document.getElementById("popupOverlay").style.display = "block";
            }, 3000); // 3000 milliseconds = 3 seconds

            // Show the popup after a 3-second delay
            setTimeout(function () {
                document.getElementById("myPopup").style.display = "block";
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    }

    // Function to close the popup and overlay, and set a cookie to prevent it from showing for a day
    function closePopup() {
        document.getElementById("myPopup").style.display = "none";
        document.getElementById("popupOverlay").style.display = "none";
        // Set a cookie to indicate that the popup was closed recently
        setCookie("popupClosedRecently", "true", 1); // 1 day expiration
    }

    // Function to handle form submission
    function handleFormSubmission() {
        // Hide the popup and overlay when the form is submitted
        closePopup();
    }

    // Helper function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Helper function to get a cookie value
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Show the overlay and popup on page load
    document.addEventListener("DOMContentLoaded", showOverlayAndPopupWithDelay);