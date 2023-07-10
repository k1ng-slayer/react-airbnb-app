import React from "react";
import HeaderA from "./subcomponents/HeaderA";
import HeroA from "./subcomponents/HeroA";
import Card from "./subcomponents/Card";
import data from "./data";

function ComponentA() {
    const card = data.map((x) => {
        return (
            <Card
                key={x.id}
                image={x.coverImg}
                rating={x.stats.rating}
                ratingsCount={x.stats.reviewCount}
                country={x.location}
                description={x.title}
                price={x.price}
                openSpots={x.openSpots}
            />
        );
    });

    return (
        <>
            <HeaderA />
            <HeroA />
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: "20px",
                    overflowX: "auto",
                    margin: "0px 37px 30px 37px",
                }}
            >
                {card}
            </div>
        </>
    );
}

export default ComponentA;
