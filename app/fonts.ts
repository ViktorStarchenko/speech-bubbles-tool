// app/fonts.ts
import localFont from 'next/font/local';

export const comicNeue = localFont({
    src: [
        {
            path: '../assets/fonts/Comic_Neue/ComicNeue-Bold.ttf',
            weight: '800',
            style: 'normal',
        },{
            path: '../assets/fonts/Comic_Neue/ComicNeue-BoldItalic.ttf',
            weight: '800',
            style: 'italic',
        },{
            path: '../assets/fonts/Comic_Neue/ComicNeue-Regular.ttf',
            weight: '400',
            style: 'normal',
        },{
            path: '../assets/fonts/Comic_Neue/ComicNeue-Bold.ttf',
            weight: '800',
            style: 'normal',
        },{
            path: '../assets/fonts/Comic_Neue/ComicNeue-Bold.ttf',
            weight: '800',
            style: 'normal',
        },{
            path: '../assets/fonts/Comic_Neue/ComicNeue-Bold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-comic-neue',
    display: 'swap',
});

export const kalam = localFont({
    src: [
        {
            path: '../assets/fonts/Kalam/Kalam-Bold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Kalam/Kalam-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Kalam/Kalam-Regular.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
    variable: '--font-kalam',
    display: 'swap',
});

export const rubik = localFont({
    src: [
        {
            path: '../assets/fonts/Rubik/Rubik-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Rubik/Rubik-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Rubik/Rubik-Regular.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
    variable: '--font-kalam',
    display: 'swap',
});
