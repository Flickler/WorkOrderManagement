export function LoginForm() {
  return (
    <>
      <div className="form__header">
        <div className="h2">Bem Vindo(a)!</div>
        <div className="normal">Faça login para continuar!</div>
      </div>
      <form>
        <div className="fieldset">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            className="inputfield"
            placeholder="Digite seu email"
          />
        </div>
        <div className="fieldset">
          <label htmlFor="password" className="label">
            Senha
          </label>
          <input
            type="password"
            className="inputfield"
            placeholder="Digite sua senha"
          />
        </div>
      </form>
      <button className="primary__btn" type="submit">
        Entrar
      </button>
    </>
  );
}
