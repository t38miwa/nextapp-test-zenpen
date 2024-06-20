import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtVerify, JWTPayload } from "jose";

const useAuth = () => {
  const [loginUserEmail, setLoginUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/user/login");
        return;
      }

      try {
        const secretKey = new TextEncoder().encode("next-market-app-book");
        const decodedJwt = await jwtVerify(token, secretKey);
        const payload = decodedJwt.payload as JWTPayload & { email?: string };

        if (payload.email) {
          setLoginUserEmail(payload.email);
        } else {
          throw new Error("No email in token payload");
        }
      } catch (error) {
        router.push("/user/login");
      }
    };

    checkToken();
  }, [router]);

  return loginUserEmail;
};

export default useAuth;
