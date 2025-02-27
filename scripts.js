document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a')
    const clickableCards = document.querySelectorAll('.clickable-card')
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()
            const targetId = this.getAttribute('href')
            const targetSection = document.querySelector(targetId)
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })

    clickableCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent clicking the "View on GitHub" link from triggering the card click
            if (e.target.classList.contains('view-link')) return
            
            const url = this.getAttribute('data-url')
            if (url) {
                window.open(url, '_blank')
            }
        })
    })
})