/* eslint-disable react/jsx-key */
import { OrderStatus } from '@/types/orderStatus';

/* eslint-disable jsx-a11y/label-has-associated-control */
export const SelectFilter: React.FC<{
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ filters, setFilters }) => {
  const handleClickInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetIndex = filters.findIndex(
      (item: string) => item === e.target.value,
    );

    if (targetIndex > -1) {
      if (!e.target.checked) {
        setFilters((prevState: string[]) =>
          prevState.filter((_, index) => index !== targetIndex),
        );
      }
    } else if (e.target.checked) {
      setFilters((prevState: string[]) => [...prevState, e.target.value]);
    }
  };

  return (
    <div className="mt-2">
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        {Object.keys(OrderStatus).map((key) => (
          <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
            <div className="flex items-center ps-3">
              <input
                onChange={handleClickInput}
                id="vue-checkbox-list"
                type="checkbox"
                value={key}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                checked={filters.includes(key)}
              />
              <label
                htmlFor="vue-checkbox-list"
                className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {OrderStatus[key as keyof typeof OrderStatus]}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
