   // 1. Menu Movil
        function toggleMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('active');
        }

        // 2. Observer Animaciones
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
