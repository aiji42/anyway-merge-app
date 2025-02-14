import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { login, logout } from "~/features/userSlice";
import { useAppDispatch } from "~/hooks/useRTK";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchReduxStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const dispatchReduxStore = () => {
    if (status === "authenticated") {
      dispatch(login({ displayName: session?.user.name }));
    } else {
      dispatch(logout());
    }
  };

  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <a>サイトロゴ</a>
        </Link>
      </div>
      {status === "authenticated" && (
        <div>
          ログイン中：{session?.user.name}さん{" "}
          <button onClick={() => router.push("/dashboard")}>
            ユーザー専用ページ
          </button>{" "}
          <button onClick={() => signOut()}>ログアウト</button>
        </div>
      )}
      {status === "unauthenticated" && (
        <div>
          未ログイン <button onClick={() => signIn()}>ログイン</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
