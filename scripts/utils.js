export function includeHTML(id, url, callback) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback();
        if (id === 'include-sidebar') {
          document.dispatchEvent(new Event('sidebar-included'));
        }
        if (id === 'include-footer') {
          document.dispatchEvent(new Event('footer-included'));
        }
      });
}