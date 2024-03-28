import { OrderStatus } from '@/types/orderStatus';

export const OrderStatusBadge: React.FC<{ orderStatus: OrderStatus }> = ({
  orderStatus,
}) => {
  let badgeColor = '';
  switch (orderStatus) {
    case OrderStatus.TO_PRODUCE:
      badgeColor =
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      break;
    case OrderStatus.IN_PRODUCTION:
      badgeColor =
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      break;
    case OrderStatus.PRODUCED:
      badgeColor =
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      break;
    case OrderStatus.SHIPPED:
      badgeColor =
        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      break;
    case OrderStatus.PENDING:
      badgeColor =
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      break;
    default:
      badgeColor =
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      break;
  }

  return (
    <span
      className={`me-2 rounded px-2.5 py-0.5 text-sm font-medium ${badgeColor}`}
    >
      {orderStatus}
    </span>
  );
};
