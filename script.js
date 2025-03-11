function showDetail(skillKey) {
    const skillDetails = {
        DataBaseDeveloper: "Experiência com Oracle, MySQL e PostgreSQL. Proficiência em modelagem de dados, SQL e otimização de consultas.",
        Dev: "Desenvolvimento de software robusto em C, C++ e Java, incluindo aplicações para web e desktop.",
        Poo: "Expertise em encapsulamento, herança e polimorfismo para projetos de grande escala.",
        InternetOfThings: "Projetos de IoT utilizando ESP32 para automação residencial e monitoramento industrial com uso de MQTT.",
        AED: "Resolução de problemas complexos em plataformas competitivas, foco em eficiência algorítmica.",
        WEB: "Criação de interfaces e backend para aplicações web dinâmicas e responsivas.",
        Gestão: "Liderança de equipes técnicas em projetos multidisciplinares, gerenciamento ágil de projetos."
    };

    // Atualiza o texto de detalhes com animação suave
    const detailText = document.getElementById('detailText');
    detailText.style.opacity = 0;
    setTimeout(() => {
        detailText.innerHTML = `<h3>${skillKey}</h3><p>${skillDetails[skillKey]}</p>`;
        detailText.style.opacity = 1;
    }, 300); // Espera a transição de opacidade concluir
}
