// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-agendamento");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;

      if (!data || !hora) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Salva no localStorage
      localStorage.setItem("agendamentoData", data);
      localStorage.setItem("agendamentoHora", hora);

      // Redireciona para a página de confirmação
      window.location.href = "confirmacao.html";
    });
  }

  // Exibe os dados de confirmação
  const confirmData = document.getElementById("confirm-data");
  const confirmHora = document.getElementById("confirm-hora");

  if (confirmData && confirmHora) {
    confirmData.textContent =
      localStorage.getItem("agendamentoData") || "Data não disponível";
    confirmHora.textContent =
      localStorage.getItem("agendamentoHora") || "Hora não disponível";
  }
});

