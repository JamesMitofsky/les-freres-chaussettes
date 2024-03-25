/* eslint-disable react/jsx-key */
import { OrderStatus } from "@/types/orderStatus";

/* eslint-disable jsx-a11y/label-has-associated-control */
export const SelectFilter: React.FC<{
    filters: string[],
    setFilters: React.Dispatch<React.SetStateAction<string[]>>
}> = ({ filters, setFilters }) => {

    const handleClickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetIndex = filters.findIndex((item: string) => item === e.target.value);

        if (targetIndex > -1) {
            if (!e.target.checked) {
                setFilters((prevState: string[]) => prevState.filter((_, index) => index !== targetIndex));
            }
        } else if (e.target.checked) {
            setFilters((prevState: string[]) => [...prevState, e.target.value]);
        }
    };

    return (
        <div className="mt-2">
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {Object.keys(OrderStatus).map(key => (
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input
                                onChange={handleClickInput}
                                id="vue-checkbox-list"
                                type="checkbox"
                                value={key}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                checked={filters.includes(key)}
                            />
                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {OrderStatus[key as keyof typeof OrderStatus]}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );


}