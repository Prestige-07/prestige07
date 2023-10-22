export const selectOrders = state => state.orders.items;

export const selectOrderByNumber = state => state.orders.orderByNumber;

export const selectIsLoadingOrders = state => state.orders.isLoading;

export const selectTotalPages = state => state.orders.totalPages;

export const selectTotalOrders = state => state.orders.totalOrders;
