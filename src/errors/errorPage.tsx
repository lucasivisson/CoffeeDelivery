import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if(isRouteErrorResponse(error)) {
    if(error.status === 404) {
      return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Desculpa, ocorreu um erro inesperado.</p>
          <p>
            <i>{error.statusText || error.error?.message}</i>
          </p>
        </div>
      );
    }
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpa, ocorreu um erro inesperado.</p>
    </div>
  );
}