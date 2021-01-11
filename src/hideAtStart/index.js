if (window.location.href.includes("schoology.dpsk12.org")) {

    console.log("Woah We Ran")
    document.documentElement.style.visibility = 'hidden';
    document.documentElement.style.background = "#36393e"

    document.addEventListener('DOMContentLoaded', function() {
        // ... do something ... and then show the document:
        setTimeout(() => {
            document.documentElement.style.visibility = '';
        }, 1000)

    });
}