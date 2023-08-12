
enum Activity {
  search = 'acsr',
  b = 'b',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  h = 'h',
  i = 'i',
  j = 'j'
}

type periodType = {
  period: 'manha' | 'tarde' | 'noite'
  activity: Activity[]
}

interface RitContract {
  segunda: periodType[]
  terca: periodType[]
  quarta: periodType[]
  quinta: periodType[]
  sexta: periodType[]
}