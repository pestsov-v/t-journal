import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "../public/menu/graduation-hat.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import CloudIcon from "../public/menu/cloud.svg";
import BooksIcon from "../public/menu/books.svg";
import BoxIcon from "../public/menu/box.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses  },
    {route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services  },
    {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books  },
    {route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];