// Conteúdo dos temas do site.
// Cada secção pode ter: text (parágrafos), lists (listas com título),
// note (nota final), alert (caixa de alerta) e links (chaves de LINKS).

export const TOPICS = [
  {
    slug: "gravidez",
    title: "Gravidez",
    eyebrow: "Antes do nascimento",
    icon: "sprout",
    tone: "rosa",
    summary:
      "Consultas, preparação para o parto, a chegada do bebé e os teus direitos.",
    intro: [
      "A gravidez é uma fase única, marcada por mudanças, descobertas e muitas emoções. Ao longo desta caminhada, é natural que surjam dúvidas e preocupações sobre a saúde da mãe, o desenvolvimento do bebé, a alimentação, as consultas e a preparação para o parto.",
      "Por isso, é importante que estejas informada e que tenhas acesso a conteúdos que te ajudem a viver esta etapa com maior tranquilidade e confiança.",
    ],
    sections: [
      {
        id: "acompanhamento",
        title: "Acompanhamento na gravidez",
        text: [
          "É importante que a grávida tenha acompanhamento por profissionais de saúde ao longo de toda a gravidez. As consultas permitem acompanhar o desenvolvimento do bebé, avaliar a saúde da mãe e realizar os exames necessários.",
        ],
        lists: [
          {
            title: "Deves ter em atenção",
            items: [
              "A importância das consultas de saúde materna",
              "A realização de análises e ecografias",
              "A alimentação e os hábitos saudáveis",
              "A importância de esclarecer dúvidas com médicos e enfermeiros",
              "Os sinais e sintomas que justificam contactar os serviços de saúde",
            ],
          },
        ],
        links: ["sns24Consultas"],
      },
      {
        id: "preparacao-parto",
        title: "Preparação para o parto",
        text: [
          "A preparação para o parto ajuda a grávida a conhecer as diferentes etapas do nascimento e a compreender o que poderá acontecer durante o trabalho de parto.",
        ],
        lists: [
          {
            title: "O que vais aprender",
            items: [
              "O que é o trabalho de parto",
              "Quais são as fases do parto",
              "O que é a epidural",
              "O que é um plano de nascimento",
              "A importância do acompanhamento e apoio durante o parto",
              "A possibilidade de realizar cursos de preparação para o nascimento",
            ],
          },
        ],
        links: ["dgsOrientacao", "podPreparacaoNascimento"],
      },
      {
        id: "chegada-bebe",
        title: "Preparar a chegada do bebé",
        text: [
          "Antes do nascimento, é importante organizar o espaço onde o bebé vai dormir, preparar a roupa e reunir os produtos essenciais.",
        ],
        lists: [
          {
            title: "Deves ter em conta",
            items: [
              "Organização do quarto ou espaço do bebé",
              "Escolha de um berço seguro",
              "Preparação das roupas",
              "Compra dos produtos essenciais",
              "Preparação do transporte do bebé no automóvel",
              "Organização da família para receber o recém-nascido",
            ],
          },
        ],
        links: ["apsi"],
      },
      {
        id: "direitos-apoios",
        title: "Direitos e apoios à maternidade",
        text: [
          "A maternidade também envolve direitos e apoios sociais que podem ajudar a família durante a gravidez e após o nascimento.",
        ],
        lists: [
          {
            title: "Informações importantes",
            items: [
              "Licença parental",
              "Subsídio parental",
              "Subsídio por risco clínico durante a gravidez",
              "Direitos das grávidas no trabalho",
              "Apoios disponíveis para as famílias",
            ],
          },
        ],
        links: ["segSocialParental", "segSocialRisco"],
      },
      {
        id: "guia-gravidas",
        title: "Guia para Grávidas",
        text: [
          "Deixamos um recurso que poderá acompanhar-te durante este percurso: o Guia para Grávidas – Tudo o que precisa de saber sobre a sua Gravidez, disponibilizado pela Unidade Local de Saúde da Região de Leiria.",
          "Este guia reúne informações e orientações importantes para te ajudar a compreender melhor as diferentes etapas da gravidez e a esclarecer algumas das dúvidas que podem surgir.",
        ],
        links: ["guiaGravidas"],
      },
    ],
  },
  {
    slug: "cuidar-de-mim",
    title: "Cuidar de mim",
    eyebrow: "Depois do parto",
    icon: "leaf",
    tone: "areia",
    summary:
      "Recuperação, higiene, alimentação, descanso e pavimento pélvico depois do parto.",
    intro: [
      "Depois do nascimento do bebé, a atenção da família centra-se muitas vezes no recém-nascido. No entanto, a mãe também precisa de cuidados, descanso, acompanhamento e compreensão.",
      "Cuidar de ti é igualmente importante. Aqui encontras informações sobre a recuperação após o parto e a importância do autocuidado.",
    ],
    sections: [
      {
        id: "recuperacao",
        title: "Recuperação após o parto",
        text: [
          "O corpo da mulher passa por várias alterações após o nascimento do bebé. A recuperação é gradual e pode ser diferente de mulher para mulher.",
        ],
        lists: [
          {
            title: "Deves ter em atenção",
            items: [
              "Alterações físicas após o parto",
              "Perdas de sangue",
              "Contrações uterinas",
              "Recuperação após parto vaginal ou cesariana",
              "Importância da consulta de revisão do parto",
            ],
          },
        ],
        links: ["sns24GuiaPais"],
      },
      {
        id: "higiene",
        title: "Higiene e cuidados íntimos",
        text: [
          "Após o parto, é importante manter uma higiene adequada para favorecer a recuperação e prevenir infeções.",
        ],
        lists: [
          {
            title: "Cuidados a ter",
            items: [
              "Cuidados de higiene íntima",
              "Mudança regular dos pensos",
              "Cuidados com os pontos, quando existem",
              "Cuidados com a cicatriz da cesariana",
              "Sinais que devem motivar avaliação médica",
            ],
          },
        ],
      },
      {
        id: "alimentacao",
        title: "Alimentação e hidratação",
        text: [
          "Uma alimentação equilibrada e uma boa hidratação ajudam a mãe a recuperar e a manter o seu bem-estar.",
        ],
        lists: [
          {
            title: "Deves ter em atenção",
            items: [
              "Importância de fazer refeições variadas",
              "Consumo de frutas e legumes",
              "Importância de beber água",
              "Alimentação durante a amamentação",
              "Evitar dietas restritivas sem aconselhamento profissional",
            ],
          },
        ],
      },
      {
        id: "descanso",
        title: "Descanso e sono",
        text: [
          "Nos primeiros meses, o bebé ainda não tem horários de sono regulares. Por isso, a mãe pode sentir-se cansada e ter dificuldade em descansar.",
        ],
        lists: [
          {
            title: "Sugestões",
            items: [
              "Descansar sempre que possível",
              "Aproveitar os momentos em que o bebé dorme",
              "Partilhar tarefas com familiares",
              "Evitar assumir todas as responsabilidades",
              "Pedir ajuda quando necessário",
            ],
          },
        ],
      },
      {
        id: "pavimento-pelvico",
        title: "Recuperação do pavimento pélvico",
        text: [
          "O pavimento pélvico é constituído por músculos que sustentam órgãos como a bexiga, o útero e o intestino. Durante a gravidez e o parto, esta região pode sofrer alterações.",
        ],
        lists: [
          {
            title: "O que deves saber",
            items: [
              "O que é o pavimento pélvico",
              "A sua importância",
              "Possíveis alterações após o parto",
              "A importância de uma avaliação individual",
              "Quando procurar fisioterapia especializada",
            ],
          },
        ],
        links: ["podDepoisDoParto"],
      },
    ],
  },

  {
    slug: "saude-emocional",
    title: "Saúde emocional",
    eyebrow: "Sentir também é cuidar",
    icon: "message",
    tone: "salvia",
    summary:
      "Baby blues, depressão pós-parto, ansiedade, rede de apoio e quando pedir ajuda.",
    intro: [
      "A maternidade é uma experiência repleta de emoções. Para além da felicidade, podem surgir inseguranças, preocupações, ansiedade e momentos de tristeza.",
      "É importante compreender que nem todas as mães vivem esta fase da mesma forma e que falar sobre o que sentem é fundamental.",
    ],
    sections: [
      {
        id: "baby-blues",
        title: "Baby blues",
        text: [
          "O baby blues corresponde a uma alteração emocional que pode surgir nos primeiros dias após o parto.",
        ],
        lists: [
          {
            title: "A mãe pode sentir",
            items: [
              "Vontade de chorar",
              "Maior sensibilidade emocional",
              "Irritabilidade",
              "Cansaço",
              "Insegurança",
              "Alterações de humor",
            ],
          },
        ],
        note: "Estes sentimentos tendem a ser passageiros, mas se forem intensos, persistentes ou preocupantes, deves procurar aconselhamento profissional.",
        links: ["snsSaudeMental"],
      },
      {
        id: "depressao-pos-parto",
        title: "Depressão pós-parto",
        text: [
          "A depressão pós-parto é um problema de saúde mental que pode surgir após o nascimento do bebé e que necessita de acompanhamento profissional.",
        ],
        lists: [
          {
            title: "Alguns sinais",
            items: [
              "Tristeza persistente",
              "Perda de interesse nas atividades",
              "Ansiedade intensa",
              "Sentimentos de culpa",
              "Dificuldade em dormir",
              "Falta de energia",
              "Dificuldade em estabelecer ligação emocional com o bebé",
            ],
          },
        ],
        note: "A depressão pós-parto não é culpa da mãe. Existe tratamento e acompanhamento.",
        links: ["sns24Depressao"],
      },
      {
        id: "ansiedade",
        title: "Ansiedade e insegurança na maternidade",
        text: [
          "É natural que a chegada de um bebé traga dúvidas e preocupações. Algumas mães podem sentir medo de não conseguir cuidar corretamente do bebé ou de não corresponder às expectativas.",
        ],
        lists: [
          {
            title: "Pode surgir",
            items: [
              "Medo de cometer erros",
              "Preocupação excessiva com a saúde do bebé",
              "Insegurança nos cuidados",
              "Alterações emocionais",
            ],
          },
        ],
        note: "Falar com alguém de confiança faz a diferença.",
      },
      {
        id: "rede-apoio",
        title: "A importância da rede de apoio",
        text: [
          "A rede de apoio é fundamental para ajudar a mãe a enfrentar os desafios da maternidade.",
        ],
        lists: [
          {
            title: "Família, amigos e profissionais de saúde podem ajudar com",
            items: [
              "Apoio emocional",
              "Ajuda nas tarefas domésticas",
              "Participação nos cuidados ao bebé",
              "Disponibilidade para ouvir a mãe",
              "Acompanhamento às consultas",
              "Respeito pelas decisões da mãe",
            ],
          },
        ],
        links: ["sns24GuiaPais"],
      },
      {
        id: "pedir-ajuda",
        title: "Quando pedir ajuda?",
        text: [
          "Pedir ajuda é um ato de cuidado e não deve ser motivo de vergonha. Quando sentes que as emoções estão a afetar o teu dia a dia, fala com um profissional de saúde.",
        ],
        alert: {
          title: "Se tiveres pensamentos de te magoar ou de magoar o bebé, procura ajuda imediata.",
          text: "Em situações de perigo imediato, liga 112. Para aconselhamento psicológico, liga SNS 24: 808 24 24 24 (opção 4), 24 horas por dia.",
        },
        links: ["sns24Depressao", "sns24Inicio", "sns24App"],
      },
    ],
  },
];

export const getTopic = (slug) => TOPICS.find((t) => t.slug === slug);
