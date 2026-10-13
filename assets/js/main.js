// Dynamic Countdown Timers
function startTimer(durationInSeconds, displayElementId) {
  let timer = durationInSeconds;
  const display = document.getElementById(displayElementId);
  if (!display) return;

  const render = () => {
    const days = Math.floor(timer / 86400);
    const hours = Math.floor((timer % 86400) / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    display.textContent = `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  };

  render();
  setInterval(() => {
    timer -= 1;
    if (timer < 0) timer = durationInSeconds;
    render();
  }, 1000);
}

// Interactive Historical Number Search
function searchNumber() {
  const input = document.getElementById('numberSearch').value.trim();
  const resultMsg = document.getElementById('searchResult');
  if (!resultMsg) return;

  if (!/^\d{3,4}$/.test(input)) {
    resultMsg.style.color = '#ff4d4d';
    resultMsg.textContent = 'Please enter a valid 3-digit or 4-digit number.';
    return;
  }

  resultMsg.style.color = '#d4af37';
  resultMsg.textContent = `Searching archives for ${input}... Historical archive lookup is pending verified data connection.`;
}

// Policy Modal Controls
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'block';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) event.target.style.display = 'none';
});

// Initialize Timers on Page Load
// Demo durations retained until official draw schedules are connected.
document.addEventListener('DOMContentLoaded', function () {
  startTimer(172800, 'thaiTimer');
  startTimer(43200, 'malaysiaTimer');
});
