interface IOrientationProps {
  label: string
  msg: string
}
export default function OrientationComponent({label, msg}: IOrientationProps) {
  return (
    <section>
      <h1>Orientações para preencher o {label}</h1>
      <p>{msg}</p>
      <button>Preencher relatório</button>
    </section>
  );
}