import BodyTable from "./body-table";

export interface ITableDate {
    data: Array<string>
}



export default function InputNumber({ data }: ITableDate) {
    return (
        <table className="w-full border-collapse border border-gray-300">
            <BodyTable data={data} />
        </table>
    );
}

