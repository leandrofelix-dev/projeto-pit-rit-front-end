interface ISectionHeaderProps {
  title: string;
}
export const SectionHeader = ({title}: ISectionHeaderProps) => {
  return (
    <div className="flex justify-left items-center mb-6">
      <div className="w-1 h-5 bg-emerald-600 mr-2 rounded"></div>
      <h2 className="text-2xl font-semibold text-zinc-800">{title}</h2>
    </div>
  )
}