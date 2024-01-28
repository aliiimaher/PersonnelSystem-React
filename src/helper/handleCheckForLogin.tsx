function handleCheckForLogin() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  alert("ابتدا وارد شوید.");
  location.href = "/login/";
  return false;
}

export default handleCheckForLogin;
