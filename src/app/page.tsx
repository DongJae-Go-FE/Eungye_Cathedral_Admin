import { doLogout } from "@/actions/loginActions";

export default function Home() {
  return (
    <main>
      로그인 완료
      <button onClick={doLogout}>로그아웃</button>
    </main>
  );
}
