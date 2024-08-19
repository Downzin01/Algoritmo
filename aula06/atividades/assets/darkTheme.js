        const botaoAlterarTema = document.getElementById('alterar-tema');
        const temaIcon = document.getElementById('tema-icon');
        const resultadoDiv = document.getElementById('resultado');
        const body = document.body;

        // Função para aplicar o tema armazenado
        function aplicarTema() {
            if (localStorage.getItem('tema') === 'dark') {
                body.classList.add('dark-theme');
                temaIcon.src = '../../../assets/img/aula06/sol.png';
            } else {
                body.classList.remove('dark-theme');
                temaIcon.src = '../../../assets/img/aula06/lua.png';
            }
        }

        // Aplicar o tema ao carregar a página
        document.addEventListener('DOMContentLoaded', aplicarTema);

        botaoAlterarTema.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            resultadoDiv.classList.toggle('dark-theme');

            if (body.classList.contains('dark-theme')) {
                temaIcon.src = '../../../assets/img/aula06/sol.png'; 
                localStorage.setItem('tema', 'dark');
            } else {
                temaIcon.src = '../../../assets/img/aula06/lua.png'; 
                localStorage.setItem('tema', 'light');
            }
        });