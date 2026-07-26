# GiardDesign

Strona internetowa wykonana w ramach zadania rekrutacyjnego dla GiardDesign — firmy zajmującej się projektowaniem, wizualizacją i realizacją ogrodów.

##  Stack technologiczny

- **React** (v19) + **Vite**
- **JavaScript**
- **Tailwind CSS v4**
- **Framer Motion** — animacje, przejścia `AnimatePresence`
- **React Portal** — popup z galerią zdjęć renderowany poza głównym drzewem DOM
- **react-masonry-css** — układ typu masonry dla galerii realizacji
- **lucide-react** — ikony

##  Struktura projektu

```
src/
├── assets/       # obrazy, grafiki
├── components/   # komponenty widoku (Navbar, Introduction, Offer, Popup, ...)
├── hooks/        # własne hooki (np. useClickOutside)
└── ui/
    └── svg/      # komponenty SVG (np. Logo)
```

##  Funkcjonalności

- **Responsywny layout** (mobile-first) z dopracowanymi breakpointami dla telefonów, tabletów i desktopa
- **Interaktywny slider/karuzela** zdjęć w sekcji głównej — obsługa swipe'a (touch/drag) oraz przycisków nawigacyjnych
- **Animowana nawigacja** — rozwijane dropdowny (desktop i mobile) z animacjami wejścia/wyjścia opartymi o `AnimatePresence` i warianty Framer Motion
- **Wysuwana wyszukiwarka** w navbarze z płynną animacją szerokości
- **Popup z galerią zdjęć** renderowany przez React Portal, z nawigacją strzałkami i animacją pojawiania się/znikania
- **Galeria realizacji** w układzie masonry (react-masonry-css)

##  Uruchomienie lokalne

```bash
# instalacja zależności
npm install

# serwer deweloperski
npm run dev

# build produkcyjny
npm run build

# podgląd buildu produkcyjnego
npm run preview
```

##  Autor

Kacper Za. — projekt wykonany jako zadanie rekrutacyjne.