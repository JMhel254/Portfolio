document.addEventListener("DOMContentLoaded", () => {
        const experienceHeaders = document.querySelectorAll(".experience-item__header");

        experienceHeaders.forEach(header => {
            header.addEventListener("click", function() {
                const clickedItem = this.parentElement;
                const clickedContent = this.nextElementSibling;

                // 1. Close all OTHER items first
                experienceHeaders.forEach(otherHeader => {
                    const otherItem = otherHeader.parentElement;
                    const otherContent = otherHeader.nextElementSibling;

                    // If the item in the loop is NOT the one we just clicked, close it
                    if (otherItem !== clickedItem) {
                        otherItem.classList.remove("active");
                        otherContent.style.maxHeight = null;
                    }
                });

                // 2. Toggle the item you actually clicked
                clickedItem.classList.toggle("active");

                if (clickedItem.classList.contains("active")) {
                    // Open it
                    clickedContent.style.maxHeight = clickedContent.scrollHeight + "px";
                } else {
                    // Close it
                    clickedContent.style.maxHeight = null;
                }
            });
        });
    });


//pricing section 
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('pricing-toggle');
    const dynamicPrices = document.querySelectorAll('.dynamic-price');
    const labelOnetime = document.getElementById('label-onetime');
    const labelRecurring = document.getElementById('label-recurring');

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                // Switch to Recurring
                labelOnetime.classList.remove('active');
                labelRecurring.classList.add('active');
                
                dynamicPrices.forEach(priceEl => {
                    // Quick fade animation effect
                    priceEl.style.opacity = 0;
                    setTimeout(() => {
                        priceEl.textContent = priceEl.getAttribute('data-recurring');
                        priceEl.style.opacity = 1;
                    }, 200);
                });
            } else {
                // Switch to One-Time
                labelRecurring.classList.remove('active');
                labelOnetime.classList.add('active');
                
                dynamicPrices.forEach(priceEl => {
                    // Quick fade animation effect
                    priceEl.style.opacity = 0;
                    setTimeout(() => {
                        priceEl.textContent = priceEl.getAttribute('data-onetime');
                        priceEl.style.opacity = 1;
                    }, 200);
                });
            }
        });
        
        // Add CSS transition for smooth fade
        dynamicPrices.forEach(el => el.style.transition = 'opacity 0.2s ease');
    }
});