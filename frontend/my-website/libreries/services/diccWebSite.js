  import {MyServices} from '../components/MyServices'

export const diccWebSite = {
  "HOME": {
    name: "E. SUDAÑEZ",
    link: "/",
    componente: () => <div>Home</div>
  },
  "ABOUT": {
    name: "ABOUT",
    link: "/about",
    componente: () => <div>About</div>
  },
  "SERVICES": {
    name: "SERVICES",
    link: "/myServices",
    componente: () => <MyServices />
  },
  "CONTACT": {
    name: "CONTACT",
    link: "/contact",
    componente: () => <div>Contact</div>
  },
  "LABS": {
    name: "LABS",
    link: "/labs",
    componente: () => <div>Labs</div>
  }

};