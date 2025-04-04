if (window.location.href.includes("tickets.html")) {
  let selectedSeats = 0;

  // 1. Selección de partido
  function selectMatch(matchName) {
    const matchElement = document.querySelector('[data-cy="selected-match"]');
    if (matchElement) matchElement.textContent = matchName;
  }

  // 2. Gestión de asientos
  function selectSeat(seatId) {
    const seat = document.querySelector(`[data-cy="seat-${seatId}"]`);
    if (!seat) return;

    const isSelected = seat.classList.contains("selected");
    seat.classList.toggle("selected");

    selectedSeats += isSelected ? -1 : 1;
    const seatCounter = document.querySelector('[data-cy="total-seats"]');
    if (seatCounter) seatCounter.textContent = `Asientos seleccionados: ${selectedSeats}`;

    const btnPayment = document.querySelector('[data-cy="btn-payment"]');
    if (btnPayment) btnPayment.disabled = selectedSeats === 0;
  }

  // 3. Mostrar modal de pago
  function showPaymentModal() {
    const paymentModal = document.querySelector('[data-cy="payment-modal"]');
    if (paymentModal) paymentModal.style.display = 'block';

    const payNowButton = document.querySelector('[data-cy="pay-now"]');
    if (payNowButton) payNowButton.disabled = true;
  }

  // 4. Habilitar botón de pago al ingresar tarjeta
  document.addEventListener("DOMContentLoaded", () => {
    const cardInput = document.querySelector('[data-cy="card-number"]');
    const payNowButton = document.querySelector('[data-cy="pay-now"]');

    if (!cardInput || !payNowButton) return;

    cardInput.addEventListener("input", () => {
      payNowButton.disabled = cardInput.value.length !== 16;
    });
  });

  // 5. Completar pago
  function completePayment() {
    const cardInput = document.querySelector('[data-cy="card-number"]');
    if (!cardInput || cardInput.value.length !== 16) {
      alert("Número de tarjeta inválido");
      return;
    }

    const successContainer = document.querySelector('[data-cy="success-container"]');
    if (successContainer) successContainer.style.display = "block";

    setTimeout(() => {
      if (successContainer) successContainer.style.display = "none";

      const selectedMatch = document.querySelector('[data-cy="selected-match"]');
      if (selectedMatch) selectedMatch.textContent = "";

      const seatCounter = document.querySelector('[data-cy="total-seats"]');
      if (seatCounter) seatCounter.textContent = "Asientos seleccionados: 0";

      const btnPayment = document.querySelector('[data-cy="btn-payment"]');
      if (btnPayment) btnPayment.disabled = true;

      document.querySelectorAll('.seat.selected').forEach(seat => seat.classList.remove('selected'));

      if (cardInput) cardInput.value = "";
    }, 3000);
  }
} else {
  console.warn("⚠️ El script no se ejecuta en esta página.");
}
