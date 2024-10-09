import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className={styles.loading}>Estamos preparando sua receita</h1>
      <div>
        <DotLottieReact
          src="https://lottie.host/a4c75b0a-3bad-4479-80d9-8705fabc20f7/JK7A6PJh1v.json"
          loop
          autoplay
        />
      </div>
    </div>
  );
}