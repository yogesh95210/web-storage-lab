import { useEffect, useState } from "react";
import { setCookie, getCookie, deleteCookie } from "../utils/cookies";

const AuthDemo: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const sessionId = getCookie("sessionId");
    setIsLoggedIn(Boolean(sessionId));
  }, []);

  const handleLogin = (): void => {
    // Simulating server setting cookie
    setCookie("sessionId", "abc123");
    setIsLoggedIn(true);
  };

  const handleLogout = (): void => {
    deleteCookie("sessionId");
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Cookie-based Auth (TSX)</h2>

      {isLoggedIn ? (
        <>
          <p>✅ Logged in (session cookie exists)</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>❌ Not logged in</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthDemo;
