## Telepítés / Installation

```bash
npm install
```

## Futtatás / Running

```bash
npm run dev
```
.

(english down below)

# Bérkalkulátor - React projekt
## Leírás

A keretprogram egy egyszerű és lecsupaszított alkalmazás Vite-tel létrehozva. A fő `App` komponens egyszerűen csak megjeleníti a `HouseholdSalaryCalculator` komponenst. A `components` mappában található mappaszerkezet az ajánlott eljárás a kód strukturálás szempontjából. Minden mappában található egy `jsx` kiterjesztésű fájl, illetve egy `components` mappa, ahova a logikailag alá tartozó komponensek kerülhetnek.
(Például amennyiben van egy lista komponensünk, a listaelem komponensek kerülhetnének a `components` mappába.)

Az alkalmazás három fő részből áll:

- Családtag kiválasztó fülek
- Bérkalkulátor
- Háztartás összesítő bértáblázat

A fenti három komponens megjelenítéséért felel a `HouseholdSalaryCalculator` komponens.

A létrehozott fájlokat és mappaszerkezetet kedved szerint módosíthatod.



Projekt Leírás (Magyar)
Projekt Neve: Bérkalkulátor

Leírás:
A Bérkalkulátor projekt célja egy olyan webes alkalmazás létrehozása volt, amely lehetővé teszi a felhasználók számára, hogy havi bruttó bérük alapján kiszámolják a nettó jövedelmüket. Az alkalmazás figyelembe veszi a különböző adókedvezményeket is, és lehetőséget biztosít több háztartásban élő személy bevételeinek összesítésére.

Főbb Funkciók:

Bruttó-Nettó bérkalkuláció: Automatikusan kiszámítja a nettó bért a megadott bruttó bér alapján.
Adókedvezmények kezelése: A felhasználók különböző adókedvezményeket aktiválhatnak, mint például a 25 év alattiak SZJA kedvezménye, személyi adókedvezmény, első házasok kedvezménye és eltartottak utáni kedvezmény.
Háztartás nettó bevétele: Lehetőség több személy jövedelmének megadására és a háztartás teljes nettó bevételének kiszámítására.
Technológiák:

React: A projekt során alaposan megismerkedtem a React keretrendszerrel, ami a felhasználói felület dinamikus kezelését tette lehetővé.
TypeScript: Fejlesztettem a TypeScript tudásomat, amely segített a típusbiztos kód írásában és a hibák csökkentésében.
Tanulságok:
Ez a projekt az egyik első nagyobb projektem volt, amely során mélyebb betekintést nyertem a React működésébe, és gyakorlati tapasztalatokat szereztem a TypeScript használatában. A projekt megvalósítása során fejlesztettem a JavaScript alapjaimat, és megszilárdítottam a modern webfejlesztési technológiák ismeretét.

Project Description (English)
Project Name: Salary Calculator

Description:
The goal of the Salary Calculator project was to create a web application that allows users to calculate their net income based on their monthly gross salary. The application takes into account various tax deductions and provides an option to aggregate the incomes of multiple household members.

Key Features:

Gross-Net Salary Calculation: Automatically calculates net salary based on the provided gross salary.
Tax Deductions Management: Users can activate various tax deductions such as the under 25 SZJA deduction, personal tax deduction, first marriage deduction, and dependents' deductions.
Household Net Income: Allows users to input multiple household members' incomes and calculate the total net income for the household.
Technologies:

React: During this project, I gained a deep understanding of the React framework, enabling dynamic user interface management.
TypeScript: I improved my TypeScript skills, which helped in writing type-safe code and reducing errors.
Learnings:
This project was one of my first major projects, where I delved deeper into the workings of React and gained practical experience with TypeScript. Implementing this project enhanced my JavaScript fundamentals and solidified my knowledge of modern web development technologies.
