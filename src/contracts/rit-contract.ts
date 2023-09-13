import { type } from "os";

enum Activity {
  search = "acsr",
  b = "b",
  c = "c",
  d = "d",
  e = "e",
  f = "f",
  g = "g",
  h = "h",
  i = "i",
  j = "j",
}

type periodType = {
  period: "manha" | "tarde" | "noite";
  activity: Activity[];
};

export interface RitContract {
  segunda: periodType[];
  terca: periodType[];
  quarta: periodType[];
  quinta: periodType[];
  sexta: periodType[];
}

export const Data = {
  AULAS: [
    "Cursos Técnico e/ou Licenciaturas, com base na lei 11.892 de 29 de dezembro de 2008 (mínimo de 6 horas)",
    "Cursos de Especialização Técnica, Graduação e Pós-graduação (lato sensu e stricto sensu)",
    "Cursos FIC (Observar o Art.7, §4º regulamentação da carga horária)",
  ],

  MANUTENÇÃO: ["Preparação + Planejamento", "Atendimento a Estudantes"],

  APOIO: [
    "Participação nos encontros técnico-pedagógicos, reuniões com os diversos setores da gestão",
  ],

  ORIENTAÇÃO: [
    "Orientação de TCC de graduação",
    "Orientação de Estágio Supervisionado (Supervisor/Orientador)",
    "Orientação de Estágio Supervisionado (curso com regulamentação diferenciada em Conselho de Classe Profissional)",
    "Monitoria",
    "Programa Institucional de Bolsas de Iniciação à Docência (PIBID) ou outro programa voltado a permanência e ao êxito estudantis",
  ],

  EXTRACURRICULAR: [
    "Responsável por Laboratório",
    "Projetos ou atividades complementares de ensino extracurriculares",
  ],

  PESQUISA_APLICADA: [
    "Coordenação de projeto de pesquisa aplicada, desenvolvimento ou inovação cadastrado na PRPI com fomento IFCE ou sem recursos",
    "Coordenação de projeto de pesquisa aplicada, desenvolvimento ou inovação cadastrado na PRPI com captação de recursos externos ao IFCE de agências oficiais de fomento e fundações de apoio a pesquisa",
    "Participação na equipe de projeto de pesquisa aplicada, desenvolvimento ou inovação, cadastrado na PRPI",
    "Orientação ou coorientação em cursos de especialização, mestrado ou doutorado, no IFCE ou em outra instituição de ensino superior com anuência do IFCE",
    "Bolsista produtividade do IFCE ou agências oficiais de fomento",
    "Participação em programa de pós-graduação, em nível de mestrado ou doutorado, como docente COLABORADOR (do IFCE ou outra IES com anuência do IFCE)",
    "Participação em programa de pós-graduação, em nível de mestrado ou doutorado, como docente PERMANENTE (do IFCE ou outra IES com anuência do IFCE)",
    "Coordenação ou participação em equipe de projeto de pesquisa aplicada, desenvolvimento ou inovação cadastrado na PRPI com fomento externo proveniente de parcerias ou convênios com empresas privadasd",
    "Líder de Grupo de Pesquisa devidamente homologado pela PRPI",
    "Exercício da função de Editor(a)-chefe em periódico científico do IFCE",
    "Revisor de Periódicos ou Eventos Científicos",
    "Coordenação de comitê de ética em pesquisa do IFCE",
    "Participação como membro relator de comitê de ética em pesquisa do IFCE",
  ],

  EXTENSÃO: [
    "Coordenação de projeto/programa de extensão cadastrado na PROEXT com fomento IFCE ou sem recursos",
    "Coordenação de projeto/programa de extensão cadastrado na PROEXT com captação de recursos externos ao IFCE",
    "Participação na equipe de projeto ou programa de extensão, cadastrado na PROEXT, exceto aula FIC",
    "Coordenação de incubadoras de empresas",
    "Coordenação dos NAPNEs ou NEABIs",
    "Participação em NAPNEs ou NEABIs",
    "Cursos FIC (quantidade de horas por curso)",
    "Preparação + Planejamento dos cursos FIC",
    "Planejamento e organização de eventos de extensão",
  ],

  GESTÃO:[
    "Coordenador de Curso",
    "Coordenador de Setor",
    "Chefe de Departamento",
    "Diretores de Área/Setor",
    "Assessor da Reitoria",
    "Coordenador de Implantação de Campus",
    "Assistente de Pró-Reitoria ou Chefe de Gabinete de Campus",
    "Coordenador de programa institucional: ensino, pesquisa aplicada ou extensão",
  ],

  COMISSÕES: [
    "Conselhos, comissões ou comitês permanentes institucionais",
    "Comissão Própria de Avaliação e Comissão Permanente de Pessoal Docente (Central)",
    "Comissão Própria de Avaliação e Comissão Permanente de Pessoal Docente (Local)",
    "Conselhos ou comitês permanentes externos",
    "Colegiado de Cursos",
    "Núcleo Docente Estruturante (NDE)",
    "Comissão de Processo Administrativo Disciplinar",
    "Participação em Direção Sindical como titular",
    "Fiscalização de contrato",
  ]
};
