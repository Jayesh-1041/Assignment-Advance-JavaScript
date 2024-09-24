const draggables = document.querySelectorAll(".draggable");
      const containers = document.querySelectorAll(".container");

      draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", e.target.id);
          draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
          draggable.classList.remove("dragging");
        });
      });

      containers.forEach((container) => {
        container.addEventListener("dragover", (e) => {
          e.preventDefault();
        });

        container.addEventListener("drop", (e) => {
          e.preventDefault();
          const id = e.dataTransfer.getData("text/plain");
          const draggable = document.getElementById(id);

          if (draggable) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - draggable.offsetWidth / 2;
            const y = e.clientY - rect.top - draggable.offsetHeight / 2;

            
            draggable.style.left = `${x}px`;
            draggable.style.top = `${y}px`;

            
            container.appendChild(draggable);

            draggable.classList.remove("dragging");
          }
        });
      });