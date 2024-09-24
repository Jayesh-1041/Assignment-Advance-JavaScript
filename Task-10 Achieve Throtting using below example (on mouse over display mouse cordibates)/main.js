const box = document.getElementById("coordinate-box");
      const coordinatesDisplay = document.getElementById("coordinates");

      function throttle(fn, delay) {
        let lastCall = 0;
        return function (...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) {
            return;
          }
          lastCall = now;
          return fn(...args);
        };
      }

      function displayCoordinates(event) {
        const x = event.clientX - box.offsetLeft;
        const y = event.clientY - box.offsetTop;
        coordinatesDisplay.textContent = `${x}, ${y}`;
      }

      const throttledDisplayCoordinates = throttle(displayCoordinates, 100);

      box.addEventListener("mousemove", throttledDisplayCoordinates);