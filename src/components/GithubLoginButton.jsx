import "../App.css";
import github from "../assets/github.svg";

function GithubLoginButton() {
  return (
    <div className="githubLogin">
      <img src={github} alt="GitHub" />
      <p>Entrar com GitHub</p>
    </div>
  );
}

export default GithubLoginButton;
