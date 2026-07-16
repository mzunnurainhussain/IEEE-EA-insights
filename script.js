const shareButton = document.getElementById('shareButton');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: document.title,
    text: 'Empowering Future Cybersecurity Professionals Through Ethical Hacking and AI Awareness',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard');
  } catch (error) {
    if (error?.name !== 'AbortError') {
      showToast('Copy the link from your browser address bar');
    }
  }
});
