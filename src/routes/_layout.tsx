import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const Route = createFileRoute('/_layout')({
  component: Layout
});
