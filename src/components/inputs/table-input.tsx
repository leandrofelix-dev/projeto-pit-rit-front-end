import * as Label from '@radix-ui/react-label';
import { TouchableTable } from './touchable-table';

export const TableInput = () => {
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const periods = ['Manhã 🌥', 'Tarde ☀️', 'Noite 🌙'];
  const times = ['A', 'B', 'C', 'D'];
  const options = ['aula', 'planejamento', 'atendimento ao aluno', 'apoio de ensino', 'orientação', 'extracurricular', 'pesquisa', 'extensão', 'gestão', 'comissões'];

  return (
    <div className="flex flex-col px-4 -mt-6">
      <Label.Root className='text-zinc-500 mb-1' >
        Distribuição da carga horária do discente no semestre anterior
      </Label.Root>
      <div className="grid grid-cols-6 gap-1 mt-4">
        <div className="col-span-1"></div>
        {daysOfWeek.map(day => (
          <div key={day} className='col-span-1 border bg-zinc-100 border-zinc-200 h-12 flex justify-center items-center text-zinc-600 font-semibold rounded-sm'>{day}</div>
        ))}
        {periods.map(period => (
          <>
            <div key={period} className='col-span-1 bg-zinc-100 rounded-sm border text-zinc-600 font-semibold border-zinc-200 flex justify-center items-center'>      
              {period}
            </div>
            {daysOfWeek.map(day => (
              <div key={`${day}-${period}`} className="col-span-1 flex flex-col gap-0.5">
                {times.map(period => (
                  <TouchableTable key={`${day}-${period}-${period}`} id={'touchable-id'} options={options}/>
                ))}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
