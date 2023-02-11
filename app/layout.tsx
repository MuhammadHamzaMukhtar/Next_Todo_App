import './globals.css'
import styles from './page.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
            <h1 className={styles.center}>Welcome To Next 13 Todo App</h1>
        </header>
        {children}</body>
    </html>
  )
}
