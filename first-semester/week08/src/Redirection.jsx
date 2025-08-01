import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  const [params] = useSearchParams();

  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json();
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token);
        navigate("/greeting");
      });
    });
  }, [authCode, grant_type, navigate]);

  return <div>Redirection Page: 카카오 로그인 중…</div>;
};

export default Redirection;
