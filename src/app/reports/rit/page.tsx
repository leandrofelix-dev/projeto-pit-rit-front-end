'use client'

import { SectionHeader } from "@/components/section-header"
import { SelectInput } from "@/components/inputs/select-input"
import { SeparatorElement } from "@/components/separator"
import { TextInput } from "@/components/inputs/text-input"

export default function Home() {
  return (
    <>
    <div className="pt-40 flex flex-col justify-left items-center lg:pt-26">
      <h1 className="text-zinc-800 text-3xl font-semibold text-center mb-6">RELATÓRIO DE ATIVIDADES DOCENTES (RIT)</h1>
      <form className="flex flex-col items-left w-4/5">
          <TextInput type={'text'} label={"Semestre Letivo"} placeholder={"Ex.: 2023.1"} id={"semester"} size={"full"} />
          <SeparatorElement />
          <section>
            <SectionHeader title="IDENTIFICAÇÃO DO SERVIDOR"/>
            <div className="flex">
              <TextInput type={'text'} label={"Nome:"} placeholder={"Ex.: Fulano da Silva"} id={"name"} size={"1/2"}/>
              <TextInput type={'text'} label={"Matricula SIAPE"} placeholder={"Formato aqui"} id={"siape"} size={"1/2"}/>
            </div>
            <div className="flex">
              <TextInput type={'text'} label={"Curso ou departamento:"} placeholder={"Ex.: Fulano da Silva"} id={"name"} size={"1/2"}/>
              <SelectInput label="Campus" options={[]}/>
            </div>
          </section>
      </form>
    </div>
    </>
  )
}
