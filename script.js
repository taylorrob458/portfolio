console.log("lightbox script loaded");

// URL of your PDF (local or online)
    const url = 'assets/resume.pdf'; // change to your PDF path

    // Load the PDF
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(pdf => {
    // Get page 1
    pdf.getPage(1).then(page => {
        const scale = 1.5; // zoom level
        const viewport = page.getViewport({ scale });

        // Prepare canvas
        const canvas = document.getElementById('pdf-viewer');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render page
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-image').src = img.src;

    const captionText = img.alt || "";

    document.getElementById('lightbox-caption').innerHTML = `
        <div class="caption-box">
            ${captionText}
        </div>
    `;
}