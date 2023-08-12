'use client'

import { SectionHeader } from "@/components/section-header"
import { SelectInput } from "@/components/inputs/select-input"
import { SeparatorElement } from "@/components/separator"
import { TextInput } from "@/components/inputs/text-input"
import { TextAreaInput } from "@/components/inputs/text-area-input"

export default function Home() {
  return (
    <>
    <div className="pt-40 flex flex-col justify-left items-center lg:pt-26">
      <h1 className="text-zinc-800 text-3xl font-semibold text-center mb-6">RELATÓRIO DE ATIVIDADES DOCENTES (RIT)</h1>
      <form className="flex flex-col items-left w-3/4">
          <TextInput type={'text'} label={"Semestre Letivo"} placeholder={"Ex.: 2023.1"} id={"semester"} />
          <SeparatorElement />
          <section>
            <SectionHeader title="IDENTIFICAÇÃO DO SERVIDOR"/>
            <div className="grid grid-cols-2">
              <TextInput type={'text'} label={"Nome:"} placeholder={"Fulano da Silva"} id={"name"}/>
              <TextInput type={'text'} label={"Matricula SIAPE"} placeholder={"123456-789"} id={"siape"}/>
            </div>
            <div className="grid grid-cols-1 mt-3 md:grid-cols-3">
              <TextInput type={'text'} label={"Curso ou departamento:"} placeholder={"Ex.: Fulano da Silva"} id={"name"}/>
              <SelectInput label="Campus" options={["Campus Cedro", "Campus Iguatu"]} id={"campus"}/>
              <SelectInput label="Tipo de vínculo" options={["Efetivo", "Substituto", "Temporário", "Colaboração técnica"]} id={"type"}/>
            </div>
            <div className="grid grid-cols-1 mt-3 md:grid-cols-3">
              <TextInput type={'email'} label={"Email:"} placeholder={"exemplo@mail.com"} id={"email"} />
              <TextInput type={'tel'} label={"Telefone:"} placeholder={"(00)00000-0000"} id={"tel"}/>
              <SelectInput label="Regime de trabalho" options={["40h D.E.", "40h", "20h"]} id={"type"}/>
            </div>
          </section>
          <SeparatorElement />
          <section>
            <SectionHeader title="ATIVIDADES DE ENSINO"/>
            <TextAreaInput label={"Listar disciplinas ministradas, orientações de alunos concluídas no decorrer do semestre ou em andamento, horários disponibilizados para o atendimento ao aluno, e demais atividades de ensino descritas no Plano de Trabalho Docente."} id={"atividades-de-ensino"} />
          </section>
          
          <section>
            <SectionHeader title="ATIVIDADES DE PESQUISA APLICADA"/>
            <TextAreaInput label={"Relatar o andamento dos projetos e demais atividades de pesquisa aplicada listadas no Plano de Trabalho Docente. No caso de projetos, indicar o cronograma de execução (prazos atuais) e as atividades desenvolvidas no decorrer do semestre.."} id={"atividades-de-pesquisa-aplicada"} />
          </section>
          
          <section>
            <SectionHeader title="ATIVIDADES DE EXTENSÃO"/>
            <TextAreaInput label={"Relatar o andamento dos projetos e demais atividades de extensão listadas no Plano de Trabalho Docente. No caso de projetos ou programas, indicar o cronograma de execução (prazos atuais) e as atividades desenvolvidas no decorrer do semestre."} id={"atividades-de-extensao"} />
          </section>
          
          <section>
            <SectionHeader title="ATIVIDADES DE GESTÃO"/>
            <TextAreaInput label={"Descrever as principais atividades desenvolvidas na gestão institucional do IFCE de acordo com a função; ou atividades em comissões/fiscalizações realizadas no decorrer do semestre de acordo com o Plano de Trabalho Docente."} id={"atividades-de-gestao"} />
          </section>
          
          <section>
            <SectionHeader title="ATIVIDADES DE CAPACITAÇÃO"/>
            <TextAreaInput label={"Descrever o andamento das atividades de capacitação realizada e seu cronograma atual."} id={"atividades-de-capacitacao"} />
          </section>
      </form>
    </div>
    </>
  )
}
