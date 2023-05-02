export function handlePending(state) {
  state.isLoading = true;
}

export function handleFulfilled(state, action) {
  state.isLoading = false;
  state.contacts = action.payload;
  state.error = null;
}

export function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}
