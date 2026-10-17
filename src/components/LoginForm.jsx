function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    alert(`Thank you for visiting ${email}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      Email:
      <input type="email" name="email"
        placeholder="Email" required />
      <br /><br />
      Password:
      <input type="password" name="password"
        placeholder="Password" required />
      <br /><br />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;