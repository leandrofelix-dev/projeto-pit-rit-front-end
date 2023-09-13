
export interface IProps{
    color: string,
    title: string,
}


export default function RowTable({title, color}: IProps) {
    return (
        <tr className={color}>
            <td className="p-2 border border-gray-300">{title}</td>
            <td className="p-2 border border-gray-300"><input type="number" name="input-number" id="inputNumber" placeholder="Max: 20" max={20} min={6} className="w-full px-2 py-1 border border-gray-300 rounded" /></td>
        </tr>
    );
}