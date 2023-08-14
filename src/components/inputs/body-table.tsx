import { ITableDate } from "./input-number";
import RowTable from "./row-table";

export default function BodyTable({ data }: ITableDate) {
    return (
        <tbody>
            {data.map((_item, index) => (
                <RowTable key={index}  title={_item} color={index % 2 == 0 ? "bg-gray-100" : "bg-white"}/>
            ))}
        </tbody>
    );
}