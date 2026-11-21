// Todos os recursos externos do site, num só sítio.
// type: "site" | "pdf" | "podcast" | "spotify" | "youtube"

export const LINKS = {
  sns24Inicio: {
    url: "https://www.sns24.gov.pt/pt/inicio",
    title: "SNS 24",
    source: "sns24.gov.pt",
    type: "site",
  },
  sns24Consultas: {
    url: "https://www.sns24.gov.pt/pt/servico/marcacao-de-consultas/",
    title: "Marcação de consultas",
    source: "SNS 24",
    type: "site",
  },
  sns24GuiaPais: {
    url: "https://www.sns24.gov.pt/pt/tema/prevencao-e-cuidados-de-saude/guia-para-pais/",
    title: "Guia para pais",
    source: "SNS 24",
    type: "site",
  },
  sns24Depressao: {
    url: "https://www.sns24.gov.pt/pt/tema/saude-da-mulher/depressao-pos-parto/",
    title: "Depressão pós-parto",
    source: "SNS 24",
    type: "site",
  },
  sns24App: {
    url: "https://www.sns24.gov.pt/pt/servico/app-sns-24/",
    title: "App SNS 24",
    source: "SNS 24",
    type: "site",
  },
  snsSaudeMental: {
    url: "https://www.sns.gov.pt/noticias/2022/01/10/saude-mental-perinatal/",
    title: "Saúde mental perinatal",
    source: "SNS",
    type: "site",
  },
  dgsOrientacao: {
    url: "https://www.ordemenfermeiros.pt/media/29481/orienta%C3%A7%C3%A3o-dgs.pdf",
    title: "Orientação da DGS",
    source: "Ordem dos Enfermeiros",
    type: "pdf",
  },
  guiaGravidas: {
    url: "https://www.ulsrl.min-saude.pt/wp-content/uploads/sites/38/2025/08/Guia-para-Gravidas-Tudo-o-que-precisa-de-saber-sobre-a-sua-Gravidez.pdf",
    title: "Guia para Grávidas – Tudo o que precisa de saber sobre a sua Gravidez",
    source: "ULS Região de Leiria",
    type: "pdf",
  },
  ulsrlObstetricia: {
    url: "https://www.ulsrl.min-saude.pt/especialidades-medicas/obstetricia-ginecologia/",
    title: "Obstetrícia e Ginecologia",
    source: "ULS Região de Leiria",
    type: "site",
  },
  apsi: {
    url: "https://www.apsi.org.pt/pt/",
    title: "Segurança infantil",
    source: "APSI",
    type: "site",
  },
  segSocialParental: {
    url: "https://www.seg-social.pt/ptss/search?q=subsidio%20inicial%20parental",
    title: "Subsídio parental inicial",
    source: "Segurança Social",
    type: "site",
  },
  segSocialRisco: {
    url: "https://www.seg-social.pt/ptss/search?q=subsidio+por+risco+clinico+durante+gravidez",
    title: "Subsídio por risco clínico durante a gravidez",
    source: "Segurança Social",
    type: "site",
  },
  segSocialDireta: {
    url: "https://www.seg-social.pt/ptss/pssd/home",
    title: "Segurança Social Direta",
    source: "Segurança Social",
    type: "site",
  },

  // Vídeos e podcasts
  ytGravidez: {
    url: "https://youtu.be/W2ug-0-Y3qc",
    title: "Gravidez e preparação para o parto",
    source: "YouTube",
    type: "youtube",
  },
  ytRecemNascido: {
    url: "https://youtu.be/pOwKRpATB7U",
    title: "Cuidados ao recém-nascido",
    source: "YouTube",
    type: "youtube",
  },

  // Podcasts: o mesmo conteúdo existe no Apple Podcasts e no Spotify.
  podBebeACaminho: {
    title: "Bebé a caminho",
    source: "Podcast",
    type: "podcast",
    platforms: [
      { name: "Apple Podcasts", url: "https://podcasts.apple.com/pt/podcast/beb%C3%A9-a-caminho/id1651258300" },
      { name: "Spotify", url: "https://open.spotify.com/show/0Xv2GicDRHgwkO4ejREFdu" },
    ],
  },
  podPreparacaoNascimento: {
    title: "Preparação para o nascimento e recuperação do parto",
    source: "Episódio · Bebé a caminho",
    type: "podcast",
    platforms: [
      { name: "Apple Podcasts", url: "https://podcasts.apple.com/pt/podcast/prepara%C3%A7%C3%A3o-para-o-nascimento-e-recupera%C3%A7%C3%A3o-do-parto/id1651258300?i=1000662396487" },
      { name: "Spotify", url: "https://open.spotify.com/episode/5yiZyhGaqs2xCIEjZdXFa4" },
    ],
  },
  podDepoisDoParto: {
    title: "E depois do parto?",
    source: "Episódio · Bebé a caminho",
    type: "podcast",
    platforms: [
      { name: "Apple Podcasts", url: "https://podcasts.apple.com/pt/podcast/e-depois-do-parto/id1651258300?i=1000590977690" },
      { name: "Spotify", url: "https://open.spotify.com/episode/2z2e3XwzzimzBn0dQR29fl" },
    ],
  },
  podDesafiosAmamentacao: {
    title: "Os desafios da amamentação",
    source: "Episódio · Bebé a caminho",
    type: "podcast",
    platforms: [
      { name: "Apple Podcasts", url: "https://podcasts.apple.com/pt/podcast/os-desafios-da-amamenta%C3%A7%C3%A3o/id1651258300?i=1000612497074" },
      { name: "Spotify", url: "https://open.spotify.com/episode/3IiUC8jlQNn0qXyhhL8bRf" },
    ],
  },
};
