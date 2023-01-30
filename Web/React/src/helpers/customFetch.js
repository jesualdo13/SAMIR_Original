export async function customFetch(state, url, options) {
  const { fetchState, setFetchState, onError, onSuccess } = state;

  setFetchState({
    ...fetchState,
    isLoading: true,
  });

  try {
    const response = await fetch(url, options);
    const object = await response.json();

    if (object.success) {
      setFetchState({
        data: object.data,
        isLoading: false,
        hasError: false,
        message: object.message ? object.message : null,
      });
      onSuccess && onSuccess();
    } else {
      setFetchState({
        data: null,
        isLoading: false,
        hasError: true,
        message: object.message,
      });
      onError && onError();
    }

    console.log(response, object);
  } catch (error) {
    setFetchState({
      data: null,
      isLoading: false,
      hasError: true,
      message: "Error de comunicación",
    });

    console.log(error);
    onError && onError();
  }
}
