document.addEventListener('DOMContentLoaded', function() {
    const rssUrl = 'https://listenbrainz.org/syndication-feed/user/Rirsc/listens?count=5';
    const containerId = 'listenbrainz-container';

    function fetchAndDisplay() {
        fetch(rssUrl)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                const items = data.querySelectorAll("entry");
                let html = '<strong>Latest Listens:</strong><ul>';

                for (let i = 0; i < Math.min(5, items.length); i++) {
                    const el = items[i];
                    try {
                        const titleEl = el.querySelector("title");
                        const linkEl = el.querySelector("link");

                        const title = titleEl ? titleEl.textContent : 'No Title';
                        const link = linkEl ? linkEl.getAttribute('href') : '#';
                        html += `<li><a href="${link}" target="_blank" rel="noopener">${title}</a></li>`;
                    } catch (e) {
                        console.error("Error processing item", i, e);
                    }
                }

                html += '</ul>';

                const container = document.getElementById(containerId);
                if (container) {
                   container.innerHTML = html;
                } else {
                    console.error(`Container with id "${containerId}" not found.`);
                }
            })
            .catch(err => {
                console.error('Failed to fetch ListenBrainz feed:', err);
                 document.getElementById(containerId).innerHTML = '<p>Failed to fetch ListenBrainz feed.</p>';
            });
    }
    fetchAndDisplay();

    // Update every 10 minutes (adjust as needed)
    setInterval(fetchAndDisplay, 600000);
});