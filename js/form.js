const form = document.querySelector("#volunteer-form");

const onlyNumbers = (value) => value.replace(/\D/g, "");

function maskCPF(value) {
  return onlyNumbers(value)
    .slice(0, 11)
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

function maskPhone(value) {
  const numbers = onlyNumbers(value).slice(0, 11);

  if (numbers.length <= 10) {
    return numbers
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numbers
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function maskCEP(value) {
  return onlyNumbers(value)
    .slice(0, 8)
    .replace(/^(\d{5})(\d)/, "$1-$2");
}

function isValidCPF(value) {
  const cpfNumbers = onlyNumbers(value);

  if (cpfNumbers.length !== 11 || /^(\d)\1+$/.test(cpfNumbers)) {
    return false;
  }

  let sum = 0;

  for (let index = 0; index < 9; index += 1) {
    sum += Number(cpfNumbers[index]) * (10 - index);
  }

  let checkDigit = (sum * 10) % 11;
  if (checkDigit === 10) checkDigit = 0;
  if (checkDigit !== Number(cpfNumbers[9])) return false;

  sum = 0;

  for (let index = 0; index < 10; index += 1) {
    sum += Number(cpfNumbers[index]) * (11 - index);
  }

  checkDigit = (sum * 10) % 11;
  if (checkDigit === 10) checkDigit = 0;

  return checkDigit === Number(cpfNumbers[10]);
}

const cpfField = document.querySelector("#cpf");
const phoneField = document.querySelector("#telefone");
const cepField = document.querySelector("#cep");
const messageField = document.querySelector("#mensagem");
const characterCount = document.querySelector("#count");

cpfField.addEventListener("input", () => {
  cpfField.value = maskCPF(cpfField.value);
});

phoneField.addEventListener("input", () => {
  phoneField.value = maskPhone(phoneField.value);
});

cepField.addEventListener("input", () => {
  cepField.value = maskCEP(cepField.value);
});

const errorMessages = {
  nome: "Informe seu nome completo.",
  cpf: "Informe um CPF vÃ¡lido.",
  nascimento: "Informe sua data de nascimento.",
  email: "Informe um e-mail vÃ¡lido.",
  telefone: "Use o formato (00) 00000-0000.",
  cep: "Use o formato 00000-000.",
  cidade: "Informe sua cidade.",
  participacao: "Escolha uma forma de participaÃ§Ã£o.",
  disponibilidade: "Escolha sua disponibilidade.",
  consentimento: "Ã‰ necessÃ¡rio autorizar o contato.",
};

function validateField(field) {
  let isValid = field.validity.valid;

  if (field === cpfField && field.value) {
    isValid = isValidCPF(field.value);
  }

  if (field.id === "nascimento" && field.value) {
    const birthDate = new Date(`${field.value}T00:00:00`);
    const today = new Date();
    isValid =
      isValid && birthDate <= today && birthDate.getFullYear() >= 1900;
  }

  field.setAttribute("aria-invalid", String(!isValid));

  const errorElement = document.querySelector(`#${field.id}-error`);
  if (errorElement) {
    errorElement.textContent = isValid
      ? ""
      : errorMessages[field.id] || "Revise este campo.";
  }

  return isValid;
}

form.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));

  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") {
      validateField(field);
    }
  });
});

messageField.addEventListener("input", () => {
  characterCount.textContent = messageField.value.length;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = [...form.querySelectorAll("input, select, textarea")];
  const isFormValid = fields.map(validateField).every(Boolean);

  if (!isFormValid) {
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  form.reset();
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
  characterCount.textContent = "0";

  const successMessage = document.querySelector("#success");
  successMessage.classList.add("show");
  successMessage.focus();
});
