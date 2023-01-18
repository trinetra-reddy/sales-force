import { Home, Contact, About, Styleguide, Itstaffing } from "../pages";
import { CONSTANTS } from "./constants";

export const routes = [{
    component: <Home />,
    path: CONSTANTS.ROUTES.HOME_PAGE,
    isExact: true
}, {
    component: <Contact />,
    path: CONSTANTS.ROUTES.CONTACT_PAGE,
    isExact: true
}, {
    component: <About />,
    path: CONSTANTS.ROUTES.ABOUT_PAGE,
    isExact: true
}, {
    component: <Itstaffing />,
    path: CONSTANTS.ROUTES.ITSTAFFING_PAGE,
    isExact: true
}, {
    component: <Styleguide />,
    path: CONSTANTS.ROUTES.STYLEGUIDE,
    isExact: true
}];