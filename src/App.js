import "./App.css";

import Header from "./components/Header";
import LoginTitle from "./components/LoginTitle";
import GithubLoginButton from "./components/GithubLoginButton";
import Separator from "./components/Separator";
import OptionsForm from "./components/OptionsForm";
import FormInput from "./components/FormInput";
import Button from "./components/Button";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <div className="container">
          {/* Container */}
          <LoginTitle />

          {/* GitHub */}
          <GithubLoginButton />

          {/* Separator */}
          <Separator />

          {/* Formulário */}
          <div className="form">
            <form>
              <FormInput
                type="text"
                name="email"
                placeholder="Digite o seu e-mail"
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Digite a sua senha"
              />
              <Button text="Entrar" />
            </form>
          </div>

          {/* Options Form */}
          <OptionsForm />
        </div>
      </main>
    </div>
  );
}

export default App;
