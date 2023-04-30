import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Pad Thai',
        description: 'A delicious Thai dish with noodles, veggies and peanuts',
        price: 14.99,
    },
    {
        id: 'm6',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella cheese, and basil',
        price: 10.99,
    },
    {
        id: 'm7',
        name: 'Pesto Pasta',
        description: 'Pasta with a fresh pesto sauce and cherry tomatoes',
        price: 12.99,
    },
    {
        id: 'm8',
        name: 'Beef Stroganoff',
        description: 'Tender beef in a creamy mushroom sauce served with egg noodles',
        price: 20.99,
    },
    {
        id: 'm9',
        name: 'Chicken Tikka Masala',
        description: 'A popular Indian dish with marinated chicken in a spicy tomato-based sauce',
        price: 17.99,
    },
    {
        id: 'm10',
        name: 'Fish and Chips',
        description: 'A classic British dish of battered fish and french fries',
        price: 15.99,
    },
];

const AvailableMeals = () => {
    const returnMeals = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    );
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {returnMeals}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;