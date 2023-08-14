'use client'
import { useState } from "react"

import { SectionHeader } from "@/components/section-header"
import { SelectInput } from "@/components/inputs/select-input"
import { SeparatorElement } from "@/components/separator"
import { TextInput } from "@/components/inputs/text-input"
import { SubmitButton } from "@/components/inputs/submit-button"
import InputNumber from "@/components/inputs/input-number"
import { Data } from "@/contracts/rit-contract"


export default function Pit() {
    return (
        <>
            <div className="pt-40 flex flex-col justify-left items-center lg:pt-26">
                <h1 className="text-zinc-800 text-3xl font-semibold text-center mb-6">PLANO DE TRABALHO DOCENTE (PIT)</h1>
                <form className="flex flex-col items-left w-3/4">
                    <TextInput type={'text'} label={"Semestre Letivo"} placeholder={"Ex.: 2023.1"} id={"semester"} />
                    <SeparatorElement />
                    <section>
                        <SectionHeader title="IDENTIFICAÇÃO DO SERVIDOR" />
                        <div className="grid grid-cols-2">
                            <TextInput type={'text'} label={"Nome:"} placeholder={"Fulano da Silva"} id={"name"} />
                            <TextInput type={'text'} label={"Matricula SIAPE"} placeholder={"123456-789"} id={"siape"} />
                        </div>
                        <div className="grid grid-cols-1 mt-3 md:grid-cols-3">
                            <TextInput type={'text'} label={"Curso ou departamento:"} placeholder={"Ex.: Fulano da Silva"} id={"course-or-department"} />
                            <SelectInput label="Campus" options={["Cedro", "Iguatu"]} id={"campus"} />
                            <SelectInput label="Tipo de vínculo" options={["Efetivo", "Substituto", "Temporário", "Colaboração técnica"]} id={"link-type"} />
                        </div>
                        <div className="grid grid-cols-1 mt-3 md:grid-cols-3">
                            <TextInput type={'email'} label={"Email:"} placeholder={"exemplo@mail.com"} id={"email"} />
                            <TextInput type={'tel'} label={"Telefone:"} placeholder={"(00)00000-0000"} id={"tel"} />
                            <SelectInput label="Regime de trabalho" options={["40h D.E.", "40h", "20h"]} id={"working-arrangements"} />
                        </div>
                    </section>
                    <SeparatorElement />
                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE ENSINO" />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="AULAS EM FIC, TÉCNICO, ESPECIALIZAÇÃO TÉCNICA, GRADUAÇÃO E PÓS-GRADUAÇÃO" />
                        <InputNumber data={Data.AULAS} />
                    </section>
    
                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE MANUTENÇÃO AO ENSINO (até 18 horas)" />
                        <InputNumber data={Data.MANUTENÇÃO} />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE APOIO AO ENSINO (2 horas)" />
                        <InputNumber data={Data.APOIO} />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE ORIENTAÇÃO (até 10 horas)" />
                        <InputNumber data={Data.ORIENTAÇÃO} />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE ENSINO EXTRACURRICULAR (até 25% do regime de trabalho)" />
                        <InputNumber data={Data.EXTRACURRICULAR} />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE PESQUISA APLICADA" />
                        <InputNumber data={Data.PESQUISA_APLICADA} />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE EXTENSÃO" />
                        <InputNumber data={Data.EXTENSÃO} />
                    </section>
                    <SeparatorElement />
                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE GESTÃO (Somente para os regimes de trabalho de 40h ou 40h com D.E.)" />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES DE GESTÃO INSTITUCIONAL E ACADÊMICA" />
                        <InputNumber data={Data.GESTÃO} />
                    </section>

                    <section className="mb-4">
                        <SectionHeader title="ATIVIDADES EM COMISSÕES OU DE FISCALIZAÇÃO" />
                        <InputNumber data={Data.COMISSÕES} />
                    </section>

                    <section className="flex justify-center mb-12">
                        <SubmitButton value="Gerar Formulário" />
                    </section>
                </form>
            </div>
        </>
    )
}
