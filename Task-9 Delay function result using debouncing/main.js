// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }

  // Function to update the text
  function updateText() {
    const input = document.getElementById("input").value;
    document.getElementById("output").innerText = `You typed: ${input}`;
  }

  // Attach the debounced version of the updateText function to the input event
  const debouncedUpdateText = debounce(updateText, 500);
  document
    .getElementById("input")
    .addEventListener("input", debouncedUpdateText);