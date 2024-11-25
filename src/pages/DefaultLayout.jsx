import { Outlet } from "react-router";
import MainMenu from "../components/MainMenu";


export default function defaultLayout() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu />
            </header>
            <main>
                <Outlet />

            </main>
            <footer>
                footer by
            </footer>
        </>
    )
}